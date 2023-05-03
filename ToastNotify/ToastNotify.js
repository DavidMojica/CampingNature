/*  Create --
 *********************************************************
 *                                                       *
 *                         --                            *
 *                       : || :                          *
 *                         ||                            *
 *                         ||                            *
 *                         ||                            *
 *                     . - || - .                        *
 *                    (    ||    )                       *
 *                     ) ( || ) (                        *
 *                    /    ||    \                       *
 *                   (     ||     )                      *
 *                    \    --    /                       *
 *                     \ ______ /                        *
 *                                                       *
 *                                                       *
 *                                                       *
 *                                                       *
 *                                                       *
 *                                                       *
 *********************************************************
 */
!(function () {
  var e =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
    t = "link";
  let o;
  (o = document.createElement(t)),
    "script" == t ? (o.src = e) : ((o.href = e), (o.rel = "stylesheet")),
    document.head.appendChild(o);
  let s = document.createElement("ul");
  document.body.insertBefore(s, null),
    (s.className = "notytoast"),
    (window.ToastNotify = class e {
      constructor(e, t) {
        let o = (e) => {
            e.classList.add("hide"),
              e.timeoutId && clearTimeout(e.timeoutId),
              setTimeout(() => e.remove(), 500);
          },
          s = [
            { tipo: "success", icons: "fa-circle-check", color: "#0d8a28" },
            { tipo: "error", icons: "fa-circle-xmark", color: "#bb2525" },
            {
              tipo: "warning",
              icons: "fa-triangle-exclamation",
              color: "#E9BD0C",
            },
            { tipo: "info", icons: "fa-circle-info", color: "#3498DB" },
          ].find((t) => t.tipo == e),
          i = document.querySelector(".notytoast"),
          a = document.createElement("li");
        (a.className = "toastflo " + e),
          (a.innerHTML =
            '<div class="column"><i class="fa-solid ' +
            s.icons +
            '"></i><div><b>' +
            t.head.toUpperCase() +
            "</b><br><span>" +
            t.msg +
            '</span></div></div><i class="fa-solid fa-xmark" onclick="ToastRemove(this.parentElement)"></i>'),
          i.appendChild(a),
          void 0 != t.timer
            ? (document.documentElement.style.setProperty(
                "--tiempo",
                t.timer / 1e3 + "s"
              ),
              (a.timeoutId = setTimeout(() => o(a), t.timer)))
            : document.documentElement.style.setProperty("--tiempo", "0s");
      }
    });
})();
const ToastRemove = (e) => {
  e.classList.add("hide"),
    e.timeoutId && clearTimeout(e.timeoutId),
    setTimeout(() => e.remove(), 500);
};