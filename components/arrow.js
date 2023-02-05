export default function ArrowMenu({ linkUp = "", linkDown = "" }) {
  return (
    <div class="arrowCont">
      {linkUp.length > 0 && (
        <a href={linkUp}>
          <span>
            <img class="arrowImage" src="/upwardArrow.png"></img>
          </span>
        </a>
      )}

      {linkDown.length > 0 && (
        <a href={linkDown}>
          <span>
            <img class="arrowImage" src="/downwardArrow.png"></img>
          </span>
        </a>
      )}
    </div>
  );
}
