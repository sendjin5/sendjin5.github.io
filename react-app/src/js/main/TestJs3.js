import { useEffect, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import axios from "axios";
// import marked from "marked";
import Sortable from "sortablejs";
import python from "@codemirror/lang-python";

import { Heading1 } from "lucide-react";

export const Test3 = () => {
  // return (
  //   <>
  //     <h1>테스트용</h1>;<h1>테스트용</h1>;
  //   </>
  // );
  const [cells, setCells] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const notebookRef = useRef(null);
  useEffect(() => {
    fetch("/media/notebook.json")
      .then((res) => res.json())
      .then((data) => setCells(data))
      .catch(console.error);
  }, []);
  useEffect(() => {
    if (notebookRef.current) {
      new Sortable(notebookRef.current, { animation: 150 });
    }
  }, [cells]);
  const runCode = async (code, idx) => {
    const updatedCells = [...cells];
    updatedCells[idx].output = "코드를 실행 중입addCell니다...";
    setCells(updatedCells);
    try {
      const response = await axios.post("http://15.164.170.66/executeCode/", {
        code,
        language: "python",
      });
      updatedCells[idx].output = response.data.output || "실행 결과 없음";
    } catch (error) {
      updatedCells[idx].output = `❌ 실행 실패: ${error.message}`;
    }
    setCells([...updatedCells]);
  };
  const addCell = (type) => {
    setCells([...cells, { type, markdown: "", code: "", output: "" }]);
  };
  const deleteCell = (idx) => {
    setCells(cells.filter((_, index) => index !== idx));
  };
  const duplicateCell = (idx) => {
    setCells([...cells.slice(0, idx + 1), cells[idx], ...cells.slice(idx + 1)]);
  };
  const downloadNotebook = () => {
    const blob = new Blob([JSON.stringify(cells)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notebook.json";
    a.click();
    URL.revokeObjectURL(url);
  };
  const filteredCells = cells.filter((cell) => (cell.markdown + cell.code).toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <main className="flex w-full h-[calc(100vh-105px)] bg-gray-200 overflow-auto">
      <aside className={`w-64 bg-white p-4 overflow-auto transition-transform ${sidebarOpen ? "" : "-translate-x-full"}`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? "☰ 닫기" : "☰"}</button>
        {/* Sidebar Menu Here */}
      </aside>
      <div className="flex flex-1">
        <div className="w-1/2 p-4 overflow-auto">
          <h1>Python Web Editor</h1>
          <input
            type="text"
            placeholder="🔍 문장찾기..."
            className="mb-4 p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn" onClick={() => addCell("markdown")}>
            ➕ Markdown
          </button>
          <button className="btn" onClick={() => addCell("code")}>
            ➕ Code
          </button>
          <button className="btn" onClick={downloadNotebook}>
            ⬇ Download JSON
          </button>
          {/* <div ref={notebookRef}>
            {filteredCells.map((cell, idx) => (
              <div key={idx} className="cell p-4 my-2 bg-gray-50 relative">
                <div className="absolute top-2 right-2">
                  <button onClick={() => duplicateCell(idx)}>📄</button>
                  <button onClick={() => deleteCell(idx)}>🗑️</button>
                </div>
                {cell.type === "markdown" ? (
                  <div dangerouslySetInnerHTML={{ __html: marked.parse(cell.markdown || "") }} />
                ) : (
                  <>
                    <CodeMirror
                      value={cell.code || 'print("Hello Python!")'}
                      options={{ mode: "python", theme: "default" }}
                      onChange={(val) => {
                        const newCells = [...cells];
                        newCells[idx].code = val;
                        setCells(newCells);
                      }}
                    />
                    <button onClick={() => runCode(cell.code, idx)}>Run</button>
                    <pre className="bg-black text-white p-2 mt-2">{cell.output}</pre>
                  </>
                )}
              </div>
            ))}
          </div> */}
        </div>
        <div className="w-1 bg-gray-300 cursor-ew-resize"></div>
        <div className="w-1/2 p-4 overflow-auto">
          <video controls muted playsInline autoPlay className="w-full h-auto">
            <source src="/media/video1.mp4" type="video/mp4" />
          </video>
          <button className="btn-primary">다음 레슨</button>
        </div>
      </div>
    </main>
  );
};
