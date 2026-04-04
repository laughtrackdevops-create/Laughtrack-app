function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef
} = React;
const SUPA = "https://solnanbqnbkyizwrqdur.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbG5hbmJxbmJreWl6d3JxZHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMDk0NTEsImV4cCI6MjA4NjY4NTQ1MX0.wfS4LKg_4uMKxUHbDG-1X-gkgd-x5Ky7f3zYH-alXbU";
const HD = {
  apikey: KEY,
  Authorization: "Bearer " + KEY,
  "Content-Type": "application/json",
  Prefer: "return=representation"
};
async function sb(p, o) {
  const r = await fetch(SUPA + "/rest/v1/" + p, {
    ...o,
    headers: {
      ...HD,
      ...(o && o.headers)
    }
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}
async function sbAuth(ep, body) {
  const r = await fetch(SUPA + "/auth/v1/" + ep, {
    method: "POST",
    headers: {
      apikey: KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return r.json();
}
async function edge(fn, body) {
  const r = await fetch(SUPA + "/functions/v1/" + fn, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + KEY
    },
    body: JSON.stringify(body)
  });
  return r.json();
}
function fD(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}
function fDL(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
}
function fT(t) {
  if (!t) return "";
  const p = t.split(":");
  const h = parseInt(p[0]);
  return (h > 12 ? h - 12 : h) + ":" + p[1] + " " + (h >= 12 ? "PM" : "AM");
}
function fP(a, b) {
  if (!a && !b) return "Free";
  if (a && b && +a !== +b) return "$" + (+a | 0) + "\u2013$" + (+b | 0);
  return "$" + (+(a || b) | 0);
}
const CITIES = ["All", "New York", "Los Angeles", "Nashville", "Chicago", "Austin", "Philadelphia", "San Francisco", "Washington", "Charlotte"];
const EMO = ["\uD83C\uDFA4", "\uD83C\uDFAD", "\uD83D\uDE02", "\uD83C\uDFAA", "\uD83C\uDFAC", "\uD83C\uDF1F", "\uD83D\uDCAB", "\uD83D\uDD25"];
const SRS = {
  ticketmaster: {
    bg: "#026cdf20",
    c: "#026cdf",
    l: "Ticketmaster"
  },
  eventbrite: {
    bg: "#f05c3420",
    c: "#f05c34",
    l: "Eventbrite"
  },
  axs: {
    bg: "#00a3e020",
    c: "#00a3e0",
    l: "AXS"
  },
  dice: {
    bg: "#1a1a1a40",
    c: "#eee",
    l: "DICE"
  },
  seat_engine: {
    bg: "#e8491d20",
    c: "#e8491d",
    l: "Seat Engine"
  },
  custom_api: {
    bg: "#4ecdc420",
    c: "#4ecdc4",
    l: "Partner"
  }
};
const DFLT_SRC = {
  bg: "var(–gg)",
  c: "var(–gold)",
  l: "Curated"
};

// === ICONS ===
function Ico({
  type,
  size = 20
}) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  if (type === "compass") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
  }));
  if (type === "search") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }));
  if (type === "bell") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }));
  if (type === "user") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
  if (type === "back") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
  if (type === "chev") return /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    width: 16,
    height: 16
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }));
  if (type === "x") return /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    width: 16,
    height: 16
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
  if (type === "gear") return /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    width: 18,
    height: 18
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.22",
    y1: "4.22",
    x2: "5.64",
    y2: "5.64"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18.36",
    y1: "18.36",
    x2: "19.78",
    y2: "19.78"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "12",
    x2: "3",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "23",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.22",
    y1: "19.78",
    x2: "5.64",
    y2: "18.36"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18.36",
    y1: "5.64",
    x2: "19.78",
    y2: "4.22"
  }));
  if (type === "logout") return /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    width: 18,
    height: 18
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  }));
  return null;
}

// === SHARED COMPONENTS ===
function BNav({
  active,
  onNav
}) {
  const tabs = [["discover", "Discover", "compass"], ["search", "Search", "search"], ["alerts", "Alerts", "bell"], ["admin", "Hub", "gear"]];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "linear-gradient(to top,var(–deep) 60%,transparent)",
      padding: "8px 0 calc(12px + var(–safe-b))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-around",
      background: "var(–card)",
      border: "1px solid var(–bl)",
      borderRadius: 28,
      marginInline: 20,
      padding: 6
    }
  }, tabs.map(([k, l, i]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => onNav(k),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      padding: "8px 16px",
      borderRadius: 20,
      background: active === k ? "var(–cg)" : "none",
      border: "none",
      color: active === k ? "var(–coral)" : "var(–t3)",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: ".03em",
      transition: "all .25s"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    type: i
  }), l))));
}
function IBtn({
  children,
  onClick,
  st
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--card)",
      border: "1px solid var(--brd)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--t2)",
      transition: "all .2s",
      ...st
    }
  }, children);
}
function Chip({
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flexShrink: 0,
      padding: "8px 18px",
      borderRadius: 100,
      fontSize: 13,
      fontWeight: 500,
      background: active ? "var(--coral)" : "var(--card)",
      border: "1px solid " + (active ? "var(--coral)" : "var(--brd)"),
      color: active ? "#fff" : "var(--t2)",
      whiteSpace: "nowrap",
      transition: "all .2s"
    }
  }, label);
}
function SrcBadge({
  type
}) {
  const s = SRS[type] || DFLT_SRC;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "2px 8px",
      borderRadius: 100,
      fontSize: 10,
      fontWeight: 600,
      background: s.bg,
      color: s.c,
      marginTop: 4
    }
  }, s.l);
}
function SecH({
  title,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 20,
      fontWeight: 700
    }
  }, title), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: "none",
      border: "none",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--coral)"
    }
  }, action));
}
function Empty({
  icon,
  title,
  text,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: {
      textAlign: "center",
      padding: "60px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 16
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--t2)",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, text), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      marginTop: 16,
      padding: "12px 24px",
      borderRadius: 14,
      fontSize: 14,
      fontWeight: 600,
      background: "linear-gradient(135deg,var(--coral),#ff8a65)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 20px var(--cg)"
    }
  }, action));
}
function LCard({
  emoji,
  name,
  sub,
  verified,
  onClick,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      gap: 14,
      padding: 14,
      background: "var(–card)",
      border: "1px solid var(–brd)",
      borderRadius: 14,
      marginBottom: 10,
      cursor: onClick ? "pointer" : "default",
      transition: "all .25s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: "var(–surf)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      fontSize: 24
    }
  }, emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name, verified && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      padding: "2px 7px",
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 600,
      background: "var(–gg)",
      color: "var(–gold)"
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(–t2)"
    }
  }, sub), badge && /*#__PURE__*/React.createElement(SrcBadge, {
    type: badge
  })), onClick && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center",
      color: "var(–t3)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "chev"
  })));
}
function ShowCard({
  show: s,
  idx,
  onClick
}) {
  const hasImg = s.image_url && s.image_url.indexOf("fallback") === -1;
  const src = SRS[s.source_type];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      flex: "0 0 280px",
      scrollSnapAlign: "start",
      background: "var(–card)",
      border: "1px solid var(–brd)",
      borderRadius: 20,
      overflow: "hidden",
      cursor: "pointer",
      transition: "all .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160,
      background: hasImg ? "url(" + s.image_url + ") center/cover" : "linear-gradient(135deg,var(–surf),var(–card))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, !hasImg && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 48,
      opacity: .6
    }
  }, EMO[idx % EMO.length]), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top,var(–card) 0%,transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      background: "var(–coral)",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: 8,
      fontSize: 11,
      fontWeight: 600,
      zIndex: 1
    }
  }, fD(s.show_date)), src && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      background: src.bg,
      color: src.c,
      padding: "3px 8px",
      borderRadius: 6,
      fontSize: 9,
      fontWeight: 700,
      zIndex: 1,
      backdropFilter: "blur(8px)"
    }
  }, src.l)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(–fd)",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.3,
      marginBottom: 6,
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(–t2)",
      marginBottom: 10
    }
  }, "\uD83D\uDCCD ", s.venue_name, " \xB7 ", s.venue_city), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(–mint)"
    }
  }, fP(s.ticket_price_min, s.ticket_price_max)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(–t3)"
    }
  }, fT(s.show_time)))));
}

// === DISCOVER ===
function Discover({
  onNav,
  sess
}) {
  const [shows, setShows] = useState([]);
  const [coms, setComs] = useState([]);
  const [vens, setVens] = useState([]);
  const [city, setCity] = useState("All");
  const [ld, setLd] = useState(true);
  useEffect(() => {
    load();
  }, [city]);
  function load() {
    setLd(true);
    let u = "unified_shows?order=is_featured.desc,show_date.asc&limit=30";
    if (city !== "All") u += "&venue_city=ilike." + encodeURIComponent(city);
    Promise.all([sb(u), sb("comedians?is_verified=eq.true&order=name&limit=20"), sb("venues?is_verified=eq.true&order=name&limit=20")]).then(([s, c, v]) => {
      setShows(s);
      setComs(c);
      setVens(v);
      setLd(false);
    }).catch(e => {
      console.error(e);
      setLd(false);
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "an",
    style: {
      padding: "16px 20px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(–fd)",
      fontSize: 22,
      fontWeight: 700
    }
  }, "Laugh", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(135deg,var(–coral),var(–gold))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "Track")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, sess ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IBtn, {
    onClick: () => onNav("admin")
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "gear"
  })), /*#__PURE__*/React.createElement(IBtn, {
    onClick: () => onNav("profile")
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "user"
  }))) : /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("auth"),
    style: {
      padding: "8px 16px",
      borderRadius: 14,
      fontSize: 13,
      fontWeight: 600,
      background: "transparent",
      color: "var(–coral)",
      border: "1px solid var(–coral)"
    }
  }, "Sign In"))), "```", /*#__PURE__*/React.createElement("div", {
    className: "an an1",
    style: {
      padding: "0 20px 16px"
    },
    onClick: () => onNav("search")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--inp)",
      border: "1px solid var(--brd)",
      borderRadius: 20,
      padding: "12px 16px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--t3)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "search"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--t3)",
      fontSize: 15
    }
  }, "Search comedians, shows, venues..."))), /*#__PURE__*/React.createElement("div", {
    className: "an an2",
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      padding: "0 20px 16px",
      WebkitOverflowScrolling: "touch"
    }
  }, CITIES.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    label: c,
    active: city === c,
    onClick: () => setCity(c)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement(SecH, {
    title: "Upcoming Shows",
    action: "See all",
    onAction: () => onNav("search")
  })), /*#__PURE__*/React.createElement("div", {
    className: "an an3",
    style: {
      display: "flex",
      gap: 14,
      overflowX: "auto",
      padding: "0 20px 24px",
      scrollSnapType: "x mandatory",
      WebkitOverflowScrolling: "touch"
    }
  }, ld ? [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 280px",
      background: "var(--card)",
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid var(--brd)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk",
    style: {
      height: 160
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk",
    style: {
      height: 20,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk",
    style: {
      height: 14,
      width: "60%"
    }
  })))) : shows.length > 0 ? shows.map((s, i) => /*#__PURE__*/React.createElement(ShowCard, {
    key: s.id,
    show: s,
    idx: i,
    onClick: () => onNav("show", s.id, s)
  })) : /*#__PURE__*/React.createElement(Empty, {
    icon: "\uD83C\uDFA4",
    title: "No shows",
    text: city !== "All" ? "None in " + city : "Check back soon!"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 100px"
    }
  }, /*#__PURE__*/React.createElement(SecH, {
    title: "Popular Comedians",
    action: "See all",
    onAction: () => onNav("search")
  }), !ld && coms.slice(0, 6).map(c => /*#__PURE__*/React.createElement(LCard, {
    key: c.id,
    emoji: "\uD83D\uDE0E",
    name: c.name,
    verified: c.is_verified,
    sub: (c.city || "") + (c.state ? ", " + c.state : ""),
    onClick: () => onNav("search")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement(SecH, {
    title: "Top Venues",
    action: "See all",
    onAction: () => onNav("search")
  }), !ld && vens.slice(0, 5).map(v => /*#__PURE__*/React.createElement(LCard, {
    key: v.id,
    emoji: "\uD83C\uDFAD",
    name: v.name,
    verified: v.is_verified,
    sub: (v.city || "") + (v.state ? ", " + v.state : ""),
    onClick: () => onNav("search")
  }))), "```");
}

// === SEARCH ===
function Search({
  onNav
}) {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("all");
  const [res, setRes] = useState({
    s: [],
    c: [],
    v: []
  });
  const [ld, setLd] = useState(true);
  const ref = useRef(null);
  const tmr = useRef(null);
  useEffect(() => {
    loadAll();
    setTimeout(() => ref.current?.focus(), 100);
  }, []);
  function loadAll() {
    setLd(true);
    Promise.all([sb("unified_shows?order=show_date&limit=40"), sb("comedians?order=name&limit=30"), sb("venues?order=name&limit=30")]).then(([s, c, v]) => {
      setRes({
        s,
        c,
        v
      });
      setLd(false);
    }).catch(() => setLd(false));
  }
  function doSearch(val) {
    setQ(val);
    clearTimeout(tmr.current);
    if (!val || val.length < 2) {
      tmr.current = setTimeout(loadAll, 200);
      return;
    }
    tmr.current = setTimeout(() => {
      setLd(true);
      const p = "%25" + encodeURIComponent(val) + "%25";
      Promise.all([sb("unified_shows?or=(title.ilike." + p + ",venue_name.ilike." + p + ")&limit=20"), sb("comedians?name=ilike." + p + "&limit=20"), sb("venues?name=ilike." + p + "&limit=20")]).then(([s, c, v]) => {
        setRes({
          s,
          c,
          v
        });
        setLd(false);
      }).catch(() => setLd(false));
    }, 300);
  }
  const sh = t => tab === "all" || tab === t;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "16px 20px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    onClick: () => onNav("discover")
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 17
    }
  }, "Search"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(–inp)",
      border: "1px solid var(–brd)",
      borderRadius: 20,
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(–t3)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "search"
  })), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "text",
    placeholder: "Search comedians, shows, venues...",
    value: q,
    onChange: e => doSearch(e.target.value),
    style: {
      flex: 1,
      background: "none",
      border: "none",
      outline: "none",
      color: "var(–t1)",
      fontSize: 15
    }
  }), q && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setQ("");
      loadAll();
    },
    style: {
      background: "none",
      border: "none",
      color: "var(–t3)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "x"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      padding: "0 20px 16px"
    }
  }, ["all", "shows", "comedians", "venues"].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    label: t[0].toUpperCase() + t.slice(1),
    active: tab === t,
    onClick: () => setTab(t)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 100px"
    }
  }, ld && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: "var(–t3)"
    }
  }, "Searching..."), sh("shows") && res.s.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, tab === "all" && /*#__PURE__*/React.createElement(SecH, {
    title: "Shows"
  }), res.s.map(s => /*#__PURE__*/React.createElement(LCard, {
    key: s.id,
    emoji: "\uD83C\uDFA4",
    name: s.title,
    sub: s.venue_name + " · " + fD(s.show_date) + " · " + fP(s.ticket_price_min, s.ticket_price_max),
    badge: s.source_type,
    onClick: () => onNav("show", s.id, s)
  }))), sh("comedians") && res.c.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, tab === "all" && /*#__PURE__*/React.createElement(SecH, {
    title: "Comedians"
  }), res.c.map(c => /*#__PURE__*/React.createElement(LCard, {
    key: c.id,
    emoji: "\uD83D\uDE0E",
    name: c.name,
    verified: c.is_verified,
    sub: (c.city || "") + (c.state ? ", " + c.state : "")
  }))), sh("venues") && res.v.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, tab === "all" && /*#__PURE__*/React.createElement(SecH, {
    title: "Venues"
  }), res.v.map(v => /*#__PURE__*/React.createElement(LCard, {
    key: v.id,
    emoji: "\uD83C\uDFAD",
    name: v.name,
    verified: v.is_verified,
    sub: (v.city || "") + (v.state ? ", " + v.state : "")
  }))), !ld && !res.s.length && !res.c.length && !res.v.length && /*#__PURE__*/React.createElement(Empty, {
    icon: "\uD83D\uDD0D",
    title: "No results",
    text: "Try different terms"
  })));
}

// === SHOW DETAIL ===
function Detail({
  data: d,
  onNav
}) {
  if (!d) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Empty, {
    icon: "\uD83D\uDE15",
    title: "Not found",
    action: "Back",
    onAction: () => onNav("discover")
  }));
  const hasImg = d.image_url && d.image_url.indexOf("fallback") === -1;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "absolute",
      zIndex: 10,
      padding: "16px 20px",
      width: "100%",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    onClick: () => onNav("discover"),
    st: {
      background: "rgba(10,10,15,.7)",
      backdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "back"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: hasImg ? "url(" + d.image_url + ") center/cover" : "linear-gradient(135deg,#1a1020,#0f0a18 50%,#0a0a0f)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, !hasImg && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at center,var(–cg),transparent 70%)",
      opacity: .4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 72,
      opacity: .5,
      position: "relative"
    }
  }, "\uD83C\uDFA4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top,var(–deep) 0%,transparent 50%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 100px",
      marginTop: -20,
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: {
      background: "var(–card)",
      border: "1px solid var(–brd)",
      borderRadius: 20,
      padding: 20,
      marginBottom: 16
    }
  }, d.source_type && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(SrcBadge, {
    type: d.source_type
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(–fd)",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: 16
    }
  }, d.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDCC5 ", fDL(d.show_date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDD50 ", d.door_time ? "Doors " + fT(d.door_time) + " · " : "", "Show ", fT(d.show_time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "\uD83C\uDF9F\uFE0F ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(–mint)",
      fontWeight: 600
    }
  }, fP(d.ticket_price_min, d.ticket_price_max))), d.venue_name && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDCCD ", d.venue_name, d.venue_city ? ", " + d.venue_city : "", d.venue_state ? ", " + d.venue_state : "")), d.ticket_url && /*#__PURE__*/React.createElement("a", {
    href: d.ticket_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: "100%",
      marginTop: 16,
      padding: "14px 20px",
      borderRadius: 14,
      fontSize: 16,
      fontWeight: 600,
      background: "linear-gradient(135deg,var(–coral),#ff8a65)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 20px var(–cg)"
    }
  }, "\uD83C\uDF9F\uFE0F Get Tickets")), d.description && /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: {
      background: "var(–card)",
      border: "1px solid var(–brd)",
      borderRadius: 20,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(–fd)",
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(–t2)",
      lineHeight: 1.6
    }
  }, d.description))));
}

// === AUTH ===
function Auth({
  onNav,
  onLogin
}) {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("fan");
  const [ld, setLd] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");
  const inp = {
    width: "100%",
    padding: "12px 16px",
    background: "var(–inp)",
    border: "1px solid var(–brd)",
    borderRadius: 14,
    color: "var(–t1)",
    fontSize: 15,
    outline: "none"
  };
  async function go(e) {
    e.preventDefault();
    setErr("");
    setOk("");
    setLd(true);
    try {
      if (mode === "signup") {
        const r = await sbAuth("signup", {
          email,
          password: pw,
          data: {
            display_name: name,
            role
          }
        });
        if (r.error) throw new Error(r.error.message);
        setOk("Check email to confirm!");
      } else {
        const r = await sbAuth("token?grant_type=password", {
          email,
          password: pw
        });
        if (r.error) throw new Error(r.error_description || "Invalid credentials");
        onLogin(r);
        onNav("discover");
      }
    } catch (ex) {
      setErr(ex.message);
    }
    setLd(false);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "16px 20px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    onClick: () => onNav("discover")
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(–fd)",
      fontWeight: 700,
      fontSize: 17
    }
  }, "Laugh", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(135deg,var(–coral),var(–gold))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "Track")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: {
      padding: "24px 20px",
      maxWidth: 400,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(–fd)",
      fontSize: 28,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 8
    }
  }, mode === "signin" ? "Welcome Back" : "Join LaughTrack"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(–t2)",
      fontSize: 15,
      marginBottom: 32
    }
  }, mode === "signin" ? "Sign in to track favorites" : "Never miss a show"), /*#__PURE__*/React.createElement("form", {
    onSubmit: go
  }, mode === "signup" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      color: "var(–t2)",
      marginBottom: 6
    }
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    required: true,
    style: inp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      color: "var(–t2)",
      marginBottom: 6
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    style: inp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      color: "var(–t2)",
      marginBottom: 6
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    required: true,
    minLength: 6,
    style: inp
  })), mode === "signup" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      color: "var(–t2)",
      marginBottom: 6
    }
  }, "I am a..."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, [["fan", "Fan"], ["comedian", "Comedian"], ["venue_owner", "Venue"], ["agent", "Agent"]].map(([v, l]) => /*#__PURE__*/React.createElement(Chip, {
    key: v,
    label: l,
    active: role === v,
    onClick: () => setRole(v)
  })))), err && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,107,90,.1)",
      border: "1px solid rgba(255,107,90,.3)",
      borderRadius: 8,
      padding: "10px 14px",
      fontSize: 13,
      color: "var(–coral)",
      marginBottom: 16
    }
  }, err), ok && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(78,205,196,.1)",
      border: "1px solid rgba(78,205,196,.3)",
      borderRadius: 8,
      padding: "10px 14px",
      fontSize: 13,
      color: "var(–mint)",
      marginBottom: 16
    }
  }, ok), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: ld,
    style: {
      width: "100%",
      padding: "14px 20px",
      borderRadius: 14,
      fontSize: 16,
      fontWeight: 600,
      background: "linear-gradient(135deg,var(–coral),#ff8a65)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 20px var(–cg)",
      opacity: ld ? .6 : 1,
      marginBottom: 16
    }
  }, ld ? "Loading..." : mode === "signin" ? "Sign In" : "Create Account")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode(mode === "signin" ? "signup" : "signin");
      setErr("");
      setOk("");
    },
    style: {
      background: "none",
      border: "none",
      color: "var(–coral)",
      fontSize: 14,
      fontWeight: 500
    }
  }, mode === "signin" ? "Need account? Sign up" : "Have account? Sign in"))));
}

// === ALERTS ===
function Alerts({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "16px 20px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 17
    }
  }, "Alerts"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 100px"
    }
  }, /*#__PURE__*/React.createElement(Empty, {
    icon: "\uD83D\uDD14",
    title: "Coming Soon",
    text: "Alerts will notify you when comedians you follow announce shows near you.",
    action: "Discover Shows",
    onAction: () => onNav("discover")
  })));
}

// === ADMIN ===
function Admin({
  onNav
}) {
  const [sources, setSources] = useState([]);
  const [ld, setLd] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [result, setResult] = useState(null);
  const [impCount, setImpCount] = useState(0);
  useEffect(() => {
    load();
  }, []);
  function load() {
    setLd(true);
    Promise.all([sb("ticket_sources?order=created_at.desc").catch(() => []), sb("imported_events?select=id&limit=1000").catch(() => [])]).then(([s, ie]) => {
      setSources(s || []);
      setImpCount(ie ? ie.length : 0);
      setLd(false);
    });
  }
  function doSync() {
    setSyncing(true);
    setResult(null);
    edge("sync-ticketmaster", {
      size: 50,
      pages: 5
    }).then(r => {
      setResult(r);
      setSyncing(false);
      load();
    }).catch(e => {
      setResult({
        error: e.message
      });
      setSyncing(false);
    });
  }
  const cd = {
    background: "var(–card)",
    border: "1px solid var(–brd)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "16px 20px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    onClick: () => onNav("discover")
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 17
    }
  }, "Integration Hub"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: cd
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(–fd)",
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\uD83D\uDCCA Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(–surf)",
      borderRadius: 14,
      padding: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: "var(–coral)"
    }
  }, impCount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(–t3)"
    }
  }, "Imported Events")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(–surf)",
      borderRadius: 14,
      padding: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: "var(–mint)"
    }
  }, sources.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(–t3)"
    }
  }, "Sources")))), "```", /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: cd
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\u26A1 Ticketmaster Sync"), /*#__PURE__*/React.createElement("button", {
    onClick: doSync,
    disabled: syncing,
    style: {
      width: "100%",
      padding: 14,
      borderRadius: 14,
      fontSize: 14,
      fontWeight: 600,
      background: "#026cdf20",
      color: "#026cdf",
      border: "1px solid #026cdf40",
      marginBottom: 10,
      opacity: syncing ? .6 : 1
    }
  }, syncing ? "⏳ Syncing..." : "🎫 Sync Ticketmaster Comedy"), /*#__PURE__*/React.createElement("button", {
    onClick: load,
    style: {
      width: "100%",
      padding: 12,
      borderRadius: 14,
      fontSize: 14,
      fontWeight: 600,
      background: "var(--surf)",
      color: "var(--t1)",
      border: "1px solid var(--bl)"
    }
  }, "\uD83D\uDD04 Refresh Status")), result && /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: {
      ...cd,
      borderColor: result.error ? "rgba(255,107,90,.3)" : "rgba(78,205,196,.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 8,
      color: result.error ? "var(--coral)" : "var(--mint)"
    }
  }, result.error ? "❌ Error" : "✅ Complete"), result.error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--t2)",
      wordBreak: "break-word"
    }
  }, result.error) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--t3)"
    }
  }, "Fetched"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, result.fetched || 0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--t3)"
    }
  }, "New"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--mint)"
    }
  }, result.new || 0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--t3)"
    }
  }, "Updated"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, result.updated || 0)))), /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: cd
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 16
    }
  }, "\uD83D\uDD0C Connected Sources"), ld ? /*#__PURE__*/React.createElement("div", {
    className: "sk",
    style: {
      height: 60
    }
  }) : sources.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--t3)",
      textAlign: "center",
      padding: 20
    }
  }, "No sources yet. Run a sync first.") : sources.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: "1px solid var(--brd)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--t3)"
    }
  }, s.last_sync_at ? "Last: " + new Date(s.last_sync_at).toLocaleDateString() + " · " + s.last_sync_count + " events" : "Never synced")), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "3px 8px",
      borderRadius: 100,
      fontSize: 10,
      fontWeight: 700,
      background: s.status === "active" ? "var(--mg)" : "var(--cg)",
      color: s.status === "active" ? "var(--mint)" : "var(--coral)"
    }
  }, s.status)))), /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: cd
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\uD83C\uDFD7\uFE0F Provider Architecture"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--t2)",
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--t1)"
    }
  }, "Tier 1 \u2014 API Ready:"), /*#__PURE__*/React.createElement("br", null), "Ticketmaster (free), Eventbrite (free), AXS (partner)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--t1)"
    }
  }, "Tier 2 \u2014 Niche:"), /*#__PURE__*/React.createElement("br", null), "DICE, See Tickets, ShowClix, Etix"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--t1)"
    }
  }, "Tier 3 \u2014 Comedy-Specific:"), /*#__PURE__*/React.createElement("br", null), "Seat Engine, StandupMedia, QuickTix, Ticket Fairy"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--t1)"
    }
  }, "Custom Club APIs:"), /*#__PURE__*/React.createElement("br", null), "Any venue with a JSON endpoint connects via field mapping adapter")))), "```");
}

// === PROFILE ===
function Profile({
  onNav,
  sess,
  onLogout
}) {
  const [p, setP] = useState(null);
  const [ld, setLd] = useState(true);
  useEffect(() => {
    if (sess) load();else setLd(false);
  }, [sess]);
  function load() {
    setLd(true);
    fetch(SUPA + "/rest/v1/profiles?id=eq." + sess.user.id, {
      headers: {
        ...HD,
        Authorization: "Bearer " + sess.access_token
      }
    }).then(r => r.json()).then(d => {
      setP(d && d[0]);
      setLd(false);
    }).catch(() => setLd(false));
  }
  if (!sess) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "16px 20px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 17
    }
  }, "Profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement(Empty, {
    icon: "\uD83D\uDC64",
    title: "Sign in",
    text: "Track follows and manage alerts.",
    action: "Sign In",
    onAction: () => onNav("auth")
  }));
  const roles = {
    fan: "Fan",
    comedian: "Comedian",
    venue_owner: "Venue Owner",
    agent: "Agent",
    admin: "Admin"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "16px 20px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 17
    }
  }, "Profile"), /*#__PURE__*/React.createElement(IBtn, {
    onClick: onLogout
  }, /*#__PURE__*/React.createElement(Ico, {
    type: "logout"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 100px"
    }
  }, ld ? /*#__PURE__*/React.createElement("div", {
    className: "sk",
    style: {
      height: 200,
      borderRadius: 20
    }
  }) : p && /*#__PURE__*/React.createElement("div", {
    className: "an",
    style: {
      background: "var(–card)",
      border: "1px solid var(–brd)",
      borderRadius: 20,
      padding: 20,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "linear-gradient(135deg,var(–coral),var(–gold))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 12px",
      fontSize: 28,
      color: "#fff",
      fontWeight: 700
    }
  }, (p.display_name || "?")[0].toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(–fd)",
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 4
    }
  }, p.display_name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(–t2)",
      marginBottom: 8
    }
  }, sess.user.email), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "3px 10px",
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 600,
      background: "var(–gg)",
      color: "var(–gold)"
    }
  }, roles[p.role] || "Fan"))));
}

// === ROOT ===
function App() {
  const [pg, setPg] = useState("discover");
  const [sd, setSd] = useState(null);
  const [sess, setSess] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lt_sess"));
    } catch {
      return null;
    }
  });
  function nav(p, id, data) {
    if (p === "show") {
      setSd(data);
      setPg("show");
    } else setPg(p);
    window.scrollTo(0, 0);
  }
  function login(d) {
    setSess(d);
    try {
      localStorage.setItem("lt_sess", JSON.stringify(d));
    } catch {}
  }
  function logout() {
    setSess(null);
    try {
      localStorage.removeItem("lt_sess");
    } catch {}
    ;
    setPg("discover");
  }
  const showNav = pg !== "show";
  return /*#__PURE__*/React.createElement(React.Fragment, null, pg === "discover" && /*#__PURE__*/React.createElement(Discover, {
    onNav: nav,
    sess: sess
  }), pg === "search" && /*#__PURE__*/React.createElement(Search, {
    onNav: nav
  }), pg === "show" && /*#__PURE__*/React.createElement(Detail, {
    data: sd,
    onNav: nav
  }), pg === "auth" && /*#__PURE__*/React.createElement(Auth, {
    onNav: nav,
    onLogin: login
  }), pg === "alerts" && /*#__PURE__*/React.createElement(Alerts, {
    onNav: nav
  }), pg === "admin" && /*#__PURE__*/React.createElement(Admin, {
    onNav: nav
  }), pg === "profile" && /*#__PURE__*/React.createElement(Profile, {
    onNav: nav,
    sess: sess,
    onLogout: logout
  }), showNav && /*#__PURE__*/React.createElement(BNav, {
    active: pg,
    onNav: nav
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));