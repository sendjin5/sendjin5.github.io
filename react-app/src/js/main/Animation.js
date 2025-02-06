import "../../css/animation.css";

const Animation = () => {
  return (
    <>
      <div class="mainBox">
        <div class="mainIn">
          <div class="loader"></div>
        </div>
        <div class="mainIn">
          <div class="loader2">
            <div class="box box-1">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-2">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-3">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-4">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainBox">
        <div class="mainIn">
          <div class="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
          </div>
        </div>
        <div class="mainIn">
          <div class="newtons-cradle">
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Animation;
