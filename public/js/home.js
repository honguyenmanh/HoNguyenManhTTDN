(function(__wpcc) {
    var aa;
    "undefined" === typeof aa && (aa = function() {}
    );
    aa.p = "";
}
).call(this || window, (window.__wpcc = window.__wpcc || {}));

(function(__wpcc) {
    var ba = function(a) {
        return a.map(b=>b.replace(/\s\s+/g, " "))
    }, g = function(a, ...b) {
        a = [ba(a), b].reduce((c,d)=>(d.forEach((e,f)=>(c[f] = c[f] || []).push(e)),
        c), []).reduce((c,d)=>c.concat(d));
        return document.createRange().createContextualFragment(a.flat().join(""))
    }, h = function(a, ...b) {
        return [ba(a), b].reduce((c,d)=>(d.forEach((e,f)=>(c[f] = c[f] || []).push(e)),
        c), []).reduce((c,d)=>c.concat(d)).flat().join("")
    }, ca = function(a) {
        return {
            currencyCode: "USD",
            units: a,
            nanos: 0
        }
    }, da = async function(a) {
        return new Promise((b,c)=>{
            const d = setTimeout(()=>{
                clearTimeout(d);
                c(Error("Timeout"))
            }
            , a)
        }
        )
    }, ea = function(a, b=50, c={}) {
        function d(...D) {
            const O = this;
            return new Promise((T,y)=>{
                const U = n && void 0 === m;
                void 0 !== m && clearTimeout(m);
                m = setTimeout(function() {
                    m = void 0;
                    q = Date.now();
                    if (!n) {
                        const eb = a.apply(O, D);
                        t && t(eb);
                        F.forEach(({resolve: sc})=>sc(eb));
                        F = []
                    }
                }, e());
                if (U)
                    return y = a.apply(O, D),
                    t && t(y),
                    T(y);
                F.push({
                    resolve: T,
                    reject: y
                })
            }
            )
        }
        function e() {
            if (void 0 !== B) {
                const D = Date.now() - q;
                if (D + b >= B)
                    return B - D
            }
            return b
        }
        var f, k;
        let m;
        const n = null !== (f = c.isImmediate) && void 0 !== f ? f : !1
          , t = null !== (k = c.callback) && void 0 !== k ? k : !1
          , B = c.maxWait;
        let q = Date.now()
          , F = [];
        d.cancel = function(D) {
            void 0 !== m && clearTimeout(m);
            F.forEach(({reject: O})=>O(D));
            F = []
        }
        ;
        return d
    }, fa = function(a) {
        return (a = document.cookie.match(new RegExp("(^| )" + a + "=([^;]+)"))) ? a[2] : null
    }, l, p = l || (l = {});
    p.ADSGUIDE = "adsguide";
    p.ANIMATE = "animate";
    p.ANIMATION_FRAME = "requestAnimationFrame";
    p.BM_WIDGET = "bmwidget";
    p.GLUE = "glue";
    p.G_RECAPTCHA = "grecaptcha";
    p.INTERSECTION_OBS = "IntersectionObserver";
    p.MATCH_MEDIA = "matchMedia";
    p.MDC = "mdc";
    p.JSDOM = "jsdom";
    var r, ha = r || (r = {});
    ha.XL = "xl";
    ha.LG = "lg";
    ha.MD = "md";
    ha.SM = "sm";
    var u, v = u || (u = {});
    v.ALT_TEXT = "alt-text";
    v.ARIA_EXPANDED = "aria-expanded";
    v.ARIA_HIDDEN = "aria-hidden";
    v.ARIA_LABEL = "aria-label";
    v.BACKGROUND_COLOR = "background-color";
    v.BODY = "body";
    v.CALLOUT = "callout";
    v.CARD = "card";
    v.CARDS = "cards";
    v.CAROUSEL_ARIA_LABELS = "carousel-aria-labels";
    v.CHATBOT_AGENT_ID = "agent-id";
    v.CHATBOT_CONTEXT_ID = "context-id";
    v.CLASS_NAMES = "class-names";
    v.CI_APPENDIX = "ci-appendix";
    v.CTA = "cta";
    v.CTA_ARIA_DESCRIPTION = "cta-aria-description";
    v.CTA_BLOCK = "cta-block";
    v.CTA_LABEL = "cta-label";
    v.CTA_POSITION = "cta-position";
    v.CTA_TEXT = "cta-text";
    v.CTA_URL = "cta-url";
    v.COPY = "copy";
    v.DISABLED = "disabled";
    v.DISCLAIMER = "disclaimer";
    v.EYEBROW = "eyebrow";
    v.GTM_CTA_NAME = "cta-name";
    v.GTM_MODULE_NAME = "module-name";
    v.HAS_TRANSPARENCY = "has-transparency";
    v.HEADLINE = "headline";
    v.HREF = "href";
    v.HTML = "html";
    v.ICON = "icon";
    v.ICON_ID = "icon-id";
    v.ICON_SIZE = "icon-size";
    v.ICON_TYPE = "icon-type";
    v.IMAGE = "image";
    v.IMAGES = "images";
    v.INDEX = "index";
    v.INERT = "inert";
    v.LABEL = "label";
    v.LOCALE = "locale";
    v.LOGO_IMAGE = "logo-image";
    v.MEDIA_ALIGNMENT = "media-alignment";
    v.MODAL_ARIA_LABELS = "modal-aria-labels";
    v.MTE = "mte";
    v.NAVIGATION_ARIA_LABELS = "navigation-aria-labels";
    v.OFFICE_HOURS = "office-hours";
    v.PANELS = "panels";
    v.ROLE = "role";
    v.SUBHEADLINE = "subheadline";
    v.SPACER = "spacer";
    v.SUF_SUBID = "suf-subid";
    v.TABINDEX = "tabindex";
    v.THEME = "theme";
    v.THUMBNAIL = "thumbnail";
    v.WIDGET_TEXT = "widget-text";
    v.WIDTHS = "widths";
    v.YOUTUBE_DATA = "youtube-data";
    v.YOUTUBE_ID = "youtube-id";
    var w, ia = w || (w = {});
    ia.ACTIVE = "active";
    ia.LOCK = "lock";
    ia.HIDDEN = "hidden";
    ia.NO_SCROLL = "glue-no-scroll";
    ia.OPEN = "open";
    ia.PANEL_BUTTON_NO_POINTER = "gads-contact-hub-panel__button--no-pointer";
    ia.REDUCED_MOTION = "reduced-motion";
    ia.SHOW = "show";
    ia.SO_RPL = "so-rpl";
    var ja, ka = ja || (ja = {});
    ka.BLOCK = "block";
    ka.NONE = "none";
    var la, ma = la || (la = {});
    ma.GLUE_MODAL = ".glue-modal";
    ma.GLUE_HEADLINE = ".glue-headline";
    var x, z = x || (x = {});
    z.CHATBOT_LOADED = "Chatbot:ready";
    z.AMA_CLIENT_READY = "AMAClient:ready";
    z.BLUR = "blur";
    z.BM_WIDGET_CLOSED = "bm-widget-conversation-closed";
    z.BM_WIDGET_MAXIMIZED = "bm-widget-conversation-maximized";
    z.BM_WIDGET_MINIMIZED = "bm-widget-conversation-minimized";
    z.CLICK = "click";
    z.CHANGE = "change";
    z.CONTEXT_MENU = "contextmenu";
    z.DOM_CONTENT_LOADED = "DOMContentLoaded";
    z.FINISH = "finish";
    z.FOCUS = "focus";
    z.FOCUSOUT = "focusout";
    z.GADS_HEADER_HIDE = "GADS:headerHide";
    z.GADS_UPDATE_CTA_PARAMS = "GADS:updateCtaParams";
    z.FORM_UPDATE = "form-update";
    z.GLUE_HEADER_HIDE = "glueheaderhide";
    z.GLUE_HEADER_SHOW = "glueheadershow";
    z.GLUE_MODAL_CLOSED = "GlueModal:closed";
    z.GLUE_MODAL_OPEN = "GlueModal:opened";
    z.INPUT = "input";
    z.KEYPRESS = "keypress";
    z.KEYUP = "keyup";
    z.LOAD = "load";
    z.MDC_SELECT_CHANGE = "MDCSelect:change";
    z.MOUSEDOWN = "mousedown";
    z.MOUSEENTER = "mouseenter";
    z.MOUSELEAVE = "mouseleave";
    z.MOUSEMOVE = "mousemove";
    z.MOUSEOVER = "mouseover";
    z.MOUSEUP = "mouseup";
    z.PAGESHOW = "pageshow";
    z.RESIZE = "resize";
    z.SCROLL = "scroll";
    z.TOUCHEND = "touchend";
    z.TOUCHSTART = "touchstart";
    z.TRANSITION_END = "transitionend";
    var na, oa = na || (na = {});
    oa[oa.SM = 28] = "SM";
    oa[oa.MD = 40] = "MD";
    var A, pa = A || (A = {});
    pa.CREATEANDMANAGEADS = "createandmanageads";
    pa.SIGNIN = "signin";
    pa.SSO_ADD_ACCOUNT = "gads-sso-add-another-account";
    pa.SSO_CREATE_ACCOUNT = "gads-sso-create-new-google-ads-account";
    pa.SSO_MANAGE_ACCOUNT = "gads-sso-manage-your-google-account";
    pa.SSO_PRIVACY_POLICY = "gads-sso-privacy-policy";
    pa.SSO_SIGN_OUT = "gads-sso-sign-out";
    pa.SSO_TERMS = "gads-sso-terms";
    pa.STARTNOW = "startnow";
    var qa;
    (qa || (qa = {})).AFTER_BEGIN = "afterbegin";
    var C, ra = C || (C = {});
    ra.ENTER = "Enter";
    ra.ESCAPE = "Escape";
    ra.SPACE = "Space";
    var E, sa = E || (E = {});
    sa.AUTO = "auto";
    sa.SMOOTH = "smooth";
    var ta, ua = ta || (ta = {});
    ua.STANDARD = "Standard";
    ua.EXTENDED = "Extended";
    ua.SPACER_5 = "5";
    ua.SPACER_6 = "6";
    ua.SPACER_7 = "7";
    var G, H = G || (G = {});
    H[H.THIRTY = 30] = "THIRTY";
    H[H.FIFTY = 50] = "FIFTY";
    H[H.SIXTY = 60] = "SIXTY";
    H[H.ONE_HUNDRED = 100] = "ONE_HUNDRED";
    H[H.TWO_HUNDRED = 200] = "TWO_HUNDRED";
    H[H.FOUR_HUNDRED = 400] = "FOUR_HUNDRED";
    H[H.FIVE_HUNDRED = 500] = "FIVE_HUNDRED";
    H[H.EIGHT_HUNDRED = 800] = "EIGHT_HUNDRED";
    H[H.THREE_THOUSAND = 3E3] = "THREE_THOUSAND";
    var va, wa = va || (va = {});
    wa.ANDROID = "ANDROID";
    wa.IOS = "IOS";
    wa.MAC_SAFARI = "mac-safari";
    var I, xa = I || (I = {});
    xa.DESKTOP = "DESKTOP";
    xa.IPAD = "IPAD";
    xa.MOBILE = "MOBILE";
    xa.TABLET = "TABLET";
    var ya = {
        ADS: {
            DOMAIN: "https://ads.google.com",
            NON_LOCALIZED_URLS: {
                SIGNUP: "/signup",
                NAV_LOGIN: "/nav/login"
            }
        }
    }, za, Aa = za || (za = {});
    Aa.AUTHUSER = "authuser";
    Aa.WEBSITE = "website";
    var Ba = class {
        constructor() {
            this._handlers = [];
            this.mediaQuery = null;
            this.isReducedMotion = !1;
            l.MATCH_MEDIA in window && (this.mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)"),
            this.isReducedMotion = this.mediaQuery.matches,
            this.mediaQuery.addEventListener(x.CHANGE, ()=>{
                var a, b;
                this.isReducedMotion = null === (a = this.mediaQuery) || void 0 === a ? void 0 : a.matches;
                for (const c of this._handlers)
                    c.call(this, null === (b = this.mediaQuery) || void 0 === b ? void 0 : b.matches)
            }
            ))
        }
        subscribe(a) {
            this._handlers.push(a)
        }
    }
      , J = new Ba;
    var Ca = class {
        constructor() {
            this._defaultParams = "";
            this._htmlImage = [];
            this._isDev = "dev" === document.documentElement.getAttribute("environment");
            this._isRtl = !1;
            this._url = this._locale = "";
            this._incentiveStatus = !1
        }
        get defaultParams() {
            return this._defaultParams
        }
        set defaultParams(a) {
            this._defaultParams = a
        }
        get incentiveStatus() {
            return this._incentiveStatus
        }
        set incentiveStatus(a) {
            this._incentiveStatus = a
        }
        get htmlImage() {
            return this._htmlImage
        }
        set htmlImage(a) {
            if (null === a || void 0 === a ? 0 : a.length)
                this._htmlImage = a;
            else
                throw Error("No HTML image has been provided");
        }
        get isDev() {
            return this._isDev
        }
        set isDev(a) {
            this._isDev = a
        }
        get isRtl() {
            return this._isRtl
        }
        set isRtl(a) {
            this._isRtl = a
        }
        get locale() {
            return this._locale
        }
        set locale(a) {
            this._locale = a
        }
        get url() {
            return this._url
        }
        set url(a) {
            this._url = a
        }
    }
      , K = new Ca;
    var L = class extends HTMLElement {
        constructor() {
            super(...arguments);
            this.cta = []
        }
        get default_page_params() {
            return K.defaultParams
        }
        set default_page_params(a) {
            K.defaultParams = a
        }
        get no_incentive() {
            return K.incentiveStatus
        }
        set no_incentive(a) {
            K.incentiveStatus = a
        }
        get isDev() {
            return K.isDev
        }
        set isDev(a) {
            K.isDev = a
        }
        set isLangRtl(a) {
            K.isRtl = a
        }
        get locale() {
            return K.locale
        }
        set locale(a) {
            K.locale = a
        }
        get url() {
            return K.url
        }
        set url(a) {
            K.url = a
        }
        encodeJson(a) {
            let b = a;
            "string" !== typeof a && (b = JSON.stringify(a));
            return b.replace(/['"]/g, c=>`&#${c.charCodeAt(0)};`)
        }
        decodeJsonString(a) {
            let b = "";
            a = a.replace(/&#34;/g, '"').replace(/&#39;/g, "'");
            try {
                b = decodeURI(a)
            } catch (c) {
                b = a
            }
            return JSON.parse(b)
        }
        get ctaInfo() {
            const a = this.getAttribute(u.CTA);
            return "string" === typeof a ? JSON.parse(a) : this.cta.length ? this.cta : null
        }
        get ctaBlock() {
            return this.ctaInfo ? this.ctaInfo.map(a=>null === a.text && null === a.url || a.hide ? "" : h`
        <gads-button ${this.unpackCta(a)}></gads-button>
      `) : ""
        }
        get gtmModuleName() {
            return this.getAttribute(u.GTM_MODULE_NAME) || ""
        }
        getCtaByGtmName(a) {
            var b;
            const c = null === (b = this.ctaInfo) || void 0 === b ? void 0 : b.find(d=>(null !== d.text || null !== d.url) && d.gtm_cta_name === a);
            return c ? h`
      <gads-button ${this.unpackCta(c)}></gads-button>
    ` : ""
        }
        assignAttrs(...a) {
            Object.assign(this, ...a)
        }
        render() {
            return new DocumentFragment
        }
        connectedCallback() {
            this.firstElementChild || this.replaceChildren(this.render())
        }
        prefersReducedMotion() {
            return J.isReducedMotion
        }
        formatEto(a) {
            return null === a || void 0 === a ? void 0 : a.replace(/[-\s]/g, "")
        }
        formatMultiImage(a, b=!0) {
            if (!a.length)
                return "";
            a = ("string" === typeof a ? JSON.parse(a) : a).map(c=>{
                const d = {
                    alt: c.aria_description || "",
                    breakpoint: c.breakpoint,
                    has_transparency: c.has_transparency,
                    url: c.image ? c.image.url : ""
                };
                return c.use_html_image ? {
                    ...d,
                    html_image: c.html_image,
                    use_html_image: c.use_html_image
                } : {
                    ...d
                }
            }
            );
            return b ? encodeURI(JSON.stringify(a)) : a
        }
        getMediaBreakpoint(a) {
            return {
                sm: "(min-width: 1px)",
                md: "(min-width: 600px)",
                lg: "(min-width: 1024px)",
                xl: "(min-width: 1440px)"
            }[a] || ""
        }
        unpackCta(a) {
            let b = ""
              , c = "";
            a.chatbot_agent_id && a.chatbot_context_id && (b = `
          agent-id="${a.chatbot_agent_id}"
          context-id="${a.chatbot_context_id}"
      `);
            a.gtm_cta_name && (c = `
          cta-name="${a.gtm_cta_name}"
          module-name="${this.gtmModuleName.toLowerCase()}"
      `);
            return `
      cta-text="${a.text}"
      emphasis=${a.emphasis}
      label="${a.aria_description || ""}"
      ${b}
      ${c}
      ${a.url ? `cta-url="${this.relativizeKintaroLink(a.url)}"` : ""}
      ${a.reversed ? `reversed="${a.reversed}"` : ""}
      ${a.icon ? `icon-type="${a.icon}"` : ""}
      ${a.icon_id ? `icon-id="${a.icon_id}"` : ""}
      ${a.label ? `cta-label="${a.label}"` : ""}
      ${a.default_subid_position ? `cta-position="${a.default_subid_position}"` : ""}
      ${a.special_triggers ? `special-triggers="${a.special_triggers}"` : ""}
    `
        }
        relativizeKintaroLink(a) {
            if (null === a || void 0 === a ? 0 : a.startsWith("/home/")) {
                let b = this.url.split("/").length
                  , c = ".";
                for (; 2 < b; )
                    c += "/..",
                    b--;
                return c + a
            }
            return a
        }
        setExternalLink(a="") {
            return (null === a || void 0 === a ? 0 : a.match(/https?:\/\/.*?google\.*?com/)) ? 'target="_blank" rel="noopener noreferrer"' : (null === a || void 0 === a ? 0 : a.match(/https?:\/\//)) ? 'target="_blank" rel="noopener noreferrer nofollow"' : ""
        }
    }
    ;
    var {replace: M} = ""
      , N = /[&<>'"]/g
      , Da = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    }
      , P = a=>Da[a];
    var Ea = class {
        constructor() {
            var a;
            this.userAgent = ((null === (a = window.navigator) || void 0 === a ? void 0 : a.userAgent) || window.opera).toLowerCase()
        }
        getDeviceType() {
            let a = I.DESKTOP;
            const b = RegExp("(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))");
            window.navigator.userAgent.includes("jsdom") || (/windows phone/i.test(this.userAgent) && (a = I.MOBILE),
            /android/i.test(this.userAgent) && (a = I.MOBILE),
            /iPhone|iPod/.test(this.userAgent) && !window.MSStream && (a = I.MOBILE),
            /Mobile/i.test(this.userAgent) && (a = I.MOBILE),
            /Macintosh/i.test(null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) && (null === navigator || void 0 === navigator ? 0 : navigator.maxTouchPoints) && 1 < (null === navigator || void 0 === navigator ? void 0 : navigator.maxTouchPoints) && (a = I.IPAD),
            b.test(this.userAgent) && (a = I.TABLET));
            return a
        }
        osType() {
            let a = I.DESKTOP;
            window.navigator.userAgent.includes("jsdom") || (/android/i.test(this.userAgent) && (a = va.ANDROID),
            /iPhone|iPod/i.test(this.userAgent) && (a = va.IOS),
            -1 !== this.userAgent.indexOf("safari") && -1 === this.userAgent.indexOf("chrome") && -1 === this.userAgent.indexOf("iphone") && -1 === this.userAgent.indexOf("ipad") && (a = va.MAC_SAFARI));
            return a
        }
        isMobile() {
            return this.getDeviceType() === I.MOBILE
        }
        isTablet() {
            return this.getDeviceType() === I.TABLET
        }
        isDesktop() {
            return !(this.isMobile() || this.isTablet())
        }
    }
    ;
    var Fa, Ga = Fa || (Fa = {});
    Ga.ANY = "a";
    Ga.DESKTOP = "c";
    Ga.IPAD = "t";
    Ga.MOBILE = "m";
    Ga.TABLET = "t";
    var Ha = /\{POSITION}|\{position}|\{Position}/
      , Ia = RegExp(/((!o2)-[A-Za-z]{1,}-[A-Za-z]{2}-[A-Za-z0-9]{2}-[0-9]{2})/)
      , Ja = RegExp(/((!o3)[_-][A-Za-z]+(?:-[A-Za-z0-9]+)*)/)
      , Ka = {
        CONVERSION_CTAS: "a[href*=subid]",
        ADS_INTERNAL_CTAS: `a[href*="/home/"]:not([target="_blank"]), a[href*="${ya.ADS.DOMAIN}"][target="_blank"]`
    }
      , La = class {
        constructor() {
            this.adsInternalCtas = null;
            var a = (new Ea).getDeviceType();
            this.deviceValue = Fa[a] || Fa.ANY;
            this.conversionCtas = document.querySelectorAll(Ka.CONVERSION_CTAS);
            this.urlSubidParam = (a = (new URLSearchParams(window.location.search)).get("subid")) ? M.call(a, N, P) : null;
            a = document.querySelector(u.HTML);
            this.ciAppendix = (null === a || void 0 === a ? void 0 : a.getAttribute(u.CI_APPENDIX)) || "";
            this.defaultParams = (null === a || void 0 === a ? void 0 : a.getAttribute(u.SUF_SUBID)) || "";
            this.noCodelessIncentive = !1;
            this.locale = (null === a || void 0 === a ? void 0 : a.getAttribute(u.LOCALE)) || "";
            for (const b of this.conversionCtas)
                b.classList.add(w.SO_RPL),
                this.urlSubidParam && !this.hasHardSubid(b) && (this.propagateUrlSubid(b),
                this.urlSubidParam.match(Ha) && La.assignPositionSegment(b)),
                La.assignDeviceSegment(b, this.deviceValue);
            this.urlSubidParam && this.propagateUrlSubidInternalLinks();
            document.addEventListener(x.GADS_UPDATE_CTA_PARAMS, b=>{
                const {selector: c, position: d} = b.detail;
                this.updateCtaParams(c, d)
            }
            )
        }
        async propagateUrlSubidInternalLinks() {
            var a, b;
            this.adsInternalCtas = document.querySelectorAll(Ka.ADS_INTERNAL_CTAS);
            for (const c of this.adsInternalCtas)
                if (c.classList.add("so-rpl"),
                !this.hasHardSubid(c)) {
                    const d = c.href
                      , e = 0 < d.indexOf("?") ? "&" : "?";
                    c.href = `${d}${e}${"subid"}=${this.urlSubidParam}`;
                    (null === (a = this.urlSubidParam) || void 0 === a ? 0 : a.includes("{device}")) && La.assignDeviceSegment(c, this.deviceValue);
                    (null === (b = this.urlSubidParam) || void 0 === b ? 0 : b.match(Ha)) && La.assignPositionSegment(c)
                }
        }
        propagateUrlSubid(a) {
            var b, c, d, e, f;
            const k = a.href.split("subid")[0] || a.href
              , m = a.href.split(Ia)[1] || ""
              , n = this.ciAppendix ? `!o3${this.ciAppendix}` : a.href.split(Ja)[1] || "";
            let t = this.urlSubidParam;
            !m || null !== (b = this.urlSubidParam) && void 0 !== b && b.includes(m) ? !n || null !== (d = this.urlSubidParam) && void 0 !== d && d.includes(n) || (t = (null === (e = this.urlSubidParam) || void 0 === e ? 0 : e.match(Ja)) ? null === (f = this.urlSubidParam) || void 0 === f ? void 0 : f.replace(this.urlSubidParam.split(Ja)[1], n) : `${this.urlSubidParam}${n.slice(3)}`) : t = (null === (c = this.urlSubidParam) || void 0 === c ? 0 : c.match(Ia)) ? this.urlSubidParam.replace(this.urlSubidParam.split(Ia)[1], m) : `${this.urlSubidParam}${m.slice(3)}`;
            return a.href = `${k}${"subid"}=${t}`
        }
        updateCtaParams(a, b) {
            a = document.querySelectorAll(a);
            for (const c of a)
                c.href = La.getUrlWithDefaultParams({
                    baseUrl: c.href,
                    position: b,
                    defaultParams: this.defaultParams,
                    noCodelessIncentive: this.noCodelessIncentive,
                    locale: this.locale
                }),
                this.urlSubidParam && this.propagateUrlSubid(c),
                La.assignDeviceSegment(c, this.deviceValue)
        }
        static getUrlWithDefaultParams(a) {
            let {baseUrl: b, defaultParams: c} = a;
            const {position: d, locale: e, noCodelessIncentive: f} = a;
            f && (c = c.replace(Ia, "!o2").replace(Ja, "!o3"));
            if (!b.includes("subid") && c) {
                a = c;
                "root" !== e && (a = a.replace(new RegExp(/([Ww]{2}-[Ww]{2})/), `${e.split("_").reverse().join("-")}`));
                if (d)
                    a = a.replace(new RegExp(Ha), d);
                else
                    return b;
                -1 < b.indexOf("?") && (a = a.replace("?", "&"));
                b += a
            }
            return b
        }
        static dispatchUpdateCtaParamsEvent(a, b="") {
            document.dispatchEvent(new CustomEvent(x.GADS_UPDATE_CTA_PARAMS,{
                detail: {
                    selector: a,
                    position: b
                }
            }))
        }
        static assignDeviceSegment(a, b) {
            const c = a.href;
            c.includes("subid") && c.includes("{device}") && (a.href = c.replace("{device}", b))
        }
        static assignPositionSegment(a) {
            var b;
            const c = null === (b = a.parentElement) || void 0 === b ? void 0 : b.getAttribute(u.CTA_POSITION);
            c && (a.href = a.href.replace(Ha, c))
        }
        hasHardSubid(a) {
            var b, c;
            return !(null === (c = null === (b = a.parentElement) || void 0 === b ? void 0 : b.getAttribute(u.CTA_URL)) || void 0 === c || !c.includes("subid"))
        }
    }
    ;
    var Ma = "sunday monday tuesday wednesday thursday friday saturday".split(" ")
      , Na = class {
        constructor() {
            this.officeOpen = !0;
            this.etoContent = null;
            this.etoButtons = [];
            this.scheduleButtons = [];
            this.excludedModules = ["gads-contact-hub", "gads-feature-media"]
        }
        isOfficeOpen() {
            this.etoButtons = document.querySelectorAll("[data-g-cta-name='tfn']");
            this.scheduleButtons = document.querySelectorAll("[data-g-cta-name='schedulemeeting']");
            var a = document.getElementsByTagName("header")[0].getAttribute(u.OFFICE_HOURS);
            this.etoContent = a ? JSON.parse(a) : null;
            if (!(this.etoContent && this.etoContent.open_hour && this.etoContent.close_hour && this.etoContent.open_days.length))
                return !0;
            var b = new Date
              , c = b.getTimezoneOffset() / 60 + this.etoContent.gmt_offset;
            const d = b.getHours();
            var e = new Date(b.setHours(d + (0 < c ? Math.floor(c) : Math.ceil(c))));
            a = e.getTime();
            e = e.getDay();
            if (!this.etoContent.open_days.includes(Ma[e]))
                return !1;
            let f;
            var k = e = null;
            if (this.etoContent.dst_start && this.etoContent.dst_end) {
                k = this.etoContent.dst_start.split("-");
                const m = this.etoContent.dst_end.split("-");
                e = new Date(a);
                e.setMonth(Number(k[1]) - 1);
                e.setDate(Number(k[2]));
                e.setHours(2);
                e.setMinutes(0);
                e = e.getTime();
                f = new Date(a);
                Number(m[1]) < Number(k[1]) && f.setFullYear(Number(k[0]) + 1);
                f.setMonth(Number(m[1]) - 1);
                f.setDate(Number(m[2]));
                f.setHours(2);
                f.setMinutes(0);
                k = f.getTime()
            }
            e && k && a > e && a < k && (e = new Date(b.setHours(d + c + 1)),
            a = e.getTime());
            b = new Date(a);
            c = new Date(a);
            b.setHours(this.etoContent.open_hour);
            c.setHours(this.etoContent.close_hour);
            b.setMinutes(this.etoContent.open_minute);
            c.setMinutes(this.etoContent.close_minute);
            b.setSeconds(0);
            c.setSeconds(0);
            return a > b.getTime() && a < c.getTime()
        }
        checkButtons(a) {
            const b = !a;
            var c = document.getElementsByTagName("gads-contact-hub")[0];
            c = null === c || void 0 === c ? void 0 : c.querySelector("[data-bm-widget-agent-id]");
            for (const d of this.scheduleButtons)
                d.classList.toggle(w.HIDDEN, !b && this.shouldHideButton(d));
            for (const d of this.etoButtons)
                d.classList.toggle(w.HIDDEN, b && this.shouldHideButton(d));
            if (!a && c) {
                if (null !== document.querySelector("gads-ads-guide"))
                    return;
                c.classList.add(u.DISABLED)
            }
            this.checkSimpleEndCap()
        }
        displayContactButtons() {
            this.officeOpen = this.isOfficeOpen();
            this.checkButtons(this.officeOpen);
            document.addEventListener(x.CHATBOT_LOADED, ()=>{
                this.officeOpen = this.isOfficeOpen();
                this.checkButtons(this.officeOpen)
            }
            )
        }
        shouldHideButton(a) {
            a = a.getAttribute("data-g-module-name") || "";
            return !this.excludedModules.includes(a)
        }
        checkSimpleEndCap() {
            const a = document.querySelector("gads-simple-end-cap");
            var b = null === a || void 0 === a ? void 0 : a.getElementsByClassName("glue-button");
            b = b ? Array.from(b) : [];
            return b.length ? b.every(c=>c.classList.contains(w.HIDDEN)) && (null === a || void 0 === a ? void 0 : a.classList.add(w.HIDDEN)) : !1
        }
    }
      , Oa = new Na;
    var Pa, Qa = Pa || (Pa = {});
    Qa.UNKNOWN = "UNKNOWN";
    Qa.CLICK = "CLICK";
    Qa.VIEW = "VIEW";
    Qa.SCROLL = "SCROLL";
    var Ra, Sa = Ra || (Ra = {});
    Sa.UNKNOWN = "CUSTOMER_ACCOUNT_STATUS_UNKNOWN";
    Sa.DRAFT = "CUSTOMER_ACCOUNT_STATUS_DRAFT";
    Sa.ACTIVE = "CUSTOMER_ACCOUNT_STATUS_ACTIVE";
    Sa.CHURNED = "CUSTOMER_ACCOUNT_STATUS_CHURNED";
    Sa.CLOSED = "CUSTOMER_ACCOUNT_STATUS_CLOSED";
    var Ta, Ua = Ta || (Ta = {});
    Ua.UNKNOWN = "UNKNOWN";
    Ua.BAU = "BAU";
    Ua.URL_COLLECTION_EXPERIMENT = "URL_COLLECTION_EXPERIMENT";
    Ua.CHOOSE_YOUR_OWN_EXPERIMENT = "CHOOSE_YOUR_OWN_EXPERIMENT";
    var Va, Wa = Va || (Va = {});
    Wa.USER_INCENTIVE_OFFER_STATE_UNKNOWN = "USER_INCENTIVE_OFFER_STATE_UNKNOWN";
    Wa.OFFER_PENDING = "OFFER_PENDING";
    Wa.OFFER_REVEALED = "OFFER_REVEALED";
    Wa.OFFER_CLAIMED = "OFFER_CLAIMED";
    Wa.NO_OFFER = "NO_OFFER";
    var Xa, Ya = Xa || (Xa = {});
    Ya.USER_URL_SOURCE_UNKNOWN = "USER_URL_SOURCE_UNKNOWN";
    Ya.INCENTIVE_MODAL = "INCENTIVE_MODAL";
    Ya.ADS_GUIDE = "ADS_GUIDE";
    Ya.INFERRED = "INFERRED";
    ({
        customerDescriptiveName: '<a href="&#X6A;avascript:alert(1)">XSS</a>',
        customerId: 1234579753,
        customerStatus: Ra.ACTIVE,
        externalCustomerId: "1234-567-890",
        customerId: 9999999999,
        customerStatus: Ra.DRAFT,
        externalCustomerId: "9999-999-999"
    });
    ({
        customerDescriptiveName: "Google Ads Account",
        customerId: 7777777777,
        customerStatus: Ra.UNKNOWN,
        externalCustomerId: "7777-777-777"
    });
    var Za = [{
        awardAmount: ca(500),
        targetAmount: ca(500),
        subidSuffix: "cyoipilot-0"
    }, {
        awardAmount: ca(500),
        targetAmount: ca(500),
        subidSuffix: "cyoipilot-1"
    }, {
        awardAmount: ca(1E3),
        targetAmount: ca(1500),
        subidSuffix: "cyoipilot-2"
    }, {
        awardAmount: ca(1500),
        targetAmount: ca(3E3),
        subidSuffix: "cyoipilot-3"
    }]
      , $a = {
        availableIncentives: [Za[0]],
        experimentArmSubid: "-ahpm-0000000142-0000000000",
        userIncentiveOfferState: Va.OFFER_REVEALED,
        offerUiTreatment: Ta.BAU,
        offeredIncentive: Za[0],
        userUrl: "",
        userUrlOrigin: ""
    };
    ({
        availableIncentives: [Za[1], Za[2], Za[3]],
        experimentArmSubid: "-ahpm-0000000142-0000000001",
        userIncentiveOfferState: Va.OFFER_REVEALED,
        offerUiTreatment: Ta.CHOOSE_YOUR_OWN_EXPERIMENT,
        offeredIncentive: null,
        userUrl: "",
        userUrlOrigin: "",
        offeredIncentive: Za[2],
        availableIncentives: [Za[2]],
        userIncentiveOfferState: Va.OFFER_CLAIMED
    });
    ({
        ...$a,
        userIncentiveOfferState: Va.OFFER_CLAIMED
    });
    ({
        availableIncentives: [],
        experimentArmSubid: "",
        userIncentiveOfferState: Va.NO_OFFER,
        offerUiTreatment: Ta.BAU,
        offeredIncentive: null,
        userUrl: "",
        userUrlOrigin: "",
        userIncentiveOfferState: Va.OFFER_PENDING
    });
    var ab = class {
        constructor() {
            this.marketingClient = null;
            this.localStorageAccount = "0";
            this.onClientReady = async a=>{
                try {
                    await Promise.race([new Promise(b=>{
                        window.addEventListener(x.AMA_CLIENT_READY, c=>{
                            this.marketingClient = c.detail;
                            b()
                        }
                        )
                    }
                    ), da(15E3)])
                } catch (b) {
                    this.marketingClient = null
                }
                a()
            }
            ;
            this.removeURLPilotIncentive = ()=>{
                try {
                    localStorage.getItem("agc.pilot.load") && localStorage.removeItem("agc.pilot.load")
                } catch (a) {}
            }
            ;
            this.getAdsAccountsClient = async()=>{
                try {
                    await this.marketingClientReady;
                    if (!this.marketingClient)
                        return null;
                    const a = await this.marketingClient.getAdsAccounts();
                    return a ? a.customersList : null
                } catch (a) {
                    return null
                }
            }
            ;
            this.setMarketingClientUser = async a=>{
                await this.marketingClientReady;
                this.marketingClient && this.marketingClient.setAuthUser(a)
            }
            ;
            this.marketingClient = null;
            this.marketingClientReady = new Promise(a=>{
                window.addEventListener(x.LOAD, ()=>{
                    this.removeURLPilotIncentive();
                    this.onClientReady(a)
                }
                )
            }
            )
        }
        async loadUserInfo() {
            try {
                await this.marketingClientReady;
                if (!this.marketingClient)
                    return null;
                const a = await this.marketingClient.loadUserInfo();
                a.experimentArmSubid && this.setMendelExperiment(a.experimentArmSubid);
                return a
            } catch (a) {
                return null
            }
        }
        async recordInPageInteraction(a, b, c) {
            await this.marketingClientReady;
            if (this.marketingClient)
                return await this.marketingClient.recordInPageInteraction(a, b, c)
        }
        setMendelExperiment(a) {
            if (a = (a = a.match(/-[a-z]+-00\d+-00\d+/)) && a[0])
                window.dataLayer && window.dataLayer.push({
                    event: "set_experiment",
                    experiments: a
                }),
                document.documentElement.setAttribute(u.MTE, a)
        }
    }
      , bb = new ab;
    var cb = class {
        constructor() {
            this.adsGuideEnabled = !1;
            this.adsGuideEnabled = null !== document.querySelector("gads-ads-guide");
            this.initChatbot()
        }
        loadScript(a, b, c) {
            const d = document.createElement("script");
            d.crossOrigin = "use-credentials";
            d.src = a;
            d.onload = b;
            c && (d.onerror = c);
            document.head.appendChild(d)
        }
        dispatchLoadedEvent() {
            document.dispatchEvent(new CustomEvent(x.CHATBOT_LOADED))
        }
        loadAdsGuide() {
            this.loadScript("https://www.gstatic.com/greentea/adsguide/prod/v1/web/main.dart.js", ()=>{
                window.adsguide.isEnabled(a=>{
                    var b;
                    a ? this.dispatchLoadedEvent() : (null === (b = document.querySelector("gads-ads-guide")) || void 0 === b ? void 0 : b.remove(),
                    this.loadBmChat())
                }
                )
            }
            , ()=>{
                var a;
                null === (a = document.querySelector("gads-ads-guide")) || void 0 === a ? void 0 : a.remove();
                this.loadBmChat()
            }
            )
        }
        loadBmChat() {
            this.loadScript("https://businessmessages.google.com/widget/v2/js", ()=>{
                const a = setInterval(()=>{
                    l.BM_WIDGET in window && (clearInterval(a),
                    this.dispatchLoadedEvent())
                }
                , G.TWO_HUNDRED)
            }
            )
        }
        initChatbot() {
            this.adsGuideEnabled ? this.loadAdsGuide() : this.loadBmChat();
            document.addEventListener(x.CHATBOT_LOADED, ()=>{
                this.bindEvents();
                this.unhideButtons()
            }
            )
        }
        bindEvents() {
            if (this.adsGuideEnabled) {
                var a = document.querySelectorAll("button[data-bm-widget-agent-id]");
                for (const c of a)
                    c.addEventListener(x.CLICK, ()=>{
                        null === document.querySelector("gads-ads-guide") && bb.recordInPageInteraction("DSAChatClicked", {
                            action: "ACTION_CLICK"
                        })
                    }
                    );
                a = document.querySelectorAll('[data-g-cta-name="signin"]');
                for (var b of a)
                    b.addEventListener(x.CLICK, ()=>{
                        bb.recordInPageInteraction("AGCCaptureSignInCtaButton", {
                            action: "ACTION_CLICK"
                        })
                    }
                    );
                b = document.querySelectorAll('[data-g-cta-name="startnow"]');
                for (const c of b)
                    c.addEventListener(x.CLICK, ()=>{
                        bb.recordInPageInteraction("AGCStartNowCtaButton", {
                            action: "ACTION_CLICK"
                        })
                    }
                    )
            }
        }
        unhideButtons() {
            var a;
            const b = null !== document.querySelector("gads-ads-guide")
              , c = Oa.isOfficeOpen();
            if (b) {
                var d = document.querySelectorAll("button[data-bm-widget-agent-id]");
                for (var e of d)
                    e.classList.remove(w.HIDDEN)
            } else if (l.BM_WIDGET in window && "BmSupportedDesktop" === (null === (a = window.bmwidget) || void 0 === a ? void 0 : a.platform) && c) {
                this.adsGuideEnabled && bb.recordInPageInteraction("DSAChatShown", {
                    action: "ACTION_VIEW"
                });
                e = document.querySelectorAll("button[data-bm-widget-agent-id]");
                for (d of e)
                    d.classList.remove(w.HIDDEN)
            }
        }
    }
    ;
    var db = document.querySelector("html")
      , fb = [];
    "zh-CN_cn" !== (null === db || void 0 === db ? void 0 : db.getAttribute("locale")) && fb.push("https://ads.google.com/aw/google_ads_prefetch.js?paths=/aw,/aw_cm,/aw_express/management");
    var gb = class {
        constructor() {
            window.addEventListener("DOMContentLoaded", ()=>{
                window.setTimeout(()=>{
                    fb.forEach(a=>{
                        this.loadAllAssets_(a)
                    }
                    )
                }
                , 5E3)
            }
            )
        }
        loadAllAssets_(a) {
            const b = document.querySelector("script")
              , c = document.createElement("script");
            c.async = !0;
            c.src = a;
            (null === b || void 0 === b ? 0 : b.parentNode) && b.parentNode.insertBefore(c, b)
        }
    }
    ;
    var hb = class extends L {
        constructor() {
            super(...arguments);
            this.adsGuideLinks = this.adsGuideButtons = null
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.adsGuideButtons = document.querySelectorAll('button[special-triggers="ads_guide"], [data-bm-widget-layout]'),
            this.adsGuideLinks = document.querySelectorAll('a[special-triggers="ads_guide"]'));
            document.addEventListener(x.CHATBOT_LOADED, ()=>{
                const a = ()=>{
                    bb.recordInPageInteraction("AdsGuideClicked", {});
                    window.adsguide.startChat()
                }
                ;
                this.addClickListener(this.adsGuideButtons, a);
                this.addClickListener(this.adsGuideLinks, a)
            }
            )
        }
        addClickListener(a, b) {
            null === a || void 0 === a ? void 0 : a.forEach(c=>{
                c.addEventListener(x.CLICK, b)
            }
            )
        }
        render() {
            return g``
        }
    }
    ;
    customElements.define("gads-ads-guide", hb);
    var ib = class extends L {
        constructor() {
            super(...arguments);
            this.copy = "";
            this.checkNav = ()=>{
                document.querySelector(".glue-header--double") && this.classList.add("under-tier-2-nav")
            }
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get copyText() {
            return this.getAttribute(u.COPY) || this.copy
        }
        connectedCallback() {
            this.firstElementChild || this.replaceChildren(this.render());
            this.checkNav()
        }
        render() {
            return g`
      <section class="glue-page gads-banner">
        <div class="gads-banner__container gads-banner__container--desktop">
          <p class="glue-font-weight-medium glue-text-center">
            ${this.copyText}${this.ctaBlock ? this.ctaBlock[0] : ""}
          </p>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-banner", ib);
    var jb = class extends L {
        get ctaText() {
            return this.getAttribute(u.CTA_TEXT) || ""
        }
        get ctaLabel() {
            return this.getAttribute(u.CTA_LABEL) || ""
        }
        get ctaUrl() {
            const a = this.getAttribute(u.CTA_URL) || ""
              , b = this.getAttribute(u.CTA_POSITION) || "";
            return La.getUrlWithDefaultParams({
                baseUrl: a,
                position: b,
                defaultParams: this.default_page_params,
                noCodelessIncentive: this.no_incentive,
                locale: this.locale
            })
        }
        get ctaHidden() {
            return this.hasAttribute("cta-hidden")
        }
        get ariaLabel() {
            return this.getAttribute(u.LABEL) || ""
        }
        get ariaControls() {
            return this.getAttribute("cta-aria-controls") || ""
        }
        get ariaExpanded() {
            return this.getAttribute("cta-aria-expanded") || ""
        }
        get ariaHasPopup() {
            return this.getAttribute("cta-aria-haspopup") || ""
        }
        get gtmCtaName() {
            return this.getAttribute(u.GTM_CTA_NAME) || ""
        }
        get specialTriggers() {
            return this.getAttribute("special-triggers") || ""
        }
        get iconType() {
            return this.getAttribute(u.ICON_TYPE) || ""
        }
        get iconId() {
            return this.getAttribute(u.ICON_ID) || ""
        }
        get chatbotAgentId() {
            return this.getAttribute(u.CHATBOT_AGENT_ID) || ""
        }
        get chatbotContextId() {
            return this.getAttribute(u.CHATBOT_CONTEXT_ID) || ""
        }
        get isChatbotButton() {
            return this.hasAttribute(u.CHATBOT_AGENT_ID) || this.hasAttribute(u.CHATBOT_CONTEXT_ID)
        }
        get iconSize() {
            return this.getAttribute(u.ICON_SIZE) || ""
        }
        get isTfnButton() {
            return "PHONE" === this.iconId || "tfn" === this.gtmCtaName
        }
        get isIconInline() {
            return this.hasAttribute("label-icon-inline")
        }
        get isButtonHidden() {
            return this.hasAttribute("hide")
        }
        classNameLookup(a) {
            return {
                high: "glue-button--high-emphasis",
                medium: "glue-button--medium-emphasis",
                low: "glue-button--low-emphasis",
                tonal: "glue-button--tonal",
                reversed: "glue-button--reversed",
                "reversed-alt": "glue-button--reversed-alternate",
                "glue-icon": "glue-button--icon",
                "glue-icon-right": "glue-button--icon-right",
                "lg-icon": "lg-icon",
                "lg-icon-right": "lg-icon lg-icon-right",
                "lg-icon-top": "lg-icon lg-icon-top"
            }[a] || ""
        }
        get classNames() {
            const a = this.getAttribute("emphasis") || "medium";
            var b = this.getAttribute("reversed") || ""
              , c = this.getAttribute(u.ICON_TYPE) || "";
            const d = c.includes("lg-icon") ? "" : this.classNameLookup(a);
            b = this.classNameLookup(b);
            c = this.classNameLookup(c);
            return `${"inline" === a ? "glue-link glue-inline-link" : "glue-button"} ${d} ${b} ${c} ${this.isTfnButton ? "hidden" : ""} ${this.isButtonHidden ? "hidden" : ""}`
        }
        get iconSizeClassName() {
            return this.iconSize ? h`class-names="glue-icon--${this.iconSize}px"` : ""
        }
        render() {
            const a = this.iconType && this.iconId ? h`
      <div class="icon-wrapper">
        <gads-icon icon-id="${this.iconId}" ${this.iconSizeClassName}></gads-icon>
      </div>
    ` : ""
              , b = h`
      <div class="gads-button-text__container">
        <div class="gads-button-text__headline">
          ${a}
          ${this.ctaText}
        </div>
        <span class="glue-label">${this.ctaLabel}</span>
      </div>
    `
              , c = h`
      ${a}
      <div class="gads-button-text__container ${a ? "glue-text-left" : ""}">
        <span>${this.ctaText}</span>
        <span class="glue-label">${this.ctaLabel}</span>
      </div>
    `
              , d = ()=>this.ctaLabel ? this.isIconInline ? b : c : h`
          ${a}
          ${this.ctaText}
        `
              , e = ()=>this.isChatbotButton ? this.chatbotAgentId && this.chatbotContextId ? h`
            <button class="${this.classNames} glue-button--icon hidden"
                aria-label="${this.ctaLabel}"
                data-bm-widget-agent-id='${this.chatbotAgentId}'
                data-bm-widget-context='${this.chatbotContextId}'
                data-bm-widget-layout="advanced"
                data-g-cta-name='${this.gtmCtaName ? this.gtmCtaName : "chatbot"}'
                ${this.gtmModuleName ? `data-g-module-name="${this.gtmModuleName}"` : ""}>
              <div class="icon-wrapper"><gads-icon icon-id="CHAT"></gads-icon></div>
              <span class="bm-widget-button-text">${this.ctaText}</span>
            </button>
          ` : h`
            <span>Missing data for Chatbot: Agent-ID or Context ID</span>
          ` : h`
        <button class="glue-button ${this.classNames}"
            ${this.ariaLabel ? `aria-label="${this.ariaLabel}"` : ""}
            ${this.ariaControls ? `aria-controls="${this.ariaControls}"` : ""}
            ${this.ariaExpanded ? `aria-expanded="${this.ariaExpanded}"` : ""}
            ${this.ariaHasPopup ? `aria-haspopup="${this.ariaHasPopup}"` : ""}
            ${this.ctaHidden ? 'aria-hidden="true" tabindex="-1"' : ""}
            ${this.gtmCtaName ? `data-g-cta-name="${this.gtmCtaName}"` : ""}
            ${this.gtmModuleName ? `data-g-module-name="${this.gtmModuleName}"` : ""}
            ${this.specialTriggers ? `special-triggers="${this.specialTriggers}"` : ""}>
          ${d()}
        </button>
      `
              , f = this.gtmCtaName ? h`
        <a class="${this.classNames}"
            href="${this.ctaUrl}"
            ${this.ariaLabel ? `aria-label="${this.ariaLabel}"` : ""}
            ${this.ctaHidden ? 'aria-hidden="true" tabindex="-1"' : ""}
            ${this.gtmCtaName ? `data-g-cta-name="${this.gtmCtaName}"` : ""}
            ${this.gtmModuleName ? `data-g-module-name="${this.gtmModuleName}"` : ""}
            ${this.specialTriggers ? `special-triggers="${this.specialTriggers}"` : ""}
            ${this.setExternalLink(this.ctaUrl)}>
          ${d()}
        </a>
      ` : h`<span> Missing gtm_cta_name </span>`;
            return g`${this.ctaUrl ? f : e()}`
        }
    }
    ;
    customElements.define("gads-button", jb);
    var kb = class {
        constructor() {
            this.currentBp = "";
            this._handlers = [];
            this.monitor();
            const a = ea(this.monitor.bind(this), G.SIXTY);
            window.addEventListener(x.RESIZE, ()=>a())
        }
        subscribe(a) {
            this._handlers.push(a)
        }
        getBpName(a=window.innerWidth) {
            return 600 > a ? r.SM : 1024 > a ? r.MD : 1440 > a ? r.LG : r.XL
        }
        monitor() {
            const a = this.getBpName(window.innerWidth);
            if (a !== this.currentBp) {
                for (const b of this._handlers)
                    b.call(this, a);
                this.currentBp = a
            }
        }
    }
      , Q = new kb;
    var lb = class extends L {
        constructor() {
            var a, b;
            super(...arguments);
            this._carousel = null;
            this._carouselEl = this.querySelector(".glue-carousel");
            this._carouselListDiv = this.querySelector(".glue-carousel__viewport");
            this._carouselItems = this.querySelectorAll(".glue-carousel__item");
            this._modalEls = this.querySelectorAll(".gads-video-modal");
            this._carouselNav = this.querySelector(".gads-carousel__navigation--container");
            this._carouselNavPrevBtn = null === (a = this._carouselNav) || void 0 === a ? void 0 : a.firstElementChild;
            this._carouselNavNextBtn = null === (b = this._carouselNav) || void 0 === b ? void 0 : b.lastElementChild
        }
        connectedCallback() {
            var a, b;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._carouselEl = this.querySelector(".glue-carousel"),
            this._carouselItems = this.querySelectorAll(".glue-carousel__item"),
            this._modalEls = this.querySelectorAll(".gads-video-modal"),
            this._carouselListDiv = this.querySelector(".glue-carousel__viewport"),
            this._carouselNav = this.querySelector(".gads-carousel__navigation--container"),
            this._carouselNavPrevBtn = null === (a = this._carouselNav) || void 0 === a ? void 0 : a.firstElementChild,
            this._carouselNavNextBtn = null === (b = this._carouselNav) || void 0 === b ? void 0 : b.lastElementChild);
            this.removeAttribute("cards");
            if (this._carouselEl && l.GLUE in window) {
                this._carousel = new glue.Carousel(this._carouselEl,{
                    cardsPerPage: this.cardsPerPage,
                    currentSlide: this.startingSlide,
                    cyclical: this.isCyclical,
                    navigation: this.showDots,
                    peekOut: this.peekOut
                });
                const c = new window.MutationObserver(d=>{
                    d.forEach(e=>{
                        this.carouselAttrsHandler(e.target)
                    }
                    )
                }
                );
                this._carouselItems && this._carouselItems.forEach(d=>{
                    this.carouselAttrsHandler(d);
                    c.observe(d, {
                        attributeFilter: [u.ARIA_HIDDEN]
                    })
                }
                );
                window.addEventListener(x.DOM_CONTENT_LOADED, ()=>{
                    this._modalEls && this._modalEls.forEach(d=>{
                        this._carouselListDiv && this._carouselListDiv.append(d)
                    }
                    )
                }
                )
            }
            Q.getBpName() === r.SM && this._carouselNav && (this._carouselNav.setAttribute(u.ARIA_HIDDEN, "true"),
            this._carouselNavPrevBtn && this._carouselNavNextBtn && (this._carouselNavPrevBtn.setAttribute(u.TABINDEX, "-1"),
            this._carouselNavNextBtn.setAttribute(u.TABINDEX, "-1")));
            Q.subscribe(c=>{
                c = c === r.SM;
                this._carouselNav && this._carouselNavPrevBtn && this._carouselNavNextBtn && (c ? (this._carouselNav.setAttribute(u.ARIA_HIDDEN, "true"),
                this._carouselNavPrevBtn.setAttribute(u.TABINDEX, "-1"),
                this._carouselNavNextBtn.setAttribute(u.TABINDEX, "-1")) : (this._carouselNav.removeAttribute(u.ARIA_HIDDEN),
                this._carouselNavPrevBtn.removeAttribute(u.TABINDEX),
                this._carouselNavNextBtn.removeAttribute(u.TABINDEX)))
            }
            )
        }
        get gtmModuleName() {
            return this.getAttribute(u.GTM_MODULE_NAME) || this.nodeName.toLowerCase()
        }
        get carouselEl() {
            return this._carouselEl
        }
        set carouselEl(a) {
            this._carouselEl = a
        }
        get carousel() {
            return this._carousel
        }
        set carousel(a) {
            this._carousel = a instanceof glue.Carousel ? a : null
        }
        get cardsPerPage() {
            return Number(this.getAttribute("cards-per-page")) || 3
        }
        get peekOut() {
            return !this.hasAttribute("no-peek")
        }
        get startingSlide() {
            return Number(this.getAttribute("start")) || 1
        }
        get isCyclical() {
            return this.hasAttribute("cyclical")
        }
        get showDots() {
            return !this.hasAttribute("no-dots")
        }
        get cards() {
            const a = this.getAttribute("cards");
            return a ? this.decodeJsonString(a) : null
        }
        get isImageOnly() {
            return this.hasAttribute("image-only")
        }
        get isAnimatedText() {
            return this.hasAttribute("animated-text")
        }
        get isFeature3Up() {
            return this.hasAttribute("feature-3up")
        }
        get isCarouselCard() {
            return this.hasAttribute("carousel-card")
        }
        get ariaLabel() {
            return this.getAttribute("carousel-description") || ""
        }
        get isCaseStudy() {
            return this.hasAttribute("case-study")
        }
        get isCaseStudyMobile() {
            return this.hasAttribute("case-study-mobile")
        }
        get isStacked2Up() {
            return this.hasAttribute("stacked-2up")
        }
        get mediaAlignment() {
            return this.getAttribute(u.MEDIA_ALIGNMENT) || ""
        }
        get backgroundColor() {
            return this.getAttribute(u.BACKGROUND_COLOR) || ""
        }
        get dataAriaLabels() {
            const a = this.getAttribute(u.CAROUSEL_ARIA_LABELS);
            return a && "null" !== a ? JSON.parse(decodeURI(a)) : null
        }
        get modalAriaLabels() {
            return this.getAttribute(u.MODAL_ARIA_LABELS) || ""
        }
        carouselAttrsHandler(a) {
            a.removeAttribute(u.ARIA_HIDDEN)
        }
        imageCardRender(a) {
            return h`
      <div aria-label="${a.aria_description}"class="glue-card__inner">
        <gads-image
            image="${a.url}"
            widths="lg:416,md:460,sm:543"
            lazy
        ></gads-image>
      </div>
    `
        }
        animatedTextCardRender(a) {
            return h`
      <article class="glue-carousel__item glue-card">
        <div aria-label="${a.title}" class="glue-card__inner">
          <gads-image
              images="${encodeURI(JSON.stringify(a.images))}"
              widths="xl:503,lg:427,md:450,sm:400"
              lazy
              round-corners
          ></gads-image>
          <div class="glue-text-center glue-spacer-3-top">
            <h4 class="glue-headline glue-headline--headline-5 glue-spacer-2-bottom animated-card-title">${a.title}</h4>
            <p class="animated-card-body">${a.body}</p>
          </div>
        </div>
      </article>
    `
        }
        feature3UpCardRender(a) {
            return h`
      <gads-card
          background-color="${this.backgroundColor}"
          body="${a.body}"
          card-type="featureCard"
          ${Array.isArray(a.cta) && a.cta.every(b=>b.url) ? `cta-block="${encodeURI(JSON.stringify(a.cta))}"` : null}
          headline="${a.headline}"
          images="${this.formatMultiImage(a.images, !0)}"
          is-glue-carousel
          widths="md:459,sm:473"
          youtube-id="${a.youtube_id}">
      </gads-card>
    `
        }
        cardCarouselRender(a) {
            return h`
      <gads-card
          ${a.body ? `body='${encodeURI(a.body)}'` : ""}
          card-type="toolsCard"
          cta-name="${a.gtm_cta_name}"
          cta-url="${a.cta_url}"
          is-glue-carousel
          module-name="${this.gtmModuleName}"
          has-transparency="${a.has_transparency}"
          headline="${a.title}"
          icon="${a.icon}">
      </gads-card>
    `
        }
        caseStudyCardRender(a) {
            return h`
      <gads-card
          body="${a.body}"
          callout='${JSON.stringify(a.data_callout)}'
          card-type="caseStudyCard"
          cta-button='${JSON.stringify(a.cta)}'
          headline="${a.headline}"
          images="${this.formatMultiImage(a.images, !0)}"
          logo-image="${this.formatMultiImage(a.logo_image, !0)}"
          media-alignment="${this.mediaAlignment}"
          modal-aria-labels="${this.modalAriaLabels}"
          module-name="${this.gtmModuleName}"
          youtube-data='${JSON.stringify(a.youtube)}'>
      </gads-card>
    `
        }
        caseStudyMobileCardRender(a) {
            return h`
      <gads-card
          body="${a.body}"
          callout='${JSON.stringify(a.data_callout)}'
          card-type="caseStudyMobileCard"
          cta-button='${JSON.stringify(a.cta)}'
          headline="${a.headline}"
          images="${this.formatMultiImage(a.images, !0)}"
          logo-image="${this.formatMultiImage(a.logo_image, !0)}"
          modal-aria-labels="${this.modalAriaLabels}"
          module-name="${this.gtmModuleName}"
          youtube-data='${JSON.stringify(a.youtube)}'>
      </gads-card>
    `
        }
        stacked2UpCardRender(a) {
            return h`
      <gads-card
          body="${a.body}"
          card-type="stackedCard"
          cta-button='${this.ctaBlock}'
          headline="${a.headline}"
          images="${this.formatMultiImage(a.images, !0)}"
          widths="sm:550">
      </gads-card>
    `
        }
        carouselRender(a) {
            return h`
      <li>
        ${this.isImageOnly ? this.imageCardRender(a) : this.isAnimatedText ? this.animatedTextCardRender(a) : this.isFeature3Up ? this.feature3UpCardRender(a) : this.isCarouselCard ? this.cardCarouselRender(a) : this.isCaseStudy ? this.caseStudyCardRender(a) : this.isCaseStudyMobile ? this.caseStudyMobileCardRender(a) : this.isStacked2Up ? this.stacked2UpCardRender(a) : ""}
      </li>
    `
        }
        render() {
            const a = this.dataAriaLabels;
            return this.cards ? g`
        <section class="glue-carousel glue-carousel--cards glue-carousel--has-navigation" aria-label="${this.ariaLabel}">
          <div class="glue-carousel__viewport">
            <ul class="glue-carousel__list">
              ${this.cards.map(b=>this.carouselRender(b))}
            </ul>
          </div>
          <div class="${1 < this.cards.length ? "gads-carousel__navigation--container" : "hidden"}">
            <button class="glue-carousel__button glue-carousel__button--prev" aria-label="${(null === a || void 0 === a ? void 0 : a.aria_go_previous_slide) || ""}">
              <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--32px" viewBox="0 0 24 24"><path d="M16.41 5.41L15 4l-8 8 8 8 1.41-1.41L9.83 12" /></svg>
            </button>
            <nav class="glue-carousel__navigation" aria-label="${(null === a || void 0 === a ? void 0 : a.aria_choose_page) || ""}" data-glue-carousel-navigation-label="${(null === a || void 0 === a ? void 0 : a.aria_go_slide) || ""} $glue_carousel_page_number$"></nav>
            <button class="glue-carousel__button glue-carousel__button--next" aria-label="${(null === a || void 0 === a ? void 0 : a.aria_go_next_slide) || ""}">
              <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--32px" viewBox="0 0 24 24"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12" /></svg>
            </button>
          </div>
        </section>
      ` : g``
        }
    }
    ;
    customElements.define("gads-carousel", lb);
    var mb = {
        CHATBOT: "gads-chatbot",
        CHATBOT_BUTTON: 'button[data-bm-widget-layout="floating"]'
    }
      , nb = class extends L {
        constructor() {
            var a;
            super(...arguments);
            this.widget_text = this.cta_label = this.context_id = this.agent_id = null;
            this.chatbotEl = document.querySelector(mb.CHATBOT);
            this.chatbotButton = document.querySelector(mb.CHATBOT_BUTTON);
            this.chatbotParentEl = null === (a = this.chatbotEl) || void 0 === a ? void 0 : a.parentElement
        }
        connectedCallback() {
            var a;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.chatbotEl = this.querySelector(mb.CHATBOT),
            this.chatbotButton = document.querySelector(mb.CHATBOT_BUTTON),
            this.chatbotParentEl = null === (a = this.chatbotEl) || void 0 === a ? void 0 : a.parentElement);
            const b = c=>{
                this.chatbotButton && this.chatbotButton.classList.toggle(w.OPEN, c)
            }
            ;
            a = ()=>{
                this.chatbotParentEl && this.chatbotParentEl.classList.toggle(w.HIDDEN, Q.getBpName() === (r.SM || r.MD));
                Q.subscribe(c=>{
                    c = [r.SM, r.MD].includes(c);
                    this.chatbotParentEl && this.chatbotParentEl.classList.toggle(w.HIDDEN, c)
                }
                );
                window.addEventListener(x.BM_WIDGET_CLOSED, ()=>{
                    b(!1)
                }
                );
                window.addEventListener(x.BM_WIDGET_MAXIMIZED, ()=>{
                    b(!0)
                }
                );
                window.addEventListener(x.BM_WIDGET_MINIMIZED, ()=>{
                    b(!1)
                }
                )
            }
            ;
            new cb;
            window.navigator.userAgent.includes(l.JSDOM) || document.addEventListener(x.CHATBOT_LOADED, a)
        }
        get agentId() {
            return this.getAttribute(u.CHATBOT_AGENT_ID) || this.agent_id
        }
        get contextId() {
            return this.getAttribute(u.CHATBOT_CONTEXT_ID) || this.context_id
        }
        get ctaLabel() {
            return this.getAttribute(u.CTA_LABEL) || this.cta_label
        }
        render() {
            return g`
      ${this.agentId && this.contextId ? h`
        <button
            data-bm-widget-agent-id="${this.agentId}"
            class="hidden"
            data-bm-widget-context="${this.contextId}"
            data-bm-widget-layout="floating"
            data-g-cta-name="chatbot"
            data-g-module-name="gads-floating-chatbot"
            ${this.ctaLabel ? `aria-label="${this.ctaLabel}"` : null}>
        </button>
        <span class="chat-icon chat-icon--overlay">
          <gads-icon icon-id="CLOSE" class-names="glue-icon--social glue-icon--24px"></gads-icon>
        </span>
      ` : console.warn("Chatbot: No agent/context ID provided")}
    `
        }
    }
    ;
    customElements.define("gads-chatbot", nb);
    var ob, pb = ob || (ob = {});
    pb.KAKAOTALK = "kakaotalk";
    pb.LINE = "line";
    pb.WECHAT = "wechat";
    pb.ZALO = "zalo";
    var qb = class extends L {
        constructor() {
            super(...arguments);
            this.chat_widget_provider = null;
            this.tooltip_text = this.panel_subheadline = this.panel_headline = this.panel_image = this.panel_alt_text = this.mobile_url = this.fab_icon = this.cta_label = "";
            this._chatTooltipCloseButton = document.querySelector("button.chat-widget__tooltip-close-button");
            this._chatWidgetAnchor = document.querySelector('a[data-chat-widget-layout="floating"]');
            this._chatWidgetButton = document.querySelector('button[data-chat-widget-layout="floating"]');
            this._chatWidgetContainer = document.querySelector("div.chat-widget__container");
            this._chatWidgetPanel = document.querySelector("div.chat-widget__panel");
            this._chatWidgetTooltip = document.querySelector("div.chat-widget__tooltip");
            this._gadsStickyCta = document.querySelector("gads-sticky-cta");
            this._useLinkedButton = this._emptyPanelData = this._isMobile = !1
        }
        connectedCallback() {
            var a;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._chatTooltipCloseButton = document.querySelector("button.chat-widget__tooltip-close-button"),
            this._chatWidgetAnchor = document.querySelector('a[data-chat-widget-layout="floating"]'),
            this._chatWidgetButton = document.querySelector('button[data-chat-widget-layout="floating"]'),
            this._chatWidgetContainer = document.querySelector("div.chat-widget__container"),
            this._chatWidgetPanel = document.querySelector("div.chat-widget__panel"),
            this._chatWidgetTooltip = document.querySelector("div.chat-widget__tooltip"),
            this._gadsStickyCta = document.querySelector("gads-sticky-cta"));
            "true" === (null === (a = this._chatWidgetContainer) || void 0 === a ? void 0 : a.dataset.emptyPanel) && (this._emptyPanelData = !0);
            this._useLinkedButton = this._emptyPanelData || this._isMobile;
            if (!window.navigator.userAgent.includes(l.JSDOM)) {
                const b = ()=>{
                    this._chatWidgetButton && this._chatWidgetTooltip && this._chatWidgetPanel && (this._chatWidgetButton.classList.toggle(w.OPEN),
                    this._chatWidgetTooltip.classList.toggle(w.HIDDEN, !0),
                    this._chatWidgetPanel.classList.toggle(w.HIDDEN))
                }
                ;
                a = ()=>{
                    this._chatWidgetTooltip && this._chatWidgetPanel && this._chatWidgetTooltip.classList.toggle(w.HIDDEN, !0)
                }
                ;
                this._isMobile = Q.getBpName() === (r.SM || r.MD);
                this._useLinkedButton = this._emptyPanelData || this._isMobile;
                this._gadsStickyCta && this._chatWidgetContainer && this._chatWidgetContainer.classList.toggle("translate-up", this._isMobile);
                this._chatWidgetAnchor && this._chatWidgetButton && this._chatWidgetPanel && (this._chatWidgetAnchor.classList.toggle(w.HIDDEN, !this._useLinkedButton),
                this._chatWidgetButton.classList.toggle(w.HIDDEN, this._useLinkedButton),
                this._useLinkedButton && this._chatWidgetPanel.classList.toggle(w.HIDDEN, !0));
                !this._chatWidgetButton || this._useLinkedButton && this.mobileUrl || this._chatWidgetButton.addEventListener(x.CLICK, b);
                this._chatTooltipCloseButton && this._chatTooltipCloseButton.addEventListener(x.CLICK, a);
                Q.subscribe(c=>{
                    this._isMobile = c === (r.SM || r.MD);
                    this._useLinkedButton = this._emptyPanelData || this._isMobile;
                    this._gadsStickyCta && this._chatWidgetContainer && this._chatWidgetContainer.classList.toggle("translate-up", this._isMobile);
                    this._chatWidgetAnchor && this._chatWidgetButton && this._chatWidgetPanel && (this._chatWidgetAnchor.classList.toggle(w.HIDDEN, !this._useLinkedButton),
                    this._chatWidgetButton.classList.toggle(w.HIDDEN, this._useLinkedButton),
                    this._useLinkedButton && (this._chatWidgetButton.classList.toggle(w.OPEN, !1),
                    this._chatWidgetPanel.classList.toggle(w.HIDDEN, !0)));
                    this._chatWidgetButton && this.mobileUrl && this._chatWidgetButton.removeEventListener(x.CLICK, b);
                    this._chatWidgetButton && !this._useLinkedButton && this._chatWidgetButton.addEventListener(x.CLICK, b)
                }
                )
            }
        }
        get chatWidgetProvider() {
            return this.getAttribute("chat-widget-provider") || this.chat_widget_provider
        }
        get ctaLabel() {
            return this.getAttribute(u.CTA_LABEL) || this.cta_label
        }
        get fabIcon() {
            const a = this.getAttribute("fab-icon") || this.fab_icon;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get mobileUrl() {
            return this.getAttribute("mobile-url") || this.mobile_url
        }
        get panelHeadline() {
            return this.getAttribute("panel-headline") || this.panel_headline
        }
        get panelImage() {
            const a = this.getAttribute("panel-image") || this.panel_image;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get panelImageAltText() {
            return this.getAttribute("panel-alt-text") || this.panel_alt_text
        }
        get panelSubheadline() {
            return this.getAttribute("panel-subheadline") || this.panel_subheadline
        }
        get tooltipText() {
            return this.getAttribute("tooltip-text") || this.tooltip_text
        }
        get emptyPanelData() {
            var a;
            return !(this.panelHeadline && this.panelSubheadline && this.panelImageAltText && (null === (a = this.panelImage) || void 0 === a ? 0 : a.url))
        }
        render() {
            var a, b;
            return g`
      <div class="chat-widget__container" data-empty-panel="${this.emptyPanelData}">
        <button
            data-chat-widget-layout="floating"
            data-chat-widget-provider="${this.chatWidgetProvider}"
            data-g-cta-name="chat-widget-${this.chatWidgetProvider}"
            data-g-module-name="gads-chat-widget-third-party-${this.chatWidgetProvider}"
            aria-label="${this.ctaLabel}">
          <gads-image aria-hidden="true" image="${this.fabIcon.url}" widths="sm:${this.chatWidgetProvider === ob.ZALO ? 56 : 40}" image-class="chat-widget__logo"></gads-image>
          <gads-icon class-names="glue-icon--social glue-icon--24px" icon-id="CLOSE"></gads-icon>
        </button>
        ${this.mobileUrl ? h`<a
            href="${this.mobileUrl}"
            ${this.setExternalLink(this.mobileUrl)}
            data-chat-widget-layout="floating"
            data-chat-widget-provider="${this.chatWidgetProvider}"
            data-g-cta-name="chat-widget-${this.chatWidgetProvider}"
            data-g-module-name="gads-chat-widget-third-party-${this.chatWidgetProvider}"
            aria-label="${this.ctaLabel}">
          <img aria-hidden="true" class="chat-widget__logo" src="${null === (a = this.fabIcon) || void 0 === a ? void 0 : a.url}">
        </a>` : ""}
        <div class="chat-widget__tooltip">
          <span class="chat-widget__tooltip-text">${this.tooltipText}</span>
          <button class="chat-widget__tooltip-close-button">
            <gads-icon icon-id="CLOSE" class-names="glue-icon--social glue-icon--24px"></gads-icon>
          </button>
        </div>
        <div class="chat-widget__panel hidden">
          <gads-image image="${null === (b = this.panelImage) || void 0 === b ? void 0 : b.url}" widths="sm:96" alt-text="${this.panelImageAltText}"></gads-image>
          <div class="chat-widget__panel-text">
            <span class="chat-widget__panel-text chat-widget__panel-text--headline">
              ${this.panelHeadline}
            </span>
            <span class="chat-widget__panel-text chat-widget__panel-text--subheadline">
              ${this.panelSubheadline}
            </span>
          </div>
        </div>
      </div>
    `
        }
    }
    ;
    customElements.define("gads-chat-widget-third-party", qb);
    var rb = class extends L {
        constructor() {
            super(...arguments);
            this._imgMemo = []
        }
        get images() {
            if (this._imgMemo.length)
                return this._imgMemo;
            var a = K.htmlImage;
            if (a.length)
                return this._imgMemo = a,
                this.removeAttribute("images"),
                this._imgMemo;
            if (a = this.getAttribute(u.IMAGES))
                return this._imgMemo = this.decodeJsonString(a),
                this.removeAttribute("images"),
                this._imgMemo;
            throw Error("No images provided");
        }
        get widths() {
            return this.getAttribute(u.WIDTHS) || ""
        }
        setBreakpoints(a, b) {
            const c = ["xl", "lg", "md", "sm"];
            var d = a.breakpoint;
            a = c.indexOf(d) + 1;
            d = [d];
            for (let e = a; e < c.length && !b.find(f=>f.breakpoint === c[e]); e++)
                d.push(c[e]);
            return d.join(",")
        }
        setStyle(a) {
            const b = a.global_styling
              , c = a.rtl_global_styling;
            a = a.localized_styling;
            let d = new Map
              , e = "";
            return b ? (d = this.combineStyling(b, d),
            c && K.isRtl && (d = this.combineStyling(c, d)),
            a && (d = this.combineStyling(a, d)),
            d.forEach((f,k)=>{
                k && f && (e += `${k}:${f};`)
            }
            ),
            e.trim()) : ""
        }
        combineStyling(a, b) {
            a.replace(/\n/g, "").replace(/ {2}/g, "").split(";").forEach(c=>{
                const [d,e] = c.split(":");
                b.set(d, e)
            }
            );
            return b
        }
        render() {
            const a = this.images
              , b = 1 < a.length;
            return g`
      <section class="editable-image" is-rtl="${K.isRtl}" aria-label="${a[0].alt ? a[0].alt : a[0].aria_description}">
        ${a.map(c=>{
                var d, e;
                const f = K.isRtl ? null === (d = c.html_image.image_rtl) || void 0 === d ? void 0 : d.url : null === (e = c.html_image.image) || void 0 === e ? void 0 : e.url;
                if (!f)
                    return console.warn("HTML Image file is missing from KCS."),
                    h`<div class="error-message">HTML Image file is missing from KCS</div>`;
                d = c.html_image.has_transparency ? "has-transparency" : "";
                return h`
            <editable-image-inner role="img" class="image-wrapper ${b ? "image-wrapper--responsive" : ""}"
                ${b ? `breakpoint="${this.setBreakpoints(c, a)}"` : ""}>
              <gads-image image="${f}" widths="${this.widths}" ${d} alt-text="${c.alt ? c.alt : c.aria_description}" lazy></gads-image>
              <div class="editable-image--text-wrapper">
                ${c.html_image.content.map(k=>h`
                    <div class="editable-image--text ${k.id}"
                        style='${this.setStyle(k)}'>
                      <div>${k.text}</div>
                    </div>`)}
              </div>
            </editable-image-inner>
          `
            }
            )}
      </section>
    `
        }
    }
    ;
    customElements.define("gads-editable-image", rb);
    var sb = class extends L {
        constructor() {
            super(...arguments);
            this.staticImg = this.querySelector("img");
            this.textWrapper = this.querySelector(".editable-image--text-wrapper")
        }
        connectedCallback() {
            if (l.ANIMATION_FRAME in window) {
                this.staticImg || (this.staticImg = this.querySelector("img"));
                const a = ()=>{
                    var b;
                    if (null !== this.offsetParent) {
                        const c = (null === (b = this.parentElement) || void 0 === b ? void 0 : b.clientWidth) || 0;
                        this.textWrapper && (this.textWrapper.style.transform = `scale(${c / 600})`)
                    }
                    window.requestAnimationFrame(a)
                }
                ;
                window.requestAnimationFrame(a)
            }
        }
    }
    ;
    customElements.define("editable-image-inner", sb);
    var tb = class extends L {
        constructor() {
            super(...arguments);
            this.imageMap = null;
            this.rawData = []
        }
        connectedCallback() {
            this.firstElementChild || this.replaceChildren(this.render());
            document.addEventListener(x.DOM_CONTENT_LOADED, ()=>{
                this.removeAttribute(u.IMAGE);
                this.removeAttribute(u.IMAGES)
            }
            )
        }
        get altText() {
            var a = this.getAttribute("alt-text");
            if (a)
                return a;
            if (a = this.getAttribute(u.IMAGES))
                if (a = JSON.parse(decodeURI(a)),
                a.length)
                    return a.filter(b=>b.breakpoint === r.XL)[0].alt;
            return ""
        }
        get image() {
            return this.getAttribute(u.IMAGE) || ""
        }
        get images() {
            var a;
            if (this.imageMap)
                return this.imageMap;
            var b = this.getAttribute(u.IMAGES);
            if (b) {
                let c = [];
                try {
                    c = JSON.parse(decodeURI(b))
                } catch (d) {
                    c = JSON.parse(b)
                }
                b = new Map;
                for (const d of c) {
                    let e;
                    e = d.html_image && d.use_html_image && Object.prototype.hasOwnProperty.call(d.html_image, "content") ? d.html_image : d.url;
                    b.set(d.breakpoint, e);
                    b.set(d.url, null === (a = d.has_transparency) || void 0 === a ? void 0 : a.toString())
                }
                this.imageMap = b;
                this.rawData = c;
                return b
            }
            return null
        }
        get imageClass() {
            const a = this.getAttribute("image-class") || ""
              , b = this.hasAttribute("round-corners") ? "round-corners" : "";
            return `${a} ${b}`
        }
        get isSingleImage() {
            return this.hasAttribute(u.IMAGE)
        }
        get pictureClass() {
            return this.getAttribute("picture-class") || ""
        }
        get widths() {
            return this.getAttribute(u.WIDTHS) || ""
        }
        get widthsMap() {
            const a = new Map;
            if (this.widths) {
                const b = this.widths.split(",");
                for (const c of b) {
                    const [d,e] = c.split(":");
                    a.set(d.trim(), e.trim())
                }
            }
            return a
        }
        get isEagerLoading() {
            return this.hasAttribute("loading-eager")
        }
        get isHighPriority() {
            return this.hasAttribute("priority-high")
        }
        closestImage(a) {
            var b;
            const c = {
                lg: r.XL,
                md: r.LG,
                sm: r.MD
            }
              , d = null === (b = this.images) || void 0 === b ? void 0 : b.get(a);
            return d || a !== r.XL ? d || this.closestImage(c[a]) : ""
        }
        createMultiImageSrcset() {
            var a;
            if (!this.images)
                return [""];
            const b = [];
            this.widthsMap.forEach((d,e)=>{
                var f;
                const k = this.closestImage(e);
                if ("string" === typeof k) {
                    const m = "true" === (null === (f = this.images) || void 0 === f ? void 0 : f.get(k));
                    b.push(this.sourceMarkup(decodeURI(k), d, e, m))
                }
            }
            );
            const [c] = (null === (a = this.images) || void 0 === a ? void 0 : a.values()) || "";
            a = [...this.widthsMap.keys()].pop() || "xl";
            "string" === typeof c && b.push(this.imgMarkup(decodeURI(c), `${this.widthsMap.get(a)}`, this.altText, this.imageClass));
            return b
        }
        createSingleImageSrcset() {
            const a = []
              , b = this.hasAttribute(u.HAS_TRANSPARENCY);
            this.widthsMap.forEach((d,e)=>{
                a.push(this.sourceMarkup(decodeURI(this.image), d, e, b))
            }
            );
            const c = [...this.widthsMap.keys()].pop() || "xl";
            a.push(this.imgMarkup(decodeURI(this.image), `${this.widthsMap.get(c)}`, this.altText, this.imageClass));
            return a
        }
        htmlImage() {
            return g`
      <gads-editable-image
          images='${this.encodeJson(this.rawData)}'
          widths='${this.widths}'>
      </gads-editable-image>
    `
        }
        imgMarkup(a, b, c, d) {
            return h`
      <img src="${`${a}=w${b}-rw-v1`}"
        alt="${c}"
        ${d ? `class="${d}"` : ""}
        width="${b}"
        ${this.isEagerLoading ? "" : 'loading="lazy"'}
        ${this.isHighPriority ? 'fetchpriority="high"' : ""}>
    `
        }
        sourceMarkup(a, b, c, d) {
            return h`
      <source srcset="${`${a}=${d ? "s0" : `w${b}`}-rw-v1 ${d ? "" : `, ${a}=w${2 * Number(b)}-rw-v1 2x`}`}"
        width="${b}"
        media="${this.getMediaBreakpoint(c)}"
        type="image/webp">
    `
        }
        render() {
            var a, b;
            return (null === (b = null === (a = this.images) || void 0 === a ? void 0 : a.values().next().value) || void 0 === b ? 0 : b.content) ? this.htmlImage() : g`
        <picture class="${this.pictureClass}">
          ${this.isSingleImage ? this.createSingleImageSrcset() : this.createMultiImageSrcset()}
        </picture>
      `
        }
    }
    ;
    customElements.define("gads-image", tb);
    var ub = class extends L {
        constructor() {
            super(...arguments);
            this._androidEl = this.querySelector(".android-badge");
            this._appleEl = this.querySelector(".apple-badge")
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._androidEl = this.querySelector(".android-badge"),
            this._appleEl = this.querySelector(".apple-badge"));
            var a = (new Ea).getDeviceType();
            const b = (new Ea).osType();
            a = a === I.IPAD && b === va.MAC_SAFARI;
            b === va.ANDROID && this._appleEl && this._appleEl.classList.add(w.HIDDEN);
            (b === va.IOS || a) && this._androidEl && this._androidEl.classList.add(w.HIDDEN)
        }
        get imageCtaObject() {
            const a = this.getAttribute("image-cta");
            return a ? JSON.parse(decodeURI(a)) : a
        }
        render() {
            var a;
            return g`
      ${null === (a = this.imageCtaObject) || void 0 === a ? void 0 : a.map(b=>{
                var c = b.url;
                const d = c.includes("apple.com");
                c = c.includes("google.com");
                return h`
          <a href="${b.url}"
              aria-label="${b.label}"
              class="${d ? "apple-badge" : ""} ${c ? "android-badge" : ""}"
              data-g-cta-name="${b.gtm_cta_name}"
              data-g-module-name="${this.gtmModuleName.toLowerCase()}"
              ${this.setExternalLink(b.url)}>
            <gads-image
                image="${b.image.url}"
                widths="${d ? "sm:160" : "sm:178"}"
                ${(null === b || void 0 === b ? 0 : b.has_transparency) ? u.HAS_TRANSPARENCY : ""}
            ></gads-image>
          </a>
        `
            }
            )}
    `
        }
    }
    ;
    customElements.define("gads-image-cta", ub);
    var vb = (a,b=100)=>{
        let c = !0;
        return ()=>{
            c && (a(),
            c = !1,
            setTimeout(()=>c = !0, b))
        }
    }
    ;
    var wb = class extends L {
        constructor() {
            var a, b;
            super(...arguments);
            this._banner = this.querySelector(".incentives-banner");
            this._bannerMobile = this.querySelector(".incentives-banner__container--mobile");
            this._bannerCtasArr = this.querySelectorAll(".incentives-banner__container .glue-link");
            this._isSticky = null === (a = this._banner) || void 0 === a ? void 0 : a.dataset.sticky;
            this._isModal = null === (b = this._banner) || void 0 === b ? void 0 : b.dataset.modal;
            this._modalEl = this.querySelector(".incentives-banner-modal");
            this._modalCloseBtn = this.querySelector(".incentives-banner-modal .glue-modal__close-btn");
            this.activeBp = !0;
            this.background_color = "blue";
            this.copy = "";
            this.icon = null;
            this.is_sticky = !1;
            this.modal_aria_labels = null;
            this.modal_copy = this.modal_subheadline = this.modal_headline = this.mobile_copy = "";
            this.modal_cta = [];
            this.modal_terms_conditions_headline = "";
            this.modal_terms_conditions_items = [];
            this.opens_modal = !1
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get sticky() {
            return this.getAttribute("is-sticky") || this.is_sticky
        }
        get backgroundColor() {
            return this.getAttribute(u.BACKGROUND_COLOR) || this.background_color
        }
        get iconImage() {
            var a, b = this.getAttribute(u.ICON) || this.icon;
            if (!b)
                return null;
            b = "string" === typeof b ? JSON.parse(b) : b;
            return (null === (a = null === b || void 0 === b ? void 0 : b.image) || void 0 === a ? 0 : a.url) ? b : null
        }
        get copyText() {
            const a = this.getAttribute(u.COPY) || this.copy
              , b = this.getAttribute("mobile-copy") || this.mobile_copy;
            return {
                text: a,
                mobileText: b
            }
        }
        get opensModal() {
            return this.getAttribute("opens-modal") || this.opens_modal
        }
        get modalText() {
            const a = this.getAttribute("modal-headline") || this.modal_headline
              , b = this.getAttribute("modal-subheadline") || this.modal_subheadline
              , c = this.getAttribute("modal-copy") || this.modal_copy;
            var d = this.getAttribute("modal-cta") || this.modal_cta;
            d = (d = "string" === typeof d ? JSON.parse(d) : d) && d.map(m=>h`<gads-button ${this.unpackCta(m)}></gads-button>`);
            var e = this.getAttribute(u.MODAL_ARIA_LABELS) || this.modal_aria_labels;
            e = (e = "string" === typeof e ? JSON.parse(e) : e) ? e.aria_close_modal : "";
            const f = this.getAttribute("modal-subheadline") || this.modal_terms_conditions_headline;
            var k = this.getAttribute("modal-tc-items") || this.modal_terms_conditions_items;
            k = "string" === typeof k ? JSON.parse(k) : k;
            return {
                aria_close_modal: e,
                copy: c,
                cta: d,
                headline: a,
                subheadline: b,
                tcHeadline: f,
                tcItems: k
            }
        }
        connectedCallback() {
            var a, b;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._banner = this.querySelector(".incentives-banner"),
            this._bannerMobile = this.querySelector(".incentives-banner__container--mobile"),
            this._bannerCtasArr = this.querySelectorAll(".incentives-banner__container .glue-link"),
            this._isSticky = null === (a = this._banner) || void 0 === a ? void 0 : a.dataset.sticky,
            this._modalEl = this.querySelector(".incentives-banner-modal"),
            this._isModal = null === (b = this._banner) || void 0 === b ? void 0 : b.dataset.modal,
            this._modalCloseBtn = this.querySelector(".incentives-banner-modal .glue-modal__close-btn"));
            const c = ea((()=>{
                200 < window.scrollY && this._bannerMobile.classList.add("incentives-banner--active")
            }
            ).bind(this), G.TWO_HUNDRED);
            a = vb(()=>{
                const d = 200 < window.scrollY;
                "false" === this._isSticky && d && this._bannerMobile.classList.remove("incentives-banner--active");
                d ? c() : this._bannerMobile.classList.remove("incentives-banner--active")
            }
            , G.ONE_HUNDRED);
            window.addEventListener(x.SCROLL, a);
            a = ()=>{
                l.GLUE in window && this._modalEl && this._bannerCtasArr && [...this._bannerCtasArr].forEach(d=>{
                    const e = new glue.Modal(this._modalEl,d,this._modalCloseBtn);
                    d.addEventListener(x.CLICK, ()=>e.open())
                }
                )
            }
            ;
            "true" === this._isModal && a()
        }
        renderIconImage() {
            try {
                const a = this.iconImage;
                return a && h`
        <gads-image
            aria-hidden="true"
            class="banner-icon"
            image="${a.image.url || ""}"
            widths="lg:32,md:38,sm:48"
            ${a.has_transparency ? "has-transparency" : ""}
        ></gads-image>
      ` || ""
            } catch (a) {
                return ""
            }
        }
        render() {
            const a = this.modalText;
            return g`
      <section class="glue-page incentives-banner" data-modal="${this.opensModal}" data-sticky="${this.sticky}">
        <div class="incentives-banner__container incentives-banner__container--mobile incentives-banner__container--${this.backgroundColor}">
          ${this.renderIconImage()}
          <p class="glue-font-weight-medium glue-text-center">
            ${this.copyText.mobileText} ${this.ctaBlock[0]}
          </p>
        </div>
        <div class="incentives-banner__container incentives-banner__container--desktop incentives-banner__container--${this.backgroundColor}">
          ${this.renderIconImage()}
          <p class="glue-font-weight-medium glue-text-center">
            ${this.copyText.text} ${this.ctaBlock[1]}
          </p>
        </div>
      </section>

      <div class="incentives-banner-modal glue-modal glue-modal--dark" role="dialog"
          aria-modal="true" aria-labelledby="incentives-banner-modal__label"
          aria-describedby="incentives-banner-modal__content">
        <div class="glue-page">
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-1 glue-grid__col--span-0-md"></div>
            <div class="incentives-banner-modal__container glue-grid__col glue-grid__col--span-10 glue-grid__col--span-12-md">
              <button class="glue-modal__close-btn" aria-label="${a.aria_close_modal}"></button>
              <div class="glue-grid glue-spacer-5-top glue-spacer-5-bottom">
                <div class="glue-grid__col glue-grid__col--span-1"></div>
                <div class="glue-grid__col glue-grid__col--span-8 glue-grid__col--span-10-md">
                  <p class="glue-eyebrow glue-text-center">${a.headline}</h3>
                  <h4 id="incentives-banner-modal__label" class="glue-headline glue-headline--headline-3 glue-text-center">
                    <span class="glue-font-weight-medium">${a.subheadline}</span>
                  </h4>
                  <div id="incentives-banner-modal__content">
                    <p class="glue-text-center">${a.copy}</p>
                    <div class="glue-text-center">
                      ${a.cta}
                    </div>
                    <div class="incentives-banner-modal__terms--container glue-spacer-5-top">
                      <h5 class="incentives-banner-modal__terms--headline glue-headline glue-headline--headline-5">
                        <span class="glue-font-weight-medium">${a.tcHeadline}</span>
                      </h5>
                      <ol>
                        ${a.tcItems && [...a.tcItems].map(b=>b ? h`<li>${b}</li>` : "")}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
        }
    }
    ;
    customElements.define("gads-incentives-banner", wb);
    var xb = class extends L {
        constructor() {
            super(...arguments);
            this.carousel_aria_labels = this.cards = "";
            this.nextBtn = this.querySelector(".next");
            this.prevBtn = this.querySelector(".previous");
            this.cardList = this.querySelectorAll(".gads-carousel-card");
            this.snapport = this.querySelector(".carousel-snapport");
            this.dotsContainer = this.querySelector(".pagination-dots");
            this.cardRects = [];
            this.cardsPerPage = 0
        }
        static get observedAttributes() {
            return ["current-card"]
        }
        attributeChangedCallback(a, b, c) {
            b && (this.moveCarousel(Number(c)),
            a = this.dotsContainer ? this.dotsContainer.children : null) && (a[Number(b) || 0].classList.remove("glue-is-active"),
            a[Number(c)].classList.add("glue-is-active"))
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.nextBtn = this.querySelector(".next"),
            this.prevBtn = this.querySelector(".previous"),
            this.cardList = this.querySelectorAll(".gads-carousel-card"),
            this.snapport = this.querySelector(".carousel-snapport"),
            this.dotsContainer = this.querySelector(".pagination-dots"));
            this.nextBtn.addEventListener(x.CLICK, ()=>{
                this.currentCard++
            }
            );
            this.prevBtn.addEventListener(x.CLICK, ()=>{
                this.currentCard--
            }
            );
            if (l.INTERSECTION_OBS in window) {
                const b = new IntersectionObserver(d=>{
                    for (const e of d)
                        e.target.isEqualNode(this.cardList[0]) && (e.isIntersecting ? this.prevBtn.setAttribute(u.DISABLED, "true") : this.prevBtn.removeAttribute(u.DISABLED)),
                        e.target.isEqualNode(this.cardList[this.cardList.length - 1]) && (e.isIntersecting ? this.nextBtn.setAttribute(u.DISABLED, "true") : this.nextBtn.removeAttribute(u.DISABLED))
                }
                ,{
                    root: this.snapport,
                    threshold: 1
                })
                  , c = this.snapport.clientWidth;
                for (const d of this.cardList) {
                    b.observe(d);
                    const e = d.getBoundingClientRect();
                    this.calcCardCount(d, e, c)
                }
            }
            this.dotsBuilder();
            const a = ea(()=>{
                this.cardsPerPage = this.currentCard = 0;
                this.cardRects = [];
                const b = this.snapport.clientWidth;
                for (const c of this.cardList) {
                    const d = c.getBoundingClientRect();
                    this.calcCardCount(c, d, b)
                }
                this.dotsBuilder()
            }
            , 500);
            window.addEventListener(x.RESIZE, ()=>{
                a()
            }
            );
            this.setAttribute("current-card", "0")
        }
        get gtmModuleName() {
            return this.getAttribute(u.GTM_MODULE_NAME) || this.nodeName
        }
        get cardsObject() {
            const a = this.getAttribute(u.CARDS) || "";
            try {
                return JSON.parse(decodeURI(a))
            } catch (b) {
                return "string" === typeof a ? JSON.parse(a) : a
            }
        }
        get currentCard() {
            return Number(this.getAttribute("current-card"))
        }
        set currentCard(a) {
            this.setAttribute("current-card", Math.max(Math.min(a, this.cardList.length - 1), 0).toString())
        }
        get dataAriaLabels() {
            const a = this.getAttribute(u.CAROUSEL_ARIA_LABELS) || "";
            let b = void 0;
            if (a)
                try {
                    b = JSON.parse(decodeURI(a))
                } catch (c) {
                    b = JSON.parse(a)
                }
            return b
        }
        get carouselIndex() {
            return this.getAttribute(u.INDEX) || "0"
        }
        calcCardCount(a, b, c) {
            this.cardRects.push(b);
            a.offsetLeft + b.width < c && this.cardsPerPage++
        }
        cardBuilder(a) {
            const b = [];
            for (const [c,d] of Object.entries(a))
                d && "_" !== c.charAt(0) && (c === u.CTA ? b.push(`cta='${JSON.stringify(d)}'`) : c === u.IMAGE ? b.push(`image="${encodeURI(JSON.stringify(a.image))}"`) : b.push(`${c.replace("_", "-")}=${JSON.stringify(d)}`));
            return h`
      <li class="gads-carousel-card">
        <gads-card
            card-type="${this.cardType(a._collectionId)}"
            module-name="${this.gtmModuleName}"
            index="${this.carouselIndex}${a._documentId}"
            ${b.join(" ")}
        ></gads-card>
      </li>
    `
        }
        cardType(a) {
            return a.replace(/([A-Z])/, b=>b.toLowerCase())
        }
        dotsBuilder() {
            var a;
            this.dotsContainer.replaceWith(null === (a = this.dotsContainer) || void 0 === a ? void 0 : a.cloneNode(!1));
            if (a = this.cardList.length - this.cardsPerPage) {
                this.classList.remove("carousel-disabled");
                this.firstElementChild && this.firstElementChild.classList.remove("glue-page");
                this.dotsContainer = this.querySelector(".pagination-dots");
                const b = [];
                for (let c = 0; c <= a; c++) {
                    const d = h`
          <button
              class="pagination-dot glue-carousel__dot${c ? "" : " glue-is-active"}"
              data-jump-to="${c}"
              aria-hidden="true"
              tabindex="-1"
          ><span class="glue-visually-hidden">Go to slide ${c}</span></button>
        `;
                    b.push(d)
                }
                this.dotsContainer.insertAdjacentHTML(qa.AFTER_BEGIN, b.join(""));
                this.dotsListener()
            } else
                this.classList.add("carousel-disabled"),
                this.firstElementChild && this.firstElementChild.classList.add("glue-page")
        }
        dotsListener() {
            const a = this.dotsContainer ? this.dotsContainer.children : null;
            if (a)
                for (const b of a)
                    b.addEventListener(x.CLICK, ({target: c})=>{
                        this.currentCard = Number(c.dataset.jumpTo)
                    }
                    )
        }
        moveCarousel(a) {
            this.snapport && this.snapport.scroll({
                left: this.cardList[a].offsetLeft - this.cardRects[0].x,
                behavior: E.SMOOTH
            })
        }
        render() {
            var a, b;
            return g`
      <section class="custom-carousel">
        <ul class="carousel-snapport">
          ${this.cardsObject.map(c=>this.cardBuilder(c))}
        </ul>
        <div class="carousel-buttons" aria-hidden="true">
          <button class="previous glue-carousel__button glue-carousel__button--prev" aria-label="${(null === (a = this.dataAriaLabels) || void 0 === a ? void 0 : a.aria_previous_slide) || ""}" tabindex="-1">
            <svg class="glue-icon glue-icon--32px" viewBox="0 0 24 24"><path d="M16.41 5.41L15 4l-8 8 8 8 1.41-1.41L9.83 12"></path></svg>
          </button>
          <button class="next glue-carousel__button glue-carousel__button--next" aria-label="${(null === (b = this.dataAriaLabels) || void 0 === b ? void 0 : b.aria_next_slide) || ""}" tabindex="-1">
            <svg class="glue-icon glue-icon--32px" viewBox="0 0 24 24"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>
          </button>
        </div>
        <div class="pagination-dots glue-carousel__navigation"></div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-custom-carousel", xb);
    var yb = class extends L {
        get labelText() {
            return this.getAttribute("label") || ""
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || ""
        }
        get ctaUrl() {
            return this.getAttribute(u.CTA_URL) || ""
        }
        get gtmModuleName() {
            return this.getAttribute(u.GTM_MODULE_NAME) || ""
        }
        get gtmCtaName() {
            return this.getAttribute(u.GTM_CTA_NAME) || ""
        }
        get buttonAriaLabel() {
            return this.getAttribute(u.CTA_ARIA_DESCRIPTION) || ""
        }
        render() {
            return g`
      <div class="jumplink-basic-card__wrapper">
        <div class="jumplink-basic-card__content">
          <span class="jumplink-basic-card__label glue-label">
            ${this.labelText}
          </span>
          <span class="glue-headline glue-headline--headline-5">
            ${this.headlineText}
          </span>
        </div>

        <gads-button
            class="card-cta"
            cta-name="${this.gtmCtaName}"
            cta-url="${this.ctaUrl}"
            emphasis="low"
            icon-type="glue-icon"
            icon-id="OPEN_NEW"
            label="${this.buttonAriaLabel}"
            module-name="${this.gtmModuleName}">
        </gads-button>
      </div>
    `
        }
    }
    ;
    customElements.define("gads-jumplink-basic-card", yb);
    var zb = class extends L {
        get time() {
            return this.getAttribute("time") || ""
        }
        get timeAriaLabel() {
            return this.getAttribute("time-aria-label") || ""
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || ""
        }
        get ctaUrl() {
            return this.getAttribute(u.CTA_URL) || ""
        }
        get gtmCtaName() {
            return this.getAttribute(u.GTM_CTA_NAME) || ""
        }
        get gtmModuleName() {
            return this.getAttribute(u.GTM_MODULE_NAME) || ""
        }
        get buttonAriaLabel() {
            return this.getAttribute(u.CTA_ARIA_DESCRIPTION) || ""
        }
        render() {
            return g`
      <div class="jumplink-list-card__wrapper">
        <div>
          <gads-time-pill class="jumplink-list-card__card--desktop" time="${this.time}" ${this.timeAriaLabel ? `time-aria-label="${this.timeAriaLabel}"` : ""}></gads-time-pill>
          <span class="jumplink-list-card__title">${this.headlineText}</span>
          <gads-time-pill class="jumplink-list-card__card--mobile" time="${this.time}" ${this.timeAriaLabel ? `time-aria-label="${this.timeAriaLabel}"` : ""}></gads-time-pill>
        </div>

        <gads-button
            class="jumplink-list-card__cta"
            cta-name="${this.gtmCtaName}"
            cta-url="${this.ctaUrl}"
            emphasis="low"
            icon-type="glue-icon"
            icon-id="OPEN_NEW"
            label="${this.buttonAriaLabel}"
            module-name="${this.gtmModuleName}">
        </gads-button>
      </div>
    `
        }
    }
    ;
    customElements.define("gads-jumplink-list-card", zb);
    var Ab = class extends L {
        constructor() {
            super(...arguments);
            this.cta_label = "";
            this.video_thumbnail = null;
            this.video_thumbnail_aria_description = ""
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || ""
        }
        get ctaUrl() {
            return this.getAttribute(u.CTA_URL) || this.url
        }
        get ctaLabel() {
            return this.getAttribute(u.CTA_LABEL) || this.cta_label
        }
        get gtmCtaName() {
            return this.getAttribute(u.GTM_CTA_NAME) || ""
        }
        get gtmModuleName() {
            return this.getAttribute(u.GTM_MODULE_NAME) || ""
        }
        get imageObj() {
            const a = this.getAttribute("video-thumbnail") || this.video_thumbnail;
            if ("string" === typeof a)
                try {
                    return JSON.parse(decodeURI(a))
                } catch (b) {
                    throw Error("Error processing the image object in Video Card");
                }
            return a || null
        }
        get videoThumbnailAria() {
            return this.getAttribute("video-thumbnail-aria") || ""
        }
        get buttonAriaLabel() {
            return this.getAttribute(u.CTA_ARIA_DESCRIPTION) || ""
        }
        render() {
            var a;
            return g`
      <div class="jumplink-video-card__wrapper">
        <a class="jumplink-video-card__thumbnail"
            href="${this.ctaUrl}" target="_blank" rel="noopener noreferrer"
            aria-label="${this.videoThumbnailAria}"
            data-g-module-name="${this.gtmModuleName}"
            data-g-cta-name="${this.gtmCtaName}">
          <gads-image
              alt-text="${this.headlineText} - ${this.ctaLabel}"
              image="${null === (a = this.imageObj) || void 0 === a ? void 0 : a.url}"
              tabindex="-1"
              widths="xl:340,lg:276,md:218,sm:380">
          </gads-image>
          <div class="glue-video__info">
            <gads-icon icon-id="VIDEO_YOUTUBE_BLACK" class-names="glue-video__play-button"></gads-icon>
          </div>
        </a>

        <div class="jumplink-video-card__content">
          <span class="glue-headline glue-headline--headline-5 glue-text-center" aria-hidden="true">
            ${this.headlineText}
          </span>
          <gads-button
              class="jumplink-video-card__cta"
              cta-hidden
              cta-name="${this.gtmCtaName}"
              cta-text="${this.ctaLabel}"
              cta-url="${this.ctaUrl}"
              emphasis="low"
              icon-id="OPEN_NEW"
              icon-type="glue-icon-right"
              label="${this.buttonAriaLabel}"
              module-name="${this.gtmModuleName}">
          </gads-button>
        </div>
      </div>
    `
        }
    }
    ;
    customElements.define("gads-jumplink-video-card", Ab);
    var Bb;
    (Bb || (Bb = {})).PAUSE = "pause";
    var Cb = class extends L {
        constructor() {
            super(...arguments);
            this.vidEl = null
        }
        static get observedAttributes() {
            return [Bb.PAUSE]
        }
        connectedCallback() {
            this.firstElementChild || this.replaceChildren(this.render());
            this.vidEl = this.querySelector("video");
            this.reduceMotion(J.isReducedMotion);
            J.subscribe(a=>{
                this.reduceMotion(a)
            }
            );
            this.observePlay && l.INTERSECTION_OBS in window && (new IntersectionObserver(this.componentInViewport.bind(this),{
                root: null
            })).observe(this)
        }
        componentInViewport(a) {
            this.reduceMotion(J.isReducedMotion);
            for (const b of a)
                this.vidEl && (b.isIntersecting ? this.vidEl.play() : (this.vidEl.pause(),
                this.vidEl.currentTime = 0))
        }
        get adContent() {
            const a = this.getAttribute("icon") || ""
              , b = this.getAttribute("ad-title") || ""
              , c = this.getAttribute("ad-url") || "";
            return h`
      <div class="overlay-content">
        <gads-image image="${a}" widths="sm:${({
                full: "40",
                small: "30"
            })[this.overlayType]}" role="presentation"></gads-image>
        <span class="copy-wrapper">
          <div class="title">${b}</div>
          <div class="url">${c}</div>
        </span>
      </div>
    `
        }
        get label() {
            return this.getAttribute("label") || ""
        }
        get autoplay() {
            return this.hasAttribute("autoplay")
        }
        get boxShadow() {
            var a;
            return this.hasAttribute("box-shadow") && "false" !== (null === (a = this.getAttribute("box-shadow")) || void 0 === a ? void 0 : a.toLowerCase())
        }
        get loop() {
            var a;
            return this.hasAttribute("loop") && "false" !== (null === (a = this.getAttribute("loop")) || void 0 === a ? void 0 : a.toLowerCase())
        }
        get overlayType() {
            return this.getAttribute("overlay-type") || "none"
        }
        set pause(a) {
            this.setAttribute(Bb.PAUSE, a.toString())
        }
        get observePlay() {
            return this.hasAttribute("observe-play")
        }
        get timerText() {
            return this.getAttribute("full-overlay-timer") || ""
        }
        get videoMp4() {
            return this.getAttribute("video-mp4") || ""
        }
        get videoWebm() {
            return this.getAttribute("video-webm") || ""
        }
        get reducedMotionPoster() {
            return Number(this.getAttribute("poster-time")) || 0
        }
        reduceMotion(a) {
            this.pause = a;
            this.vidEl && (this.vidEl.currentTime = a ? this.reducedMotionPoster : 0)
        }
        get width() {
            return this.getAttribute("width") || "360px"
        }
        get theme() {
            return this.getAttribute(u.THEME) || "light"
        }
        get fullOverlayExtraContent() {
            return {
                ctaText: this.getAttribute("full-button-text") || "",
                skipAd: this.getAttribute("full-skip") || ""
            }
        }
        attributeChangedCallback(a, b, c) {
            a === Bb.PAUSE && this.vidEl && ("true" === c ? this.vidEl.pause() : "false" !== c || this.observePlay || this.vidEl.play())
        }
        overlay(a) {
            return {
                small: h`
        <div class="overlay-container progress-bar" aria-hidden="true">
          ${this.adContent}
        </div>
      `,
                full: h`
        <div class="overlay-container progress-bar full-overlay-container" aria-hidden="true">
          <div class="full-extra-content">
            <div class="skip">
              <p>${this.fullOverlayExtraContent.skipAd}</p>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="#f1f3f4"><path d="M13.917 15.792V4.229H16.208V15.792ZM3.792 15.792V4.229L12.542 10Z"/></svg>
            </div>
            <div class="timer ${this.theme}">
              ${this.timerText}
            </div>
          </div>
          ${this.adContent}
          <button aria-hidden="true" tabindex="-1" class="glue-button glue-button--high-emphasis">${this.fullOverlayExtraContent.ctaText}</button>
        </div>
      `
            }[a] || ""
        }
        render() {
            return this.videoMp4 || this.videoWebm ? g`
        <section class="video-wrapper ${"full" === this.overlayType ? "full-overlay" : ""} ${this.boxShadow ? "video-wrapper--shadow" : ""} "
            ${this.label ? `aria-label="${this.label}"` : ""}
            style="width: ${this.width}">
          <video
              ${this.autoplay ? "autoplay" : ""}
              ${this.loop ? "loop" : ""}
              muted
              playsinline
              preload="auto"
              width=${this.width}
              aria-hidden="true">
            ${this.videoWebm ? h`<source src="${this.videoWebm}" type="video/webm">` : ""}
            ${this.videoMp4 ? h`<source src="${this.videoMp4}" type="video/mp4">` : ""}
          </video>
          ${this.overlay(this.overlayType)}
        </section>
      ` : g``
        }
    }
    ;
    customElements.define("gads-presentational-video", Cb);
    var Db = class {
        async apiRequest() {
            let a = null;
            try {
                window.fetch && await window.fetch("https://accounts.google.com/ListAccounts?authuser=0&source=ads.google.site", {
                    method: "POST",
                    credentials: "include"
                }).then(b=>b.json()).then(b=>{
                    a = b[1]
                }
                )
            } catch (b) {}
            return a
        }
        displayProfileAvatar() {
            const a = setInterval(()=>{
                const b = document.querySelectorAll(".gads-profile-avatar")
                  , c = document.querySelectorAll(".gads-sign-in-button");
                b && c && (b.forEach(d=>{
                    d.classList.remove("gads-profile-avatar--hidden")
                }
                ),
                c.forEach(d=>{
                    d.classList.add("gads-sign-in-button--hidden")
                }
                ));
                clearInterval(a)
            }
            , G.ONE_HUNDRED)
        }
        addUserToNavButton(a, b) {
            a = a.match(RegExp('cta-url="(?:https://)?([^"]+)"'));
            document.querySelectorAll(`a[href*='${a ? a[1] : null}']`).forEach(c=>{
                this.addUserToHref(c, b)
            }
            )
        }
        addUserToHref(a, b) {
            if (a.href.includes("authuser=")) {
                const c = a.href.indexOf("authuser=");
                a.href.replace("authuser=", "");
                a.href = a.href.slice(0, c);
                a.href += b
            } else
                a.href += a.href.includes("?") ? `&${b}` : `?${b}`
        }
        addCurrentUserToUrl(a=0, b=[]) {
            const c = `${"authuser="}${a}`;
            b.forEach(d=>{
                d && this.addUserToNavButton(d, c)
            }
            );
            a = document.querySelectorAll("a[href*='//policies.google.com/privacy']");
            b = document.querySelectorAll("a[href*='//myaccount.google.com/termsofservice']");
            a.forEach(d=>{
                this.addUserToHref(d, c)
            }
            );
            b.forEach(d=>{
                this.addUserToHref(d, c)
            }
            )
        }
        addContinueToUrl() {
            const a = `${"continue="}${window.location.href}`
              , b = document.querySelectorAll("a[href*='//accounts.google.com/Logout']")
              , c = document.querySelectorAll("a[href*='//myaccount.google.com/']")
              , d = document.querySelectorAll("a[href*='//accounts.google.com/AddSession']");
            b.forEach(e=>{
                e.href.includes(a) || (e.href += e.href.includes("?") ? `&${a}` : `?${a}`)
            }
            );
            c.forEach(e=>{
                e.href.includes(a) || e.href.includes("//myaccount.google.com/termsofservice") || (e.href += e.href.includes("?") ? `&${a}` : `?${a}`)
            }
            );
            d.forEach(e=>{
                e.href.includes(a) || (e.href += e.href.includes("?") ? `&${a}` : `?${a}`)
            }
            )
        }
        getSessionIndex() {
            var a = (new URLSearchParams(window.location.search)).get(za.AUTHUSER);
            const b = Number(a);
            if (a && !isNaN(b))
                return this.setSessionIndex(b),
                b;
            a = fa("ADS_CUSTOMER_ACCOUNT_SESSION_INFO");
            return (a = null === a || void 0 === a ? void 0 : a.match(RegExp("authuser-([0-9]+)"))) && Number(a[1]) || 0
        }
        setSessionIndex(a, b=!1) {
            try {
                const c = fa("ADS_CUSTOMER_ACCOUNT_SESSION_INFO")
                  , d = null === c || void 0 === c ? void 0 : c.match(RegExp("authuser-([0-9]+)"))
                  , e = `.${window.location.host}`;
                let f = `authuser-${a}`;
                c && d && (f = c.replace(d[0], f));
                document.cookie = `${"ADS_CUSTOMER_ACCOUNT_SESSION_INFO"}=${f}; ${e ? `domain=${e}; ` : ""}path=/; secure;`
            } catch (c) {}
            this.updateAuthUserQueryParam(a);
            b && window.location.reload()
        }
        updateAuthUserQueryParam(a) {
            const b = new URLSearchParams(window.location.search);
            b.get(za.AUTHUSER) && (b.set(za.AUTHUSER, String(a)),
            window.history.replaceState(null, "", `?${b.toString()}`))
        }
        initBFCache() {
            const a = document.querySelectorAll(".gads-profile-avatar")
              , b = document.querySelectorAll(".gads-sign-in-card");
            a && b && (null === a || void 0 === a ? void 0 : a.forEach(c=>{
                c.classList.add("gads-profile-avatar--hidden")
            }
            ),
            null === b || void 0 === b ? void 0 : b.forEach(c=>{
                c.classList.add("gads-sign-in-card--hidden")
            }
            ))
        }
    }
      , R = new Db;
    var S, Eb = S || (S = {});
    Eb.CTA_SIGN_IN = "cta-sign-in";
    Eb.CTA_START_NOW = "cta-start-now";
    Eb.NAV_CTA = "nav-cta";
    Eb.PROFILE_ALT_TEXT = "profile-alt-text";
    Eb.TYPE = "type";
    Eb.MOCK_API = "mock-api-data";
    Eb.TYPE_DEFAULT = "desktop";
    Eb.LOGGED_IN_URL = "logged-in-url";
    Eb.PROFILE_CTA_NAME = "profile-cta-name";
    Eb.PROFILE_IMAGE_PLACEHOLDER = "profile-image-placeholder";
    var V, W = V || (V = {});
    W.PROFILE_AVATAR = "gads-profile-avatar";
    W.SSO_CARD = "gads-sign-in-card";
    W.SSO_CARD_HIDDEN = "gads-sign-in-card--hidden";
    W.PROFILE_PREFIX = "gads-sign-in-card--profile-";
    W.SECONDARY_ACCOUNTS_LIST = "gads-secondary-accounts-list";
    W.SECONDARY_ACCOUNTS_ITEM = "gads-sign-in-card__account-item";
    W.SECONDARY_ACCOUNT_IMAGE = "gads-sign-in-card__secondary-profile";
    W.SECONDARY_ACCOUNT_NAME = "gads-sign-in-card__secondary-name";
    W.SECONDARY_ACCOUNT_EMAIL = "gads-sign-in-card__secondary-email";
    W.SECONDARY_ACCOUNT_INFO = "gads-sign-in-card__account-info";
    W.SIGN_IN_CARD_ACCOUNT_ADD_PARENT = "gads-sign-in-card__account-item--add";
    W.PRIMARY_ACCOUNT_PROFILE = "gads-main-profile";
    W.PRIMARY_ACCOUNT_AVATAR = "gads-profile-avatar";
    W.PRIMARY_ACCOUNT_AVATAR_IMAGE = "gads-profile-avatar__image";
    W.PRIMARY_ACCOUNT_IMAGE = "gads-sign-in-card__main-image";
    W.PRIMARY_ACCOUNT_NAME = "gads-sign-in-card__name";
    W.PRIMARY_ACCOUNT_EMAIL = "gads-sign-in-card__email";
    var Fb = class extends L {
        constructor() {
            super(...arguments);
            this.api_response = null;
            this.isOpened = !1;
            this.logged_in_url = "";
            this.nav_cta = [];
            this.profileEmail = this.profile_cta_name = this.profile_alt_text = "";
            this.profileImageUrl = this.profileImageBuildPlaceholder || "";
            this.profileName = this.profileIndex = "";
            this.secondaryProfilesArray = [];
            this.type = S.TYPE_DEFAULT;
            this.profileAvatar = ()=>h`
      <div class="gads-profile-avatar__container">
        <button class="gads-profile-avatar gads-profile-avatar--hidden gads-profile-avatar--${this.deviceType} glue-text-center" aria-expanded="false" data-g-module-name="${this.gtmModuleName}" data-g-cta-name="gads-sso-profile-avatar" ${this.deviceType === S.TYPE_DEFAULT ? 'aria-live="assertive"' : ""}>
          <gads-image
              widths="xl:40,lg:40,md:40,sm:40"
              image="${this.profileImageUrl}"
              image-class="gads-profile-avatar__image">
          </gads-image>
        </button>
      </div>
    `;
            this.secondaryAccount = (a="",b="",c="",d)=>{
                c = null === c || void 0 === c ? void 0 : c.replace("s48-c", "s160-c");
                return h`
      <button class="gads-sign-in-card__account-item gads-sign-in-card--profile-${d}" tabindex="0" data-position="${d}" aria-label="Change account to ${a} (${b})">
        <gads-image
            widths="xl:32,lg:32,md:32,sm:32"
            image="${c}"
            image-class="gads-sign-in-card__secondary-profile">
        </gads-image>
        <div class="gads-sign-in-card__account-info">
          <div class="gads-sign-in-card__secondary-name">
            ${a}
          </div>
          <div class="gads-sign-in-card__secondary-email">
            ${b}
          </div>
        </div>
      </button>
    `
            }
            ;
            this.card = ()=>h`
      <div class="gads-sign-in-card gads-sign-in-card--hidden glue-text-center">
        <div class="gads-main-profile" data-position="${this.profileIndex}">
          <gads-image
              widths="xl:80,lg:80,md:80,sm:80"
              image="${this.profileImageUrl}"
              alt-text="${this.profileAltText}"
              image-class="gads-sign-in-card__main-image">
          </gads-image>
          <div class="gads-sign-in-card__main-image sso__main-image--placeholder" style="display: none;"></div>
          <div class="gads-sign-in-card__name glue-body">
            ${this.profileName}
          </div>
          <div class="gads-sign-in-card__email glue-body">
            ${this.profileEmail}
          </div>
        </div>
        <div class="gads-sign-in-card__manage-btn">
          ${this.getCtaByGtmName(A.SSO_MANAGE_ACCOUNT)}
        </div>
        <div class="gads-sign-in-card__accounts">
          <div class="gads-secondary-accounts-list">
            ${this.getSecondaryProfiles}
          </div>
          <div class="gads-sign-in-card__account-item gads-sign-in-card__account-item--add">
            <svg class="gads-sign-in-card__add-profile-icon" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M10.8334 3.66683C10.8334 1.82516 9.34171 0.333496 7.50004 0.333496C5.65837 0.333496 4.16671 1.82516 4.16671 3.66683C4.16671 5.5085 5.65837 7.00016 7.50004 7.00016C9.34171 7.00016 10.8334 5.5085 10.8334 3.66683ZM9.16671 3.66683C9.16671 4.5835 8.41671 5.3335 7.50004 5.3335C6.58337 5.3335 5.83337 4.5835 5.83337 3.66683C5.83337 2.75016 6.58337 2.00016 7.50004 2.00016C8.41671 2.00016 9.16671 2.75016 9.16671 3.66683ZM0.833374 12.0002V13.6668H14.1667V12.0002C14.1667 9.7835 9.72504 8.66683 7.50004 8.66683C5.27504 8.66683 0.833374 9.7835 0.833374 12.0002ZM2.50004 12.0002C2.66671 11.4085 5.25004 10.3335 7.50004 10.3335C9.74171 10.3335 12.3167 11.4002 12.5 12.0002H2.50004ZM16.6667 9.50016V7.00016H19.1667V5.3335H16.6667V2.8335H15V5.3335H12.5V7.00016H15V9.50016H16.6667Z" fill="#3C4043"/>
            </svg>
            ${this.getCtaByGtmName(A.SSO_ADD_ACCOUNT)}
          </div>
        </div>
        <div class="gads-sign-in-card__signout">
          <div class="gads-sign-in-card__signout-btn">
            ${this.getCtaByGtmName(A.SSO_SIGN_OUT)}
          </div>
        </div>
        <div class="gads-sign-in-card__links glue-body">
          <div class="gads-sign-in-card__link-item">
            ${this.getCtaByGtmName(A.SSO_PRIVACY_POLICY)}
          </div>
          <div class="gads-sign-in-card__link-separator">
            &centerdot;
          </div>
          <div class="gads-sign-in-card__link-item">
            ${this.getCtaByGtmName(A.SSO_TERMS)}
          </div>
        </div>
      </div>
    `
        }
        connectedCallback() {
            R.apiRequest().then(a=>{
                this.api_response = a;
                this.handleApiRequest()
            }
            );
            this.firstElementChild || this.replaceChildren(this.render());
            this.bfCacheHandler()
        }
        get gtmModuleName() {
            var a;
            return (null === (a = this.getAttribute(u.GTM_MODULE_NAME)) || void 0 === a ? void 0 : a.toLowerCase()) || this.nodeName
        }
        get ctaStartNow() {
            return this.getAttribute(S.CTA_START_NOW) || null
        }
        get ctaSignIn() {
            return this.getAttribute(S.CTA_SIGN_IN) || null
        }
        get deviceType() {
            return this.getAttribute(S.TYPE) || this.type
        }
        get profileAltText() {
            return this.getAttribute(S.PROFILE_ALT_TEXT) || this.profile_alt_text
        }
        get profileCtaName() {
            return this.getAttribute(S.PROFILE_CTA_NAME) || this.profile_cta_name
        }
        get profileImageBuildPlaceholder() {
            return this.getAttribute(S.PROFILE_IMAGE_PLACEHOLDER)
        }
        get getLoggedInUrl() {
            return this.getAttribute(S.LOGGED_IN_URL) || this.logged_in_url
        }
        get getSecondaryProfiles() {
            return this.secondaryProfilesArray
        }
        set setSecondaryProfiles(a) {
            this.secondaryProfilesArray = a
        }
        handleApiRequest() {
            if (!this.api_response) {
                const a = this.getAttribute(S.MOCK_API);
                a && (this.api_response = JSON.parse(a))
            }
            if (this.api_response && 0 < this.api_response.length)
                try {
                    const a = this.getResponseValidatedSessionIndex();
                    this.getPrimaryAccount();
                    this.getSecondaryAccounts();
                    this.initClickOutside();
                    this.hideIfHeaderHidesOnScroll();
                    R.displayProfileAvatar();
                    R.addCurrentUserToUrl(a, [this.ctaStartNow, this.ctaSignIn]);
                    this.replaceChildren(this.render());
                    this.addClickToSecondaryAccounts(`.${V.SECONDARY_ACCOUNTS_ITEM}`);
                    this.addClickHandlerToAddAccountParent()
                } catch (a) {}
            else
                this.hideProfileAvatarContainer();
            R.addContinueToUrl()
        }
        hideProfileAvatarContainer() {
            document.querySelectorAll(".gads-profile-avatar__container").forEach(a=>a.classList.add(w.HIDDEN))
        }
        initClickOutside() {
            const a = setInterval(()=>{
                const b = document.querySelectorAll(`.${V.SSO_CARD}`)
                  , c = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_AVATAR}`);
                b && c && (window.addEventListener(x.CLICK, ({target: d})=>{
                    var e;
                    let f = !0;
                    if (null === (e = d.parentElement) || void 0 === e ? 0 : e.classList.contains(`${V.SECONDARY_ACCOUNT_INFO}`))
                        f = !1;
                    [...b, ...c].forEach(k=>{
                        if (k.contains(d) || d.classList.contains(`${V.PRIMARY_ACCOUNT_AVATAR}`) || d.classList.contains(`${V.PRIMARY_ACCOUNT_AVATAR_IMAGE}`))
                            f = !1
                    }
                    );
                    f && (b.forEach(k=>{
                        k && k.classList.add(V.SSO_CARD_HIDDEN)
                    }
                    ),
                    this.isOpened = !1)
                }
                ),
                clearInterval(a))
            }
            , G.ONE_HUNDRED)
        }
        handleSecondaryProfileClick(a) {
            var b, c;
            R.setSessionIndex(a, !0);
            const d = `${V.PROFILE_PREFIX}${a}`
              , e = document.querySelectorAll(`.${V.SECONDARY_ACCOUNTS_LIST}`)
              , f = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_PROFILE}`)
              , k = Number(f[0].dataset.position)
              , m = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_NAME}`)
              , n = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_EMAIL}`)
              , t = document.querySelectorAll(`img.${V.PRIMARY_ACCOUNT_IMAGE}`)
              , B = document.querySelectorAll(`img.${V.PRIMARY_ACCOUNT_AVATAR_IMAGE}`);
            e.forEach(y=>{
                const U = g`
        ${this.secondaryAccount(m[0].innerHTML, n[0].innerHTML, t[0].src, k)}
      `;
                y.appendChild(U)
            }
            );
            this.addClickToSecondaryAccounts(`.${V.PROFILE_PREFIX}${k}`);
            const q = document.querySelector(`.${d}`)
              , F = null === q || void 0 === q ? void 0 : q.querySelector(`.${V.SECONDARY_ACCOUNT_IMAGE}`)
              , D = null === F || void 0 === F ? void 0 : F.src
              , O = null === (b = null === q || void 0 === q ? void 0 : q.querySelector(`.${V.SECONDARY_ACCOUNT_NAME}`)) || void 0 === b ? void 0 : b.innerHTML
              , T = null === (c = null === q || void 0 === q ? void 0 : q.querySelector(`.${V.SECONDARY_ACCOUNT_EMAIL}`)) || void 0 === c ? void 0 : c.innerHTML;
            f.forEach(y=>{
                y.dataset.position = a.toString() || ""
            }
            );
            B.forEach(y=>{
                y.setAttribute("aria-label", `${this.profileAltText} ${null === O || void 0 === O ? void 0 : O.trim()} (${null === T || void 0 === T ? void 0 : T.trim()})`)
            }
            );
            B.forEach(y=>{
                y.src = D || ""
            }
            );
            t.forEach(y=>{
                y.src = D || ""
            }
            );
            m.forEach(y=>{
                y.innerHTML = O || ""
            }
            );
            n.forEach(y=>{
                y.innerHTML = T || ""
            }
            );
            e.forEach(y=>{
                const U = y.querySelector(`.${d}`);
                U && y.removeChild(U)
            }
            );
            R.addCurrentUserToUrl(a, [this.ctaStartNow, this.ctaSignIn])
        }
        getPrimaryAccount() {
            const a = this.getResponseValidatedSessionIndex();
            this.profileIndex = a;
            this.profileName = M.call(this.api_response[a][2], N, P);
            this.profileEmail = M.call(this.api_response[a][3], N, P);
            this.profileImageUrl = this.api_response[a][4].replace("s48-c", "s160-c");
            const b = setInterval(()=>{
                const c = document.querySelectorAll(`.${V.PROFILE_AVATAR}`)
                  , d = document.querySelectorAll(`.${V.SSO_CARD}`);
                c && (c.forEach(e=>{
                    var f, k;
                    e.children[0].setAttribute("aria-label", `${this.profileAltText} ${null === (f = this.profileName) || void 0 === f ? void 0 : f.trim()} (${null === (k = this.profileEmail) || void 0 === k ? void 0 : k.trim()})`);
                    e.addEventListener(x.CLICK, ()=>{
                        e.setAttribute("aria-expanded", `${!this.isOpened}`);
                        d.forEach(m=>{
                            m && m.classList.toggle(V.SSO_CARD_HIDDEN, this.isOpened)
                        }
                        );
                        this.isOpened = !this.isOpened
                    }
                    )
                }
                ),
                clearInterval(b))
            }
            , G.ONE_HUNDRED)
        }
        getSecondaryAccounts() {
            const a = this.getResponseValidatedSessionIndex()
              , b = [];
            this.api_response.map((c,d)=>{
                d != a && b.push(this.secondaryAccount(M.call(c[2], N, P), M.call(c[3], N, P), c[4], d))
            }
            );
            this.setSecondaryProfiles = b
        }
        addClickHandlerToAddAccountParent() {
            document.querySelectorAll(`.${V.SIGN_IN_CARD_ACCOUNT_ADD_PARENT}`).forEach(a=>{
                const b = a.querySelector('a[href*="accounts.google.com"]');
                b && a.addEventListener(x.CLICK, c=>{
                    c.target !== b && b.click()
                }
                )
            }
            )
        }
        addClickToSecondaryAccounts(a) {
            document.querySelectorAll(`.${V.SECONDARY_ACCOUNTS_LIST}`).forEach(b=>{
                b.querySelectorAll(a).forEach(c=>{
                    const d = c.dataset.position ? Number(c.dataset.position) : 0;
                    c.addEventListener(x.CLICK, ()=>{
                        this.handleSecondaryProfileClick(d)
                    }
                    );
                    c.addEventListener("keypress", e=>{
                        if ("Enter" === e.code || "Space" === e.code)
                            e.preventDefault(),
                            this.handleSecondaryProfileClick(d)
                    }
                    )
                }
                )
            }
            )
        }
        getResponseValidatedSessionIndex() {
            let a = R.getSessionIndex();
            a >= this.api_response.length && (a = 0,
            R.setSessionIndex(0));
            return a
        }
        bfCacheHandler() {
            window.addEventListener(x.PAGESHOW, a=>{
                a.persisted && (R.initBFCache(),
                R.apiRequest().then(b=>{
                    this.api_response = b;
                    this.handleApiRequest()
                }
                ))
            }
            )
        }
        hideIfHeaderHidesOnScroll() {
            document.addEventListener(x.GADS_HEADER_HIDE, ()=>{
                document.querySelectorAll(`.${V.SSO_CARD}`).forEach(a=>{
                    null === a || void 0 === a ? void 0 : a.classList.add(V.SSO_CARD_HIDDEN)
                }
                );
                this.isOpened = !1
            }
            )
        }
        render() {
            return g`
      ${this.profileAvatar()}
      ${this.card()}
    `
        }
    }
    ;
    customElements.define("gads-single-sign-on", Fb);
    var Gb = class extends L {
        constructor() {
            super(...arguments);
            this.api_response = null;
            this.isOpened = !1;
            this.logged_in_url = "";
            this.nav_cta = [];
            this.profileEmail = this.profile_cta_name = this.profile_alt_text = "";
            this.profileImageUrl = this.profileImageBuildPlaceholder || "";
            this.profileName = this.profileIndex = "";
            this.secondaryProfilesArray = [];
            this.type = S.TYPE_DEFAULT;
            this.adsAccountsArray = [];
            this.modal = this.ads_account_status = null;
            this.profileAvatar = ()=>{
                var a, b;
                return h`
      <div class="gads-profile-avatar__container">
        <button class="gads-profile-avatar gads-profile-avatar--hidden gads-profile-avatar--${this.deviceType} glue-text-center" aria-expanded="false" data-g-module-name="${this.gtmModuleName}" data-g-cta-name="${this.profileCtaName}" ${this.deviceType === S.TYPE_DEFAULT ? 'aria-live="assertive"' : ""}>
          <gads-image
              widths="xl:40,lg:40,md:40,sm:40"
              image="${this.profileImageUrl}"
              image-class="gads-profile-avatar__image"
              alt-text="${this.profileAltText} ${null === (a = this.profileName) || void 0 === a ? void 0 : a.trim()} (${null === (b = this.profileEmail) || void 0 === b ? void 0 : b.trim()})">
          </gads-image>
        </button>
      </div>
    `
            }
            ;
            this.secondaryAccount = (a="",b="",c="",d)=>{
                c = null === c || void 0 === c ? void 0 : c.replace("s48-c", "s160-c");
                return h`
      <button class="gads-sign-in-card__account-item gads-sign-in-card--profile-${d}" tabindex="0" data-position="${d}" aria-label="Change account to ${a} (${b})">
        <gads-image
            widths="xl:32,lg:32,md:32,sm:32"
            image="${c}"
            image-class="gads-sign-in-card__secondary-profile">
        </gads-image>
        <div class="gads-sign-in-card__account-info">
          <div class="gads-sign-in-card__secondary-name">
            ${a}
          </div>
          <div class="gads-sign-in-card__secondary-email">
            ${b}
          </div>
        </div>
      </button>
    `
            }
            ;
            this.adsAccountItem = a=>{
                if (!this.ctaInfo || !this.ctaInfo[5])
                    return "";
                const b = this.ctaInfo[5].url.replace(/({cid})/g, a.customerId.toString());
                return h`
      <a href="${b}" class="gads-sign-in-card__ads-account-item">
        <div class="gads-sign-in-card__ads-account-info">
          <div class="gads-sign-in-card__ads-account-title">
            ${M.call(a.customerDescriptiveName ? a.customerDescriptiveName : this.ctaInfo[5].text, N, P)}
          </div>
          <div class="gads-sign-in-card__ads-account-id">
            ${a.externalCustomerId}
          </div>
        </div>
        ${this.renderAccountStatus(a.customerStatus)}
      </a>
    `
            }
            ;
            this.initModal = ()=>{
                const a = document.querySelector(`${".gads-sso-modal"}--${this.deviceType}`)
                  , b = document.querySelector(`${".gads-sign-in-card__ads-account-item--add"}-${this.deviceType}`)
                  , c = document.querySelector(`${".gads-sso-modal"}--${this.deviceType} ${"[data-g-cta-name=gads-sso-modal-cancel]"}`);
                if (l.GLUE in window && a) {
                    const d = new glue.Modal(a,b);
                    null === b || void 0 === b ? void 0 : b.addEventListener(x.CLICK, ()=>d.open());
                    null === c || void 0 === c ? void 0 : c.addEventListener(x.CLICK, ()=>d.close())
                }
            }
            ;
            this.card = ()=>h`
      <div class="gads-sign-in-card gads-sign-in-card--hidden glue-text-center">
        <div class="gads-sign-in-card__scrollable">
          <div class="gads-main-profile" data-position="${this.profileIndex}">
            <gads-image
                widths="xl:70,lg:70,md:70,sm:70"
                image="${this.profileImageUrl}"
                alt-text="${this.profileAltText}"
                image-class="gads-sign-in-card__main-image">
            </gads-image>
            <div class="gads-sign-in-card__main-image sso__main-image--placeholder" style="display: none;"></div>
            <div class="gads-sign-in-card__name glue-body">
              ${this.profileName}
            </div>
            <div class="gads-sign-in-card__email glue-body">
              ${this.profileEmail}
            </div>
          </div>
          <div class="gads-sign-in-card__manage-btn">
            ${this.getCtaByGtmName(A.SSO_MANAGE_ACCOUNT)}
          </div>
          <div class="gads-sign-in-card__ads-accounts">
            <div class="gads-sign-in-card__ads-accounts-array"></div>
            <div class="gads-sign-in-card__ads-account-item gads-sign-in-card__ads-account-item--add gads-sign-in-card__ads-account-item--add-${this.deviceType}">
              <svg class="gads-sign-in-card__add-profile-icon" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.8334 3.66683C10.8334 1.82516 9.34171 0.333496 7.50004 0.333496C5.65837 0.333496 4.16671 1.82516 4.16671 3.66683C4.16671 5.5085 5.65837 7.00016 7.50004 7.00016C9.34171 7.00016 10.8334 5.5085 10.8334 3.66683ZM9.16671 3.66683C9.16671 4.5835 8.41671 5.3335 7.50004 5.3335C6.58337 5.3335 5.83337 4.5835 5.83337 3.66683C5.83337 2.75016 6.58337 2.00016 7.50004 2.00016C8.41671 2.00016 9.16671 2.75016 9.16671 3.66683ZM0.833374 12.0002V13.6668H14.1667V12.0002C14.1667 9.7835 9.72504 8.66683 7.50004 8.66683C5.27504 8.66683 0.833374 9.7835 0.833374 12.0002ZM2.50004 12.0002C2.66671 11.4085 5.25004 10.3335 7.50004 10.3335C9.74171 10.3335 12.3167 11.4002 12.5 12.0002H2.50004ZM16.6667 9.50016V7.00016H19.1667V5.3335H16.6667V2.8335H15V5.3335H12.5V7.00016H15V9.50016H16.6667Z" fill="#3C4043"/>
              </svg>
              ${this.getCtaByGtmName(A.SSO_CREATE_ACCOUNT)}
            </div>
          </div>
          <div class="gads-sign-in-card__accounts">
            <div class="gads-secondary-accounts-list">
              ${this.secondaryProfiles}
            </div>
          </div>
        </div>
        <div class="gads-sign-in-card__sticky">
          <div class="gads-sign-in-card__signout">
            <div class="gads-sign-in-card__signout-btn">
              ${this.getCtaByGtmName(A.SSO_SIGN_OUT)}
            </div>
          </div>
          <div class="gads-sign-in-card__links glue-body">
            <div class="gads-sign-in-card__link-item">
              ${this.getCtaByGtmName(A.SSO_PRIVACY_POLICY)}
            </div>
            <div class="gads-sign-in-card__link-separator">
              &centerdot;
            </div>
            <div class="gads-sign-in-card__link-item">
              ${this.getCtaByGtmName(A.SSO_TERMS)}
            </div>
          </div>
        </div>
      </div>
    `
        }
        connectedCallback() {
            R.apiRequest().then(a=>{
                this.api_response = a;
                this.handleApiRequest()
            }
            );
            this.firstElementChild || this.replaceChildren(this.render());
            this.bfCacheHandler()
        }
        get gtmModuleName() {
            var a;
            return (null === (a = this.getAttribute(u.GTM_MODULE_NAME)) || void 0 === a ? void 0 : a.toLowerCase()) || this.nodeName
        }
        get ctaStartNow() {
            return this.getAttribute(S.CTA_START_NOW) || null
        }
        get ctaSignIn() {
            return this.getAttribute(S.CTA_SIGN_IN) || null
        }
        get deviceType() {
            return this.getAttribute(S.TYPE) || this.type
        }
        get profileAltText() {
            return this.getAttribute(S.PROFILE_ALT_TEXT) || this.profile_alt_text
        }
        get profileCtaName() {
            return this.getAttribute(S.PROFILE_CTA_NAME) || this.profile_cta_name
        }
        get profileImageBuildPlaceholder() {
            return this.getAttribute(S.PROFILE_IMAGE_PLACEHOLDER)
        }
        get loggedInUrl() {
            return this.getAttribute(S.LOGGED_IN_URL) || this.logged_in_url
        }
        get secondaryProfiles() {
            return this.secondaryProfilesArray
        }
        set updateSecondaryProfiles(a) {
            this.secondaryProfilesArray = a
        }
        get adsAccountStatus() {
            const a = this.getAttribute("ads-account-status") || this.ads_account_status;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get modalObj() {
            const a = this.getAttribute("modal") || this.modal;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get modalCtaBlock() {
            return this.modalObj.cta ? this.modalObj.cta.map(a=>null !== a.text || null !== a.url ? h`
        <gads-button ${this.unpackCta(a)}></gads-button>
      ` : "") : [""]
        }
        handleApiRequest() {
            if (!this.api_response) {
                const a = this.getAttribute(S.MOCK_API);
                a && (this.api_response = JSON.parse(a))
            }
            if (this.api_response && this.api_response.length)
                try {
                    const a = this.getResponseValidatedSessionIndex();
                    this.getPrimaryAccount();
                    this.getSecondaryAccounts();
                    this.initClickOutside();
                    this.hideIfHeaderHidesOnScroll();
                    R.displayProfileAvatar();
                    this.replaceChildren(this.render());
                    this.addClickToSecondaryAccounts(`.${V.SECONDARY_ACCOUNTS_ITEM}`);
                    this.initModal();
                    R.addCurrentUserToUrl(a, [this.ctaStartNow, this.ctaSignIn, this.modalCtaBlock[1]]);
                    bb.setMarketingClientUser(a);
                    this.renderAdsAccounts()
                } catch (a) {}
            else
                this.hideProfileAvatarContainer();
            R.addContinueToUrl()
        }
        hideProfileAvatarContainer() {
            document.querySelectorAll(".gads-profile-avatar__container").forEach(a=>a.classList.add(w.HIDDEN))
        }
        initClickOutside() {
            const a = setInterval(()=>{
                const b = document.querySelectorAll(`.${V.SSO_CARD}`)
                  , c = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_AVATAR}`)
                  , d = document.querySelectorAll(".gads-sso-modal");
                b && c && (window.addEventListener(x.CLICK, ({target: e})=>{
                    var f;
                    let k = !0;
                    if (null === (f = e.parentElement) || void 0 === f ? 0 : f.classList.contains(`${V.SECONDARY_ACCOUNT_INFO}`))
                        k = !1;
                    [...b, ...c, ...d].forEach(m=>{
                        if (m.contains(e) || e.classList.contains(`${V.PRIMARY_ACCOUNT_AVATAR}`) || e.classList.contains(`${V.PRIMARY_ACCOUNT_AVATAR_IMAGE}`))
                            k = !1
                    }
                    );
                    k && (b.forEach(m=>{
                        m && m.classList.add(V.SSO_CARD_HIDDEN)
                    }
                    ),
                    this.isOpened = !1)
                }
                ),
                clearInterval(a))
            }
            , G.ONE_HUNDRED)
        }
        handleSecondaryProfileClick(a) {
            var b, c;
            R.setSessionIndex(a, !0);
            document.querySelectorAll(`.${V.SSO_CARD}`).forEach(y=>{
                y && y.classList.add(V.SSO_CARD_HIDDEN)
            }
            );
            this.isOpened = !this.isOpened;
            const d = `${V.PROFILE_PREFIX}${a}`
              , e = document.querySelectorAll(`.${V.SECONDARY_ACCOUNTS_LIST}`)
              , f = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_PROFILE}`)
              , k = Number(f[0].dataset.position)
              , m = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_NAME}`)
              , n = document.querySelectorAll(`.${V.PRIMARY_ACCOUNT_EMAIL}`)
              , t = document.querySelectorAll(`img.${V.PRIMARY_ACCOUNT_IMAGE}`)
              , B = document.querySelectorAll(`img.${V.PRIMARY_ACCOUNT_AVATAR_IMAGE}`);
            e.forEach(y=>{
                const U = g`
        ${this.secondaryAccount(m[0].innerHTML, n[0].innerHTML, t[0].src, k)}
      `;
                y.appendChild(U)
            }
            );
            this.addClickToSecondaryAccounts(`.${V.PROFILE_PREFIX}${k}`);
            const q = document.querySelector(`.${d}`)
              , F = null === q || void 0 === q ? void 0 : q.querySelector(`.${V.SECONDARY_ACCOUNT_IMAGE}`)
              , D = null === F || void 0 === F ? void 0 : F.src
              , O = null === (b = null === q || void 0 === q ? void 0 : q.querySelector(`.${V.SECONDARY_ACCOUNT_NAME}`)) || void 0 === b ? void 0 : b.innerHTML
              , T = null === (c = null === q || void 0 === q ? void 0 : q.querySelector(`.${V.SECONDARY_ACCOUNT_EMAIL}`)) || void 0 === c ? void 0 : c.innerHTML;
            f.forEach(y=>{
                y.dataset.position = a.toString() || ""
            }
            );
            B.forEach(y=>{
                y.setAttribute("aria-label", `${this.profileAltText} ${null === O || void 0 === O ? void 0 : O.trim()} (${null === T || void 0 === T ? void 0 : T.trim()})`)
            }
            );
            B.forEach(y=>{
                y.src = D || ""
            }
            );
            t.forEach(y=>{
                y.src = D || ""
            }
            );
            m.forEach(y=>{
                y.innerHTML = O || ""
            }
            );
            n.forEach(y=>{
                y.innerHTML = T || ""
            }
            );
            e.forEach(y=>{
                const U = y.querySelector(`.${d}`);
                U && y.removeChild(U)
            }
            );
            R.addCurrentUserToUrl(a, [this.ctaStartNow, this.ctaSignIn, this.modalCtaBlock[1]]);
            bb.setMarketingClientUser(a);
            this.renderAdsAccounts()
        }
        getPrimaryAccount() {
            const a = this.getResponseValidatedSessionIndex();
            this.profileIndex = a;
            this.profileName = M.call(this.api_response[a][2], N, P);
            this.profileEmail = M.call(this.api_response[a][3], N, P);
            this.profileImageUrl = this.api_response[a][4].replace("s48-c", "s160-c");
            const b = setInterval(()=>{
                const c = document.querySelectorAll(`.${V.PROFILE_AVATAR}`)
                  , d = document.querySelectorAll(`.${V.SSO_CARD}`);
                c && (c.forEach(e=>{
                    var f, k;
                    e.children[0].setAttribute("alt-text", `${this.profileAltText} ${null === (f = this.profileName) || void 0 === f ? void 0 : f.trim()} (${null === (k = this.profileEmail) || void 0 === k ? void 0 : k.trim()})`);
                    e.addEventListener(x.CLICK, ()=>{
                        e.setAttribute("aria-expanded", `${!this.isOpened}`);
                        d.forEach(m=>{
                            m && m.classList.toggle(V.SSO_CARD_HIDDEN, this.isOpened)
                        }
                        );
                        this.isOpened = !this.isOpened
                    }
                    )
                }
                ),
                clearInterval(b))
            }
            , G.ONE_HUNDRED)
        }
        getSecondaryAccounts() {
            const a = this.getResponseValidatedSessionIndex()
              , b = [];
            this.api_response.map((c,d)=>{
                d != a && b.push(this.secondaryAccount(M.call(c[2], N, P), M.call(c[3], N, P), c[4], d))
            }
            );
            this.updateSecondaryProfiles = b
        }
        addClickToSecondaryAccounts(a) {
            document.querySelectorAll(`.${V.SECONDARY_ACCOUNTS_LIST}`).forEach(b=>{
                b.querySelectorAll(a).forEach(c=>{
                    const d = c.dataset.position ? Number(c.dataset.position) : 0;
                    c.addEventListener(x.CLICK, ()=>{
                        this.handleSecondaryProfileClick(d)
                    }
                    );
                    c.addEventListener(x.KEYPRESS, e=>{
                        if (e.code === C.ENTER || e.code === C.SPACE)
                            e.preventDefault(),
                            this.handleSecondaryProfileClick(d)
                    }
                    )
                }
                )
            }
            )
        }
        getResponseValidatedSessionIndex() {
            let a = R.getSessionIndex();
            a >= this.api_response.length && (a = 0,
            R.setSessionIndex(0));
            return a
        }
        bfCacheHandler() {
            window.addEventListener(x.PAGESHOW, a=>{
                a.persisted && (R.initBFCache(),
                this.isOpened = !1,
                R.apiRequest().then(b=>{
                    this.api_response = b;
                    this.handleApiRequest()
                }
                ))
            }
            )
        }
        hideIfHeaderHidesOnScroll() {
            document.addEventListener(x.GADS_HEADER_HIDE, ()=>{
                this.querySelectorAll(`.${V.SSO_CARD}`).forEach(a=>{
                    null === a || void 0 === a ? void 0 : a.classList.add(V.SSO_CARD_HIDDEN)
                }
                );
                this.isOpened = !1
            }
            )
        }
        renderAccountStatus(a) {
            var b;
            if (!this.adsAccountStatus.map(d=>d.key).includes(a))
                return "";
            const c = null === (b = this.adsAccountStatus.find(d=>d.key === a)) || void 0 === b ? void 0 : b.value;
            return c ? h`<div class="gads-sign-in-card__ads-account-status">${c}</div>` : ""
        }
        async renderAdsAccounts() {
            const a = document.querySelectorAll(".gads-sign-in-card__ads-accounts-array");
            a.forEach(d=>{
                d.innerHTML = this.renderLoader()
            }
            );
            const b = await bb.getAdsAccountsClient()
              , c = this.ctaInfo && this.ctaInfo[5];
            if (b && c) {
                this.adsAccountsArray = b.map(e=>this.adsAccountItem(e));
                a.forEach(e=>{
                    e.innerHTML = this.adsAccountsArray.join("")
                }
                );
                La.dispatchUpdateCtaParamsEvent(".gads-sign-in-card__ads-account-item:not(.gads-sign-in-card__ads-account-item--add)", c.default_subid_position);
                La.dispatchUpdateCtaParamsEvent(".gads-sso-modal__ctas a", this.modalObj.cta[1].default_subid_position);
                const d = this.getResponseValidatedSessionIndex();
                document.querySelectorAll(".gads-sign-in-card__ads-account-item:not(.gads-sign-in-card__ads-account-item--add)").forEach(e=>{
                    R.addUserToHref(e, `${za.AUTHUSER}=${d}`)
                }
                )
            } else
                a.forEach(d=>{
                    d.innerHTML = ""
                }
                )
        }
        renderLoader() {
            return h`
      <div class="gads-sign-in-card__loader-wrapper">
        <div class="gads-sign-in-card__loader"></div>
      </div>
    `
        }
        renderModal() {
            return h`
      <div class="gads-sso-modal gads-sso-modal--${this.deviceType} glue-modal" aria-labelledby="gads-sso-modal__headline" aria-describedby="gads-sso-modal__copy">
        <div class="gads-sso-modal__inner">
          <h2 id="gads-sso-modal__headline" class="gads-sso-modal__headline glue-headline glue-headline--headline-5">
            ${this.modalObj.headline}
          </h2>
          <p id="gads-sso-modal__copy" class="gads-sso-modal__copy">
            ${this.modalObj.copy}
          </p>
          <div class="gads-sso-modal__ctas">
            ${this.modalCtaBlock}
          </div>
        </div>
        <button class="glue-modal__close-btn"></button>
      </div>
    `
        }
        render() {
            return g`
      ${this.profileAvatar()}
      ${this.card()}
      ${this.renderModal()}
    `
        }
    }
    ;
    customElements.define("gads-single-sign-on-v2", Gb);
    var Hb = class extends L {
        constructor() {
            super(...arguments);
            this.encoded_url = "";
            this.social_labels = this.social_gtm_names = null;
            this.subject_text = "";
            this.socialEl = this.querySelector(".glue-social")
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.socialEl = this.querySelector(".glue-social"));
            this.socialEl && l.GLUE in window && new glue.Social(this.socialEl)
        }
        get encodedURL() {
            return this.getAttribute("encoded-url") || ""
        }
        get subjectText() {
            return this.getAttribute("subject-text") || ""
        }
        get socialGtmNames() {
            const a = this.getAttribute("social-gtm-names");
            return "string" === typeof a ? JSON.parse(decodeURI(a)) : this.social_gtm_names
        }
        get socialLabels() {
            const a = this.getAttribute("social-labels");
            return "string" === typeof a ? JSON.parse(decodeURI(a)) : this.social_labels
        }
        render() {
            const a = this.socialGtmNames
              , b = this.socialLabels
              , c = this.gtmModuleName;
            return g`
      <section class="glue-social">
        <div class="glue-social__group">
          <p class="glue-social__title glue-social__title--inline">
            <gads-icon icon-id="SHARE" class-names="glue-icon--24px"></gads-icon>
            ${null === b || void 0 === b ? void 0 : b.share}
          </p>
          <ul class="glue-social__list" role="list">
            <li class="glue-social__item">
              <a class="glue-social__link" title="${null === b || void 0 === b ? void 0 : b.send_via_email}" target="_blank"
                  href="mailto:?subject=${this.subjectText}&amp;body=${this.encodedURL}"
                  data-g-module-name="${c}" data-g-cta-name="${null === a || void 0 === a ? void 0 : a.email}">
                <gads-icon icon-id="EMAIL" class-names="glue-icon--social mail-icon glue-icon--24px"></gads-icon>
              </a>
            </li>
            <li class="glue-social__item">
              <div class="glue-social__popover">
                <div class="glue-social__icon-trigger"
                    ${b.get_shareable_link ? `aria-label="${b.get_shareable_link}" title="${b.get_shareable_link}"` : ""}
                    id="share-popover-trigger"
                    data-g-module-name="${c}"
                    data-g-cta-name="${null === a || void 0 === a ? void 0 : a.copy_open_tooltip}">
                  <gads-icon icon-id="LINK" class-names="glue-icon--social glue-icon--24px"></gads-icon>
                </div>
                <div class="glue-social__dialog" id="share-popover-dialog">
                  <gads-icon icon-id="LINK" class-names="glue-icon--social glue-icon--24px"></gads-icon>
                  <div class="glue-social__copy" glue-copy-success="${b.copied_to_clipboard}" glue-copy-fail="${b.press_ctrl_c}">
                    <input class="glue-social__copy-input" readonly="" type="text" value="${this.encodedURL}">
                    <button class="glue-social__copy-btn" id="share-copy-btn" data-g-module-name="${c}" data-g-cta-name="${null === a || void 0 === a ? void 0 : a.copy_link}">${null === b || void 0 === b ? void 0 : b.copy_link}</button>
                  </div>
                  <div ${b.close_tooltip ? `aria-label="${b.close_tooltip}"` : ""} class="glue-social__close-btn">
                    \u00d7
                  </div>
                </div>
              </div>
            </li>
            <li class="glue-social__item">
              <a class="glue-social__link" href="https://www.facebook.com/sharer/sharer.php?u=${this.encodedURL}" target="_blank"
                  title="${null === b || void 0 === b ? void 0 : b.share_facebook}" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                  data-g-module-name="${c}" data-g-cta-name="${null === a || void 0 === a ? void 0 : a.facebook}">
                <gads-icon icon-id="POST_FACEBOOK" class-names="glue-icon--social glue-icon--color-facebook glue-icon--24px"></gads-icon>
              </a>
            </li>
            <li class="glue-social__item">
              <a class="glue-social__link" href="https://www.linkedin.com/shareArticle?url=${this.encodedURL}&amp;mini=true" target="_blank"
                  title="${null === b || void 0 === b ? void 0 : b.share_linkedin}" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                  data-g-module-name="${c}" data-g-cta-name="${null === a || void 0 === a ? void 0 : a.linkedin}">
                <gads-icon icon-id="POST_LINKEDIN" class-names="glue-icon--social glue-icon--color-linkedin glue-icon--24px"></gads-icon>
              </a>
            </li>
            <li class="glue-social__item">
              <a class="glue-social__link" href="https://twitter.com/intent/tweet?text=${this.subjectText}&amp;url=${this.encodedURL}" target="_blank"
                  title="${null === b || void 0 === b ? void 0 : b.share_twitter}" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                  data-g-module-name="${c}" data-g-cta-name="${null === a || void 0 === a ? void 0 : a.twitter}">
                <gads-icon icon-id="TWITTER" class-names="glue-icon--social glue-icon--color-twitter glue-icon--24px"></gads-icon>
              </a>
            </li>
          </ul>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-social", Hb);
    var Ib, Jb = Ib || (Ib = {});
    Jb.GLUE_FOOTER = ".glue-footer";
    Jb.LANG_PICKER = "#lang-selector";
    var Kb = class extends L {
        constructor() {
            super(...arguments);
            this._footerEl = this._footer = null;
            this._langPickerEl = this.querySelector(Ib.LANG_PICKER);
            this.help = this.headline = this.google_link = this.global_links = this.follow_us = this.disclaimer = this.columns_aria_label = this.columns = "";
            this.hide_lang_picker = !1;
            this.social_links = "";
            this.handleLangPickerChange = ()=>{
                window.location.href = ya.ADS.DOMAIN + this.langPickerEl.value
            }
            ;
            this.langPickerMapper = ()=>[{
                value: "ru",
                copy: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
            }, {
                value: "fr",
                copy: "Fran\u00e7ais"
            }, {
                value: "fr_dz",
                copy: "Alg\u00e9rie - Fran\u00e7ais"
            }, {
                value: "es-419",
                copy: "Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_ar",
                copy: "Argentina - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "en_au",
                copy: "Australia - English"
            }, {
                value: "fr_be",
                copy: "Belgique - Fran\u00e7ais"
            }, {
                value: "nl_be",
                copy: "Belgi\u00eb - Nederlands"
            }, {
                value: "es-419_bo",
                copy: "Bolivia - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "pt-BR_br",
                copy: "Brasil - Portugu\u00eas (Brasil)"
            }, {
                value: "en_ca",
                copy: "Canada - English"
            }, {
                value: "fr_ca",
                copy: "Canada - Fran\u00e7ais"
            }, {
                value: "es-419_cl",
                copy: "Chile - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_co",
                copy: "Colombia - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_cr",
                copy: "Costa Rica - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "en_cy",
                copy: "Cyprus - English"
            }, {
                value: "da_dk",
                copy: "Danmark - Dansk"
            }, {
                value: "de_de",
                copy: "Deutschland - Deutsch"
            }, {
                value: "es-419_ec",
                copy: "Ecuador - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "et_ee",
                copy: "Eesti - Eesti"
            }, {
                value: "en_eg",
                copy: "Egypt - English"
            }, {
                value: "es-419_sv",
                copy: "El Salvador - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "en",
                copy: "English"
            }, {
                value: "ca_es",
                copy: "Espanya - Catal\u00e0"
            }, {
                value: "es_es",
                copy: "Espa\u00f1a - Espa\u00f1ol"
            }, {
                value: "es_us",
                copy: "Estados Unidos - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "fr_fr",
                copy: "France - Fran\u00e7ais"
            }, {
                value: "es-419_gt",
                copy: "Guatemala - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_hn",
                copy: "Honduras - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "en_hk",
                copy: "Hong Kong - English"
            }, {
                value: "hr_hr",
                copy: "Hrvatska - Hrvatski"
            }, {
                value: "en_in",
                copy: "India - English"
            }, {
                value: "id_id",
                copy: "Indonesia - Bahasa Indonesia"
            }, {
                value: "en_id",
                copy: "Indonesia - English"
            }, {
                value: "en_ie",
                copy: "Ireland - English"
            }, {
                value: "it_it",
                copy: "Italia - Italiano"
            }, {
                value: "lv_lv",
                copy: "Latvija - Latvie\u0161u"
            }, {
                value: "lt_lt",
                copy: "Lietuva - Lietuvi\u0173"
            }, {
                value: "hu_hu",
                copy: "Magyarorsz\u00e1g - Magyar"
            }, {
                value: "en_my",
                copy: "Malaysia - English"
            }, {
                value: "fr_ma",
                copy: "Maroc - Fran\u00e7ais"
            }, {
                value: "es-419_mx",
                copy: "M\u00e9xico - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "nl_nl",
                copy: "Nederland - Nederlands"
            }, {
                value: "en_nz",
                copy: "New Zealand - English"
            }, {
                value: "es-419_ni",
                copy: "Nicaragua - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "en_ng",
                copy: "Nigeria - English"
            }, {
                value: "no_no",
                copy: "Norge - Norsk"
            }, {
                value: "en_pk",
                copy: "Pakistan - English"
            }, {
                value: "es-419_pa",
                copy: "Panam\u00e1 - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_py",
                copy: "Paraguay - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_pe",
                copy: "Per\u00fa - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "en_ph",
                copy: "Philippines - English"
            }, {
                value: "pl_pl",
                copy: "Polska - Polski"
            }, {
                value: "pt-PT_pt",
                copy: "Portugal - Portugu\u00eas (Portugal)"
            }, {
                value: "es-419_pr",
                copy: "Puerto Rico - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_do",
                copy: "Rep\u00fablica Dominicana - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "ro_ro",
                copy: "Rom\u00e2nia - Rom\u00e2n\u0103"
            }, {
                value: "en_sa",
                copy: "Saudi Arabia - English"
            }, {
                value: "de_ch",
                copy: "Schweiz - Deutsch"
            }, {
                value: "en_sg",
                copy: "Singapore - English"
            }, {
                value: "sl_si",
                copy: "Slovenija - Sloven\u0161\u010dina"
            }, {
                value: "sk_sk",
                copy: "Slovensko - Sloven\u010dina"
            }, {
                value: "en_za",
                copy: "South Africa - English"
            }, {
                value: "fr_ch",
                copy: "Suisse - Fran\u00e7ais"
            }, {
                value: "fi_fi",
                copy: "Suomi - Suomi"
            }, {
                value: "sv_se",
                copy: "Sverige - Svenska"
            }, {
                value: "fr_tn",
                copy: "Tunisie - Fran\u00e7ais"
            }, {
                value: "tr_tr",
                copy: "T\u00fcrkiye - T\u00fcrk\u00e7e"
            }, {
                value: "en_ae",
                copy: "United Arab Emirates - English"
            }, {
                value: "en_uk",
                copy: "United Kingdom - English"
            }, {
                value: "en_us",
                copy: "United States - English"
            }, {
                value: "es-419_uy",
                copy: "Uruguay - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "es-419_ve",
                copy: "Venezuela - Espa\u00f1ol (Latinoam\u00e9rica)"
            }, {
                value: "vi_vn",
                copy: "Vi\u1ec7t Nam - Ti\u1ebfng Vi\u1ec7t"
            }, {
                value: "de_at",
                copy: "\u00d6sterreich - Deutsch"
            }, {
                value: "cs_cz",
                copy: "\u010cesk\u00e1 Republika - \u010ce\u0161tina"
            }, {
                value: "el_gr",
                copy: "\u0395\u03bb\u03bb\u03ac\u03b4\u03b1 - \u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
            }, {
                value: "ru_by",
                copy: "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c - \u0420\u0443\u0441\u0441\u043a\u0438\u0439"
            }, {
                value: "bg_bg",
                copy: "\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f - \u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"
            }, {
                value: "ru_kz",
                copy: "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d - \u0420\u0443\u0441\u0441\u043a\u0438\u0439"
            }, {
                value: "sr_rs",
                copy: "\u0421\u0440\u0431\u0438\u0458\u0430 - \u0421\u0440\u043f\u0441\u043a\u0438"
            }, {
                value: "uk_ua",
                copy: "\u0423\u043a\u0440\u0430\u0457\u043d\u0430 - \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
            }, {
                value: "hi_in",
                copy: "\u092d\u093e\u0930\u0924 - \u0939\u093f\u0928\u094d\u0926\u0940"
            }, {
                value: "th_th",
                copy: "\u0e44\u0e17\u0e22 - \u0e44\u0e17\u0e22"
            }, {
                value: "iw_il",
                copy: "\u202b\u05d9\u05e9\u05e8\u05d0\u05dc - \u05e2\u05d1\u05e8\u05d9\u05ea\u202c"
            }, {
                value: "ar_ae",
                copy: "\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629 - \u0627\u0644\u0639\u0631\u0628\u064a\u0629\u202c"
            }, {
                value: "ar",
                copy: "\u202b\u0627\u0644\u0639\u0631\u0628\u064a\u0629\u202c"
            }, {
                value: "ar_sa",
                copy: "\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 - \u0627\u0644\u0639\u0631\u0628\u064a\u0629\u202c"
            }, {
                value: "ar_eg",
                copy: "\u202b\u0645\u0635\u0631 - \u0627\u0644\u0639\u0631\u0628\u064a\u0629\u202c"
            }, {
                value: "zh-CN_cn",
                copy: "\u4e2d\u56fd - \u4e2d\u6587\uff08\u7b80\u4f53\u4e2d\u6587\uff09"
            }, {
                value: "zh-TW_tw",
                copy: "\u53f0\u7063 - \u4e2d\u6587\uff08\u7e41\u9ad4\u4e2d\u6587\uff09"
            }, {
                value: "ja_jp",
                copy: "\u65e5\u672c - \u65e5\u672c\u8a9e"
            }, {
                value: "ko_kr",
                copy: "\ub300\ud55c\ubbfc\uad6d - \ud55c\uad6d\uc5b4"
            }].map(a=>this.langPickerOption(a.value, a.copy));
            this.langPickerOption = (a,b)=>{
                const c = "root" === this.locale ? "en" : this.locale.replace("_ALL", "");
                return h`
      <option value="/intl/${a}/home/" ${c === a ? "selected" : ""}>
        ${b}
      </option>
    `
            }
            ;
            this.langPickerRender = h`
    <select
        name="lang-selector"
        id="lang-selector"
        class="glue-form__dropdown glue-footer__lang-dropdown"
        aria-label="Change language or region">
      ${this.langPickerMapper()}
    </select>
  `
        }
        connectedCallback() {
            this.footerEl = this.querySelector(Ib.GLUE_FOOTER);
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.footerEl = this.querySelector(Ib.GLUE_FOOTER),
            this.langPickerEl = this.querySelector(Ib.LANG_PICKER));
            l.GLUE in window && (this.footer = new glue.Footer(this.footerEl));
            this.langPickerEl && this.langPickerEl.addEventListener(x.CHANGE, ()=>{
                this.handleLangPickerChange()
            }
            )
        }
        get footerEl() {
            return this._footerEl
        }
        set footerEl(a) {
            this._footerEl = a
        }
        get footer() {
            return this._footer
        }
        set footer(a) {
            a instanceof glue.Footer && (this._footer = a)
        }
        get langPickerEl() {
            return this._langPickerEl
        }
        set langPickerEl(a) {
            this._langPickerEl = a
        }
        get columnsList() {
            const a = this.getAttribute("columns") || this.columns;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get columnsAriaLabel() {
            return this.getAttribute("columns-aria-label") || this.columns_aria_label
        }
        get disclaimerText() {
            return this.getAttribute(u.DISCLAIMER) || this.disclaimer
        }
        get globalLinksList() {
            const a = this.getAttribute("global-links") || this.global_links;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get helpButton() {
            const a = this.getAttribute("help") || this.help;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get googleLink() {
            const a = this.getAttribute("google-link") || this.google_link;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get followUsText() {
            return this.getAttribute("follow-us") || this.follow_us
        }
        get hideLangPicker() {
            return this.getAttribute("hide-lang-picker") || this.hide_lang_picker
        }
        get socialLinks() {
            const a = this.getAttribute("social-links") || this.social_links;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        render() {
            var a, b, c, d, e, f, k, m, n;
            return g`
      <footer class="glue-footer glue-spacer-3-top">
        <h2 class="glue-visually-hidden">${this.headlineText}</h2>
        ${this.followUsText && (null === (a = this.socialLinks) || void 0 === a ? 0 : a.length) ? h`
          <section class="glue-footer__upper">
            <section class="glue-social">
              <div class="glue-social__group">
                <p class="glue-social__title glue-social__title--inline">
                  ${this.followUsText}
                </p>
                <ul class="glue-social__list" role="list">
                  ${this.socialLinks.map(t=>t.url ? h`
                        <li class="glue-social__item">
                          <a class="glue-social__link" href="${t.url}" ${this.setExternalLink(t.url)} aria-label="${t.label}">
                            <gads-icon icon-id="${t.icon_id}" class-names="glue-icon--24px"></gads-icon>
                          </a>
                        </li>
                      ` : "")}
                </ul>
              </div>
            </section>
          </section>
        ` : ""}
        <nav class="glue-footer__site-links" aria-label="${this.columnsAriaLabel}">
          <div class="glue-footer__site-links-grid glue-footer__site-links-grid--5-col">
            ${null === (b = this.columnsList) || void 0 === b ? void 0 : b.map((t,B)=>h`
                  <div class="glue-footer__site-links-column">
                    <h3 class="glue-footer__site-links-header">
                      <span class="glue-footer__site-links-header-button" id="column-${B}-toggle">
                        <span class="glue-footer__site-links-header-text">${t.headline}</span>
                        <svg viewBox="0 0 24 24" class="glue-icon glue-icon--32px expand-more">
                          <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17" />
                        </svg>
                      </span>
                    </h3>
                    <div class="glue-footer__site-links-list" id="column-${B}-content">
                      <ul class="glue-no-bullet" role="list">
                        ${t.links.map(q=>h`
                              <li class="glue-footer__site-links-list-item">
                                <a class="glue-footer__link" href="${this.relativizeKintaroLink(q.url)}" ${this.setExternalLink(q.url)}>${q.text}</a>
                              </li>
                            `)}
                      </ul>
                    </div>
                  </div>
                `)}
          </div>
        </nav>
        ${this.disclaimerText ? h`
            <div class="glue-footer__global glue-footer__disclaimer-text">
              <p class="disclaimer-text">${this.disclaimerText}</p>
            </div>
          ` : ""}
        <section class="glue-footer__global">
          <div class="glue-footer__logo">
            <a href="${null === (c = this.googleLink) || void 0 === c ? void 0 : c.url}" title="${null === (d = this.googleLink) || void 0 === d ? void 0 : d.label}" target="_blank" rel="noopener noreferrer">
              <svg id="${null === (e = this.googleLink) || void 0 === e ? void 0 : e.icon_id}" viewBox="0 0 74 24" class="glue-icon google-logo" width="74">
                <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24zm15.76-2c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52zm28.58-8.03h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5zM38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52zM58 .24h2.51v17.57H58zm10.26 15.28c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" />
              </svg>
            </a>
          </div>
          <ul class="glue-footer__global-links glue-no-bullet" role="list">
            ${null === (f = this.globalLinksList) || void 0 === f ? void 0 : f.map(t=>h`
                <li class="glue-footer__global-links-list-item">
                  <a class="glue-footer__link" href="${t.url}" ${this.setExternalLink(t.url)}>${t.text}</a>
                </li>
              `)}
          </ul>
          <ul class="glue-footer__global-links glue-footer__global-links--extra glue-no-bullet" role="list">
            <li class="glue-footer__global-links-list-item glue-footer__global-links-list-item--extra">
              <a class="glue-footer__link help-link" href="${null === (k = this.helpButton) || void 0 === k ? void 0 : k.url}" ${this.setExternalLink(null === (m = this.helpButton) || void 0 === m ? void 0 : m.url)}>
                <svg class="glue-icon glue-icon--24px" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
                <span class="help-label">${null === (n = this.helpButton) || void 0 === n ? void 0 : n.label}</span>
              </a>
            </li>
            <li class="glue-footer__global-links-list-item glue-footer__global-links-list-item--extra">
              ${this.hideLangPicker ? "" : this.langPickerRender}
            </li>
          </ul>
        </section>
      </footer>
    `
        }
    }
    ;
    customElements.define("gads-simple-footer", Kb);
    var Lb = class extends L {
        constructor() {
            super(...arguments);
            this.ctaEl = this.querySelector(".gads-sticky-cta")
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.ctaEl = this.querySelector(".gads-sticky-cta"));
            let a = 0;
            if (this.ctaEl && (this.SimpleFooterHandler(),
            this.HeroCtaHandler(),
            "false" === this.isSticky)) {
                Q.getBpName() === r.SM && (this.ctaEl.classList.remove(w.HIDDEN),
                a = this.ctaEl.offsetHeight,
                this.ctaEl.style.bottom = `-${a}px`,
                this.ctaEl.classList.remove("gads-sticky-cta__invisible"));
                const b = vb(()=>{
                    const c = 200 < window.scrollY;
                    this.ctaEl && (this.ctaEl.style.translate = c ? `0 -${a}px` : `0 ${a}px`)
                }
                , G.THIRTY);
                window.addEventListener(x.SCROLL, b);
                Q.subscribe(c=>{
                    c = c === r.SM;
                    this.ctaEl && (c ? (this.ctaEl.classList.remove(w.HIDDEN),
                    a = this.ctaEl.offsetHeight,
                    this.ctaEl.style.bottom = `-${a}px`,
                    this.ctaEl.classList.remove("gads-sticky-cta__invisible"),
                    window.addEventListener(x.SCROLL, b)) : (this.ctaEl.classList.add(w.HIDDEN, "gads-sticky-cta__invisible"),
                    window.removeEventListener(x.SCROLL, b)))
                }
                )
            }
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get isSticky() {
            return this.getAttribute("is-sticky") || ""
        }
        SimpleFooterHandler() {
            const a = document.querySelector(Ib.GLUE_FOOTER);
            Q.getBpName() === r.SM && a && a.classList.add("glue-spacer-6-bottom");
            Q.subscribe(b=>null === a || void 0 === a ? void 0 : a.classList.toggle("glue-spacer-6-bottom", b === r.SM))
        }
        ButtonParamRegex(a) {
            var b = this.ctaBlock[0];
            a = RegExp(a);
            return (b = null === b || void 0 === b ? void 0 : b.match(a)) ? b[1] : null
        }
        HeroCtaHandler() {
            var a, b = this.ButtonParamRegex('cta-url="(?:https://)?([^"?]+)"');
            const c = this.ButtonParamRegex('cta-text="([^"]+)"');
            b && c && (b = document.querySelector(`${".hero-cta"} a[href*='${b}']`)) && (null === (a = b.textContent) || void 0 === a ? 0 : a.includes(c)) && b.classList.add("hero-hide-mobile")
        }
        render() {
            return g`
      <div class="gads-sticky-cta ${"false" === this.isSticky ? "hidden gads-sticky-cta__invisible" : ""}" data-sticky="${this.isSticky}">
        ${this.ctaBlock}
      </div>
    `
        }
    }
    ;
    customElements.define("gads-sticky-cta", Lb);
    var Mb = class extends L {
        get time() {
            return this.getAttribute("time") || ""
        }
        get timeAriaLabel() {
            return this.getAttribute("time-aria-label") || ""
        }
        get template() {
            return this.getAttribute("template") || "light"
        }
        render() {
            return g`
      <span class="timestamp-container" ${this.timeAriaLabel ? h`aria-label="${this.timeAriaLabel}" role="img"` : ""}>
        <span class="timestamp timestamp--${this.template}">
          <gads-icon icon-id="TIME" class-names="timestamp-icon"></gads-icon>
          <span class="glue-label timestamp-duration">${this.time}</span>
        </span>
      </span>
    `
        }
    }
    ;
    customElements.define("gads-time-pill", Mb);
    var Nb, Ob = ()=>Nb ? Nb : window.YT ? new Promise(a=>{
        a(!0)
    }
    ) : Nb = new Promise((a,b)=>{
        window.onYouTubeIframeAPIReady = ()=>{
            try {
                a(!0)
            } catch (c) {
                b(c)
            }
        }
        ;
        if (null === document.getElementById("youtube-api")) {
            const c = document.createElement("script");
            c.id = "youtube-api";
            const d = document.getElementsByTagName("script")[0];
            d && d.parentNode ? (c.setAttribute("src", "https://www.youtube.com/iframe_api"),
            d.parentNode.insertBefore(c, d)) : console.log("No script tag in the dom to attach to")
        }
    }
    ), Pb = class extends L {
        constructor() {
            super(...arguments);
            this._modalOpenState = !1;
            this._vidEl = this.querySelector(".glue-video");
            this._modalEl = this.querySelector(".glue-modal");
            this._playerInstance = null
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._vidEl = this.querySelector(".glue-video"));
            if (l.GLUE in window && this._vidEl && (this._vidEl = this.querySelector(".glue-video"),
            this._modalEl = this.querySelector(".glue-modal"),
            null !== this._vidEl)) {
                if (this.showInline)
                    Ob().then(()=>{
                        this._playerInstance || (this._playerInstance = new glue.YoutubeVideo(this._vidEl))
                    }
                    );
                else {
                    if (null === this._modalEl)
                        return;
                    const a = this.querySelector(la.GLUE_MODAL)
                      , b = new glue.Modal(a,this._vidEl.firstElementChild);
                    this._vidEl.addEventListener(x.CLICK, async()=>{
                        await Ob();
                        this._playerInstance || (this._playerInstance = new glue.YoutubeVideo(this._modalEl));
                        b.open()
                    }
                    );
                    this._vidEl.addEventListener(x.KEYPRESS, async c=>{
                        c.code !== C.ENTER && c.code !== C.SPACE || this.modalIsOpen || (c.preventDefault(),
                        await Ob(),
                        this._playerInstance || (this._playerInstance = new glue.YoutubeVideo(this._modalEl)),
                        b.open())
                    }
                    );
                    a.addEventListener(x.GLUE_MODAL_OPEN, ()=>{
                        this.modalOpenState = !0
                    }
                    );
                    a.addEventListener(x.GLUE_MODAL_CLOSED, ()=>{
                        var c;
                        this.modalOpenState = !1;
                        const d = null === (c = this._playerInstance) || void 0 === c ? void 0 : c.getPlayer();
                        d && d.pauseVideo()
                    }
                    )
                }
                Q.subscribe(a=>{
                    var b;
                    const {XL: c, LG: d, MD: e, SM: f} = r;
                    [c, d, e, f].includes(a) && (a = null === (b = this._playerInstance) || void 0 === b ? void 0 : b.getPlayer()) && a.pauseVideo()
                }
                )
            }
        }
        set modalOpenState(a) {
            this._modalOpenState = a
        }
        get modalIsOpen() {
            return this._modalOpenState
        }
        get videoId() {
            return this.getAttribute("video-id") || ""
        }
        get poster() {
            return this.getAttribute("poster") || ""
        }
        get posterImages() {
            return this.getAttribute("poster-images") || ""
        }
        get showInline() {
            return this.hasAttribute("inline")
        }
        get widths() {
            return this.getAttribute(u.WIDTHS) || ""
        }
        get displayType() {
            return this.showInline ? "inline" : "modal"
        }
        get ctaButton() {
            return this.getAttribute(u.CTA)
        }
        get youtubeData() {
            return this.getAttribute("youtube-data")
        }
        get hasPosterImage() {
            return this.hasAttribute("poster-images") || this.hasAttribute("poster")
        }
        get modalBtnInfo() {
            return {
                dest: this.getAttribute("video-btn-destination") || "",
                text: this.getAttribute("video-btn-text") || ""
            }
        }
        get modalLabels() {
            return this.getAttribute(u.MODAL_ARIA_LABELS) || ""
        }
        get ariaAlt() {
            return this.getAttribute("alt-text") || ""
        }
        get isEagerLoading() {
            return this.hasAttribute("loading-eager")
        }
        get isHighPriority() {
            return this.hasAttribute("priority-high")
        }
        classNameLookup(a) {
            return {
                "play-button": "glue-video__play-button",
                "play-button-red": "glue-video__play-button--red",
                "play-button-white": "glue-video__play-button--white"
            }[a] || ""
        }
        inline() {
            return h`
      <div class="glue-video__container glue-video__container--inline"
          data-glue-yt-video-vid="${this.videoId}"></div>
    `
        }
        modal() {
            return h`
      <div class="glue-modal glue-modal--dark gads-video-modal" role="dialog" aria-modal="true">
        <button class="glue-modal__close-btn" aria-label="${this.modalLabels}"></button>
        <section
            class="glue-video__container glue-modal__content-wrapper"
            data-glue-yt-video-vid="${this.videoId}"
            data-glue-yt-video-height="100%"
            data-glue-yt-video-width="100%">
        </section>
        ${this.modalBtnInfo.text ? h`
          <gads-button
              cta-text="${this.modalBtnInfo.text}"
              cta-url="${this.modalBtnInfo.dest}"
              cta-name="yt-modal-btn-${this.videoId}">
          </gads-button>
        ` : ""}
      </div>
    `
        }
        posterImage() {
            return this.poster ? h`
        <gads-image
            alt-text="${this.ariaAlt}"
            image-class="glue-video__preview-image"
            image='${this.poster}'
            picture-class="glue-video__preview"
            widths="${this.widths}"
            ${this.isEagerLoading ? "loading-eager" : ""}
            ${this.isHighPriority ? "priority-high" : ""}>
        </gads-image>
      ` : h`
        <gads-image
            image-class="glue-video__preview-image"
            images="${this.posterImages}"
            picture-class="glue-video__preview"
            widths="${this.widths}"
            ${this.isEagerLoading ? "loading-eager" : ""}
            ${this.isHighPriority ? "priority-high" : ""}>
        </gads-image>
      `
        }
        posterOverlay() {
            const a = this.getAttribute("video-label") || null;
            var b = this.getAttribute("poster-icon-color") || null;
            b = b ? this.classNameLookup(b) : "";
            b = `${this.classNameLookup("play-button")} ${b}`.trim();
            return h`
      <gads-icon icon-id="VIDEO_YOUTUBE" class-names="${b}"></gads-icon>
      ${a ? h`
        <div class="glue-video__label-container">
          <p class="glue-video__label glue-video__label--light glue-video__label--highlight glue-font-weight-medium">${a}</p>
        </div>
      ` : ""}
    `
        }
        posterDuration() {
            const a = this.getAttribute("show-duration")
              , b = this.getAttribute("duration-label");
            return a ? h`
      <gads-time-pill time="${a}" time-aria-label="${b}" template="dark"></gads-time-pill>
    ` : ""
        }
        youtubeCta() {
            const a = this.ctaButton ? JSON.parse(this.ctaButton) : "";
            return h`
      <div class="glue-video" data-glue-yt-video-vid="${this.videoId}">
        <gads-button ${this.unpackCta(a)}></gads-button>
      </div>
      ${this.modal()}
    `
        }
        render() {
            return g`
      <div class="glue-video">
        ${this.hasPosterImage ? h`
          <div class="glue-video__preview-container
              glue-video__preview-container--${this.displayType}" tabindex="0" role="button">
            ${this.posterImage()}
            <div class="glue-video__info">
              ${this.posterOverlay()}
              ${this.posterDuration()}
            </div>
          </div>
          ${this.showInline ? this.inline() : this.modal()}
        ` : this.youtubeCta()}
      </div>
    `
        }
    }
    ;
    customElements.define("gads-video", Pb);
    var X = {};
    X.AWPrefetch = gb;
    X.ChatImplementation = cb;
    X.EditableImage = rb;
    X.EditableImageInner = sb;
    X.GadsAdsGuide = hb;
    X.GadsBanner = ib;
    X.GadsButton = jb;
    X.GadsCarousel = lb;
    X.GadsChatWidgetThirdParty = qb;
    X.GadsChatbot = nb;
    X.GadsComponent = L;
    X.GadsCustomCarousel = xb;
    X.GadsImage = tb;
    X.GadsImageCTA = ub;
    X.GadsIncentivesBanner = wb;
    X.GadsJumplinkBasicCard = yb;
    X.GadsJumplinkListCard = zb;
    X.GadsJumplinkVideoCard = Ab;
    X.GadsPresentationalVideo = Cb;
    X.GadsSingleSignOn = Fb;
    X.GadsSingleSignOnV2 = Gb;
    X.GadsSocial = Hb;
    X.GadsStickyCTA = Lb;
    X.GadsTimePill = Mb;
    X.GadsVideo = Pb;
    X.SubIDOperations = La;
    var Qb = class extends L {
        constructor() {
            super(...arguments);
            this.aria_button_selected = this.a11y_check_copy = this.facets = this.headline = "";
            this._facetPillEls = this.querySelectorAll(".facet-pill");
            this._imageSlotEls = this.querySelectorAll(".image-slot");
            this._textColumnEls = this.querySelectorAll(".text-column");
            this._textColumnWrapper = this.querySelector(".text-column-wrapper");
            this._pillsWrapper = this.querySelector(".facet-pills-wrapper");
            this._pillsSmMdSlide = this.querySelector(".facet-pills-container");
            this._pillBorderAnim = void 0;
            this._facetActiveIndex = 0;
            this._isReducedMotion = J.isReducedMotion;
            this._hasHoverListeners = this._isAccessible = this._pillsShouldSlide = !1;
            this._pillsAnimDuration = 8E3;
            this._pillsSlideDuration = 200;
            this.transitionPlay = ()=>{
                this._pillBorderAnim && "idle" !== this._pillBorderAnim.playState && this._pillBorderAnim.play()
            }
            ;
            this.transitionPause = ()=>{
                this._pillBorderAnim && "idle" !== this._pillBorderAnim.playState && this._pillBorderAnim.pause()
            }
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._facetPillEls = this.querySelectorAll(".facet-pill"),
            this._imageSlotEls = this.querySelectorAll(".image-slot"),
            this._textColumnEls = this.querySelectorAll(".text-column"),
            this._pillsWrapper = this.querySelector(".facet-pills-wrapper"),
            this._pillsSmMdSlide = this.querySelector(".facet-pills-container"),
            this._textColumnWrapper = this.querySelector(".text-column-wrapper"));
            this.scrollOnClick();
            this.setShouldSlide();
            Q.subscribe(()=>{
                this.setShouldSlide()
            }
            );
            l.INTERSECTION_OBS in window ? (new IntersectionObserver(this.componentInViewport.bind(this),{
                root: null,
                rootMargin: "0px",
                threshold: 0
            })).observe(this._facetPillEls[1]) : (this.facetTransition(),
            this.addListeners())
        }
        get gtmModuleName() {
            return this.nodeName
        }
        componentInViewport(a, b) {
            for (const c of a)
                c.isIntersecting && (this.facetTransition(),
                this.addListeners(),
                b.disconnect())
        }
        setShouldSlide() {
            this._pillsSmMdSlide && this._pillsWrapper && (this._pillsShouldSlide = this._pillsSmMdSlide.scrollWidth > this._pillsWrapper.scrollWidth)
        }
        addListeners() {
            for (const [b,c] of this._facetPillEls.entries())
                c.addEventListener(x.CLICK, ()=>{
                    this.showFacetActive(b)
                }
                );
            this.addHoverListeners();
            const a = this.querySelector("#adsFormatA11yCheck");
            a.addEventListener(x.CHANGE, ()=>{
                (this._isAccessible = a.checked) && this._pillBorderAnim ? (this._pillBorderAnim.cancel(),
                this.removeHoverListeners()) : this._hasHoverListeners || (this.facetTransition(),
                this.addHoverListeners())
            }
            )
        }
        showFacetActive(a) {
            this._pillBorderAnim && this._pillBorderAnim.cancel();
            const b = a === this._facetActiveIndex
              , c = !(this._facetPillEls.length - 1 !== a || !this._pillsShouldSlide);
            for (const d of this.facetActiveEls)
                d.classList.remove(w.ACTIVE);
            this._facetActiveIndex = a % this._facetPillEls.length;
            for (const d of this.facetActiveEls)
                d.classList.add(w.ACTIVE);
            this._isAccessible || (b || c ? this.removeHoverListeners() : this.facetTransition())
        }
        get facetActiveEls() {
            return [this._facetPillEls[this._facetActiveIndex], this._imageSlotEls[this._facetActiveIndex], this._textColumnEls[this._facetActiveIndex]]
        }
        facetTransition() {
            this._pillsShouldSlide && this.pillsSmMdSlide();
            l.ANIMATE in HTMLElement.prototype && !this._isReducedMotion && this.pillBorderAnimInit()
        }
        pillBorderAnimInit() {
            const a = this._facetPillEls[this._facetActiveIndex + 1] || this._facetPillEls[0]
              , b = a.querySelector(".facet-pill-border rect")
              , c = b.getTotalLength() + 5;
            b.style.strokeDasharray = c.toString();
            b.style.strokeDashoffset = c.toString();
            b.classList.add("next");
            this._pillBorderAnim = b.animate([{
                strokeDashoffset: c,
                strokeWidth: 4
            }, {
                strokeDashoffset: 0,
                strokeWidth: 4,
                offset: .98,
                easing: "cubic-bezier(0.11, 0, 0.5, 0)"
            }, {
                strokeDashoffset: 0,
                strokeWidth: 8,
                easing: "ease-out"
            }], {
                duration: this._pillsAnimDuration,
                delay: this._pillsShouldSlide ? this._pillsSlideDuration : 0,
                fill: "forwards"
            });
            this.addCurrentAnimListeners(a, b)
        }
        addCurrentAnimListeners(a, b) {
            a.addEventListener(x.MOUSEOVER, this.transitionPause);
            a.addEventListener(x.MOUSELEAVE, this.transitionPlay);
            const c = this._pillBorderAnim;
            c && (c.onfinish = ()=>{
                b.classList.remove("next");
                this.showFacetActive(this._facetActiveIndex + 1)
            }
            ,
            c.oncancel = ()=>{
                this.removeCurrentAnimListeners(a);
                b.classList.remove("next")
            }
            )
        }
        removeCurrentAnimListeners(a) {
            a.removeEventListener(x.MOUSEOVER, this.transitionPause);
            a.removeEventListener(x.MOUSELEAVE, this.transitionPlay)
        }
        addHoverListeners() {
            this._textColumnWrapper && (this._textColumnWrapper.addEventListener(x.MOUSEOVER, this.transitionPause.bind(this)),
            this._textColumnWrapper.addEventListener(x.MOUSELEAVE, this.transitionPlay.bind(this)),
            this._hasHoverListeners = !0)
        }
        removeHoverListeners() {
            this._textColumnWrapper && (this._textColumnWrapper.removeEventListener(x.MOUSEOVER, this.transitionPause.bind(this)),
            this._textColumnWrapper.removeEventListener(x.MOUSELEAVE, this.transitionPlay.bind(this)),
            this._hasHoverListeners = !1)
        }
        pillsSmMdSlide() {
            const a = this._facetPillEls[this._facetActiveIndex]
              , b = Q.getBpName() === r.SM ? na.SM : na.MD;
            this._pillsSmMdSlide.scrollTo({
                left: a.offsetLeft - b,
                top: 0,
                behavior: this._isReducedMotion ? E.AUTO : E.SMOOTH
            })
        }
        scrollOnClick() {
            const a = ()=>{
                const b = {
                    top: this._pillsWrapper.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: this._isReducedMotion ? E.AUTO : E.SMOOTH
                };
                window.scroll(b)
            }
            ;
            Q.getBpName() === (r.SM || r.MD) && this._pillsWrapper.addEventListener(x.CLICK, a);
            Q.subscribe(b=>{
                const {SM: c, MD: d} = r;
                [c, d].includes(b) ? this._pillsWrapper.addEventListener(x.CLICK, a) : this._pillsWrapper.removeEventListener(x.CLICK, a)
            }
            )
        }
        get facetPills() {
            return this.facetItems.map((a,b)=>h`
        <li class="facet-list-item">
          <button class="facet-pill ${0 === b ? w.ACTIVE : ""}">
            <gads-icon class-names="facet-icon" icon-id="${a.icon}"></gads-icon>
            ${a.name}
            <span class="screen-reader-only">- ${this.ariaButtonSelected}</span>
            <svg class="facet-pill-border" height="52" width="100%" role="presentation" aria-hidden="true">
              <rect height="52" width="100%" ry="26"/>
            </svg>
          </button>
        </li>
      `).join("")
        }
        get textColumns() {
            return this.facetItems.map((a,b)=>h`
        <div class="text-column ${0 === b ? w.ACTIVE : ""}">
          <h3 class="glue-headline glue-headline--headline-3">
            ${a.subheadline}
          </h3>
          <p class="text-column-copy">${a.copy}</p>
          <div class="cta-container">
            ${this.textColumnCtaBlock(a.cta)}
          </div>
        </div>
      `).join("")
        }
        textColumnCtaBlock(a) {
            return (a = "string" === typeof a ? JSON.parse(a) : a) ? a.map(b=>h`<gads-button ${this.unpackCta(b)}></gads-button>`) : ""
        }
        get imageSlots() {
            return this.facetItems.map((a,b)=>{
                a = this.formatMultiImage(a.images, !0);
                return h`
        <div class="image-slot ${0 === b ? w.ACTIVE : ""}">
          <gads-image
              images="${a}"
              widths="lg:390,md:770,sm:533"
              loading-eager>
          </gads-image>
        </div>
      `
            }
            ).join("")
        }
        get headlineTxt() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get facetItems() {
            const a = this.getAttribute("facets") || this.facets;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get ariaButtonSelected() {
            return this.getAttribute("aria-button-selected") || this.aria_button_selected
        }
        get a11yCheckCopy() {
            return this.getAttribute("accessibility-check-copy") || this.a11y_check_copy
        }
        render() {
            return g`
      <section class="glue-page glue-spacer-5-top glue-spacer-5-bottom">
        <div class="glue-grid">
          <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-md"></div>
          <div class="headline-wrapper glue-text-center
              glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md">
            <h2 class="glue-headline glue-headline--headline-2">
              ${this.headlineTxt}
            </h2>
            <div class="screen-reader-hidden-interaction glue-spacer-3-bottom">
              <input type="checkbox" id="adsFormatA11yCheck" aria-labelledby="adsFormatA11yCheck-label">
              <label id="adsFormatA11yCheck-label" for="adsFormatA11yCheck" aria-hidden="true">${this.a11yCheckCopy}</label>
            </div>
          </div>
          <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-xl"></div>
          <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-xl"></div>
          <div class="facet-pills-wrapper
              glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-12-md
              glue-grid__col--span-3-lg">
            <ul class="facet-pills-container">
              ${this.facetPills}
            </ul>
          </div>
          <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-md glue-grid__col--span-0-lg"></div>
          <div class="image-slot-wrapper glue-text-center
              glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md
              glue-grid__col--span-5-lg glue-grid__col--span-4-xl">
            ${this.imageSlots}
          </div>
          <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-md glue-grid__col--span-0-lg"></div>
          <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-md glue-grid__col--span-0-lg"></div>
          <div class="text-column-wrapper glue-text-center
              glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md
              glue-grid__col--span-4-lg glue-grid__col--span-3-xl">
            ${this.textColumns}
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-ads-format", Qb);
    var Rb = class extends L {
        constructor() {
            super(...arguments);
            this.reduced_motion_alt_headline = this.animation_play_tooltip = this.animation_pause_tooltip = this.animated_items = "";
            this.static_version = this.reversed = !1;
            this.subheadline = this.static_text = "";
            this.currentAnimatedItem_ = 0;
            this.headlineAnimation = null;
            this.headlines = [];
            this.imageAnimation = null;
            this.images = [];
            this.stateMap = new Map;
            this.animationButtons = {};
            this.subHeadlineCont = this.querySelector(".subheadline-content");
            this.reducedMotionAlt = this.querySelector(".reduced-motion-alt");
            this.heroSection = this.querySelector(".gads-animated-hero")
        }
        connectedCallback() {
            var a, b, c, d, e, f;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.subHeadlineCont = this.querySelector(".subheadline-content"),
            this.reducedMotionAlt = this.querySelector(".reduced-motion-alt"),
            this.heroSection = this.querySelector(".gads-animated-hero"));
            if ((null === (b = null === (a = this.firstElementChild) || void 0 === a ? void 0 : a.classList) || void 0 === b ? 0 : b.contains("reverse-order")) || (null === (d = null === (c = this.firstElementChild) || void 0 === c ? void 0 : c.classList) || void 0 === d ? 0 : d.contains("reverse-order-static")))
                this.isReverseContent = !0;
            if (null === (f = null === (e = this.firstElementChild) || void 0 === e ? void 0 : e.classList) || void 0 === f ? 0 : f.contains("static-version"))
                this.isStaticVersion = !0;
            this.headlines = [...this.querySelectorAll(".cycling-headline")];
            this.images = [...this.querySelectorAll(".cycling-image")];
            this.animationButtons = {
                play: this.querySelector(".play"),
                pause: this.querySelector(".pause")
            };
            const k = this.querySelector(".aria-headline");
            a = ()=>{
                const n = parseInt(window.getComputedStyle(this.heroSection).paddingTop)
                  , t = this.subHeadlineCont.offsetHeight
                  , B = parseInt(window.getComputedStyle(this.reducedMotionAlt).marginTop);
                let q = this.reducedMotionAlt.offsetHeight + B;
                const F = 1.5 * n + q + t;
                this.images[1].style.top = `${F}px`;
                this.images[3].style.top = `${F}px`;
                (new ResizeObserver(D=>{
                    D = D[0];
                    q = D.contentBoxSize ? (Array.isArray(D.contentBoxSize) ? D.contentBoxSize[0] : D.contentBoxSize).blockSize + B : D.contentRect.height + B;
                    D = 1.5 * n + q + t;
                    this.images[1].style.top = `${D}px`;
                    this.images[3].style.top = `${D}px`
                }
                )).observe(this.reducedMotionAlt)
            }
            ;
            const m = ea(a.bind(this), G.FIFTY);
            this.prefersReducedMotion() && (k.style.display = ja.NONE,
            this.isReverseContent && this.firstElementChild && this.firstElementChild.classList.remove("reverse-order"),
            a(),
            window.addEventListener(x.RESIZE, ()=>m()));
            J.subscribe(n=>{
                n ? (this.clearAnimations(),
                k.style.display = ja.NONE,
                this.isReverseContent && this.firstElementChild && this.firstElementChild.classList.remove("reverse-order"),
                m()) : (this.setUpAnimation(),
                k.style.display = ja.BLOCK,
                this.isReverseContent && this.firstElementChild && this.firstElementChild.classList.add("reverse-order"))
            }
            );
            this.stateMap = new Map(this.headlines.map((n,t)=>[t, t + 1 >= this.headlines.length ? 0 : t + 1]));
            this.setUpAnimation();
            window.addEventListener(x.LOAD, ()=>{
                this.isDev && this.isStaticVersion && this.validateStaticHeadlineCopy()
            }
            );
            window.addEventListener(x.DOM_CONTENT_LOADED, ()=>this.alignTextOnResize())
        }
        get gtmModuleName() {
            return this.nodeName
        }
        animateElements(a, b) {
            var c = [...a.classList].find(k=>k.includes("color-"));
            b.parentElement && b.parentElement.setAttribute("color", `bg-${c}`);
            c = Q.getBpName(window.innerWidth);
            var d = [{
                transform: "translateY(0px)",
                opacity: "1",
                offset: .15
            }, {
                transform: "translateY(0px)",
                opacity: "1",
                offset: .75
            }, {
                transform: "translateY(30px)",
                opacity: "0",
                offset: .9
            }];
            const e = [{
                transform: "translateY(-30px)",
                opacity: "0",
                easing: "ease-out"
            }, ...d];
            d = [{
                transform: "translateY(-60px)",
                opacity: "0",
                easing: "ease-out"
            }, ...d];
            d = {
                sm: e,
                md: e,
                lg: this.isStaticVersion ? e : d,
                xl: this.isStaticVersion ? e : d
            };
            const f = [{
                opacity: "0",
                easing: "ease-out"
            }, {
                opacity: "1",
                offset: .3
            }, {
                opacity: "1",
                offset: .8
            }, {
                opacity: "0",
                offset: 1
            }];
            this.headlineAnimation = this.isStaticVersion ? a.animate(f, 3750) : a.animate(d[c], 3E3);
            this.imageAnimation = b.animate(e, 3E3);
            this.isStaticVersion ? Promise.resolve(this.imageAnimation.finished).then(()=>{
                this.currentAnimatedItem = this.stateMap.get(this.currentAnimatedItem) || 0;
                this.animateElements(this.headlines[this.currentAnimatedItem], this.images[this.currentAnimatedItem])
            }
            ).catch(()=>{
                b.parentElement && b.parentElement.removeAttribute("color")
            }
            ) : Promise.all([this.headlineAnimation.finished, this.imageAnimation.finished]).then(()=>{
                this.currentAnimatedItem = this.stateMap.get(this.currentAnimatedItem) || 0;
                this.animateElements(this.headlines[this.currentAnimatedItem], this.images[this.currentAnimatedItem])
            }
            ).catch(()=>{
                b.parentElement && b.parentElement.removeAttribute("color")
            }
            )
        }
        clearAnimations() {
            this.headlineAnimation && this.headlineAnimation.cancel();
            this.imageAnimation && this.imageAnimation.cancel()
        }
        playButtonHandler() {
            this.headlineAnimation && this.imageAnimation && (this.headlineAnimation.play(),
            this.imageAnimation.play());
            const a = this.images[this.currentAnimatedItem_].firstElementChild;
            "GADS-PRESENTATIONAL-VIDEO" === (null === a || void 0 === a ? void 0 : a.tagName) && a.setAttribute(Bb.PAUSE, "false");
            this.animationButtons.play && this.animationButtons.pause && (this.animationButtons.play.classList.add(w.HIDDEN),
            this.animationButtons.pause.classList.remove(w.HIDDEN))
        }
        pauseButtonHandler() {
            this.headlineAnimation && this.imageAnimation && (this.headlineAnimation.pause(),
            this.imageAnimation.pause());
            const a = this.images[this.currentAnimatedItem_].firstElementChild;
            "GADS-PRESENTATIONAL-VIDEO" === (null === a || void 0 === a ? void 0 : a.nodeName) && a.setAttribute(Bb.PAUSE, "true");
            this.animationButtons.play && this.animationButtons.pause && (this.animationButtons.play.classList.remove(w.HIDDEN),
            this.animationButtons.pause.classList.add(w.HIDDEN))
        }
        setUpAnimation() {
            const {isReducedMotion: a} = J;
            l.ANIMATE in HTMLElement.prototype && !a ? (this.animateElements(this.headlines[0], this.images[0]),
            this.animationButtons.play && this.animationButtons.pause && (this.animationButtons.pause.classList.remove(w.HIDDEN),
            this.animationButtons.play.addEventListener(x.CLICK, ()=>this.playButtonHandler()),
            this.animationButtons.play.addEventListener(x.KEYPRESS, ({code: b})=>{
                if (b === C.SPACE || b === C.ENTER)
                    this.playButtonHandler(),
                    this.animationButtons.pause && this.animationButtons.pause.focus()
            }
            ),
            this.animationButtons.pause.addEventListener(x.CLICK, ()=>this.pauseButtonHandler()),
            this.animationButtons.pause.addEventListener(x.KEYPRESS, ({code: b})=>{
                if (b === C.SPACE || b === C.ENTER)
                    this.pauseButtonHandler(),
                    this.animationButtons.play && this.animationButtons.play.focus()
            }
            ))) : (this.headlines[0].classList.add(w.REDUCED_MOTION),
            this.animationButtons.play && this.animationButtons.pause && (this.animationButtons.pause.classList.add(w.HIDDEN),
            this.animationButtons.play.removeEventListener(x.CLICK, this.playButtonHandler),
            this.animationButtons.play.removeEventListener(x.KEYUP, this.playButtonHandler),
            this.animationButtons.pause.removeEventListener(x.CLICK, this.pauseButtonHandler),
            this.animationButtons.pause.removeEventListener(x.KEYUP, this.pauseButtonHandler)))
        }
        alignTextOnResize() {
            const a = this.querySelector(".animated-hero-items")
              , b = null === a || void 0 === a ? void 0 : a.querySelector(".cycling-headlines-wrapper")
              , c = null === a || void 0 === a ? void 0 : a.querySelector(".spacer");
            if (a && b && c) {
                var d = e=>{
                    a.classList.toggle("animated-hero-items--centered", e < b.offsetWidth + c.offsetWidth)
                }
                ;
                Q.getBpName() === r.LG && d(a.offsetWidth);
                "ResizeObserver"in window && Q.subscribe(e=>{
                    e = [r.SM, r.MD].includes(e);
                    const f = new ResizeObserver(vb(()=>{
                        d(a.offsetWidth)
                    }
                    , G.FIFTY));
                    e ? f.disconnect() : f.observe(a)
                }
                )
            }
        }
        get altHeadline() {
            return this.getAttribute("reduced-motion-alt-headline") || this.reduced_motion_alt_headline
        }
        get animatedItems() {
            const a = this.getAttribute("animated-items") || this.animated_items;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get ariaHeadline() {
            let a = "";
            if (this.isStaticVersion)
                a = this.animatedItems[0].animated_hero_text;
            else
                for (const b of this.animatedItems)
                    a += `${b.animated_hero_text}, `;
            return a = this.isReverseContent ? `${this.staticText} ${a}` : a + this.staticText
        }
        get currentAnimatedItem() {
            return this.currentAnimatedItem_
        }
        set currentAnimatedItem(a) {
            this.currentAnimatedItem_ = a
        }
        get imageContent() {
            return this.animatedItems.map((a,b)=>{
                var c, d;
                if (a.animated_hero_video && Object.hasOwnProperty.call(a.animated_hero_video, "theme")) {
                    const f = a.animated_hero_video;
                    return h`
          <div class="cycling-image cycling-image-${b} color-${a.color}">
            <gads-presentational-video
                ad-title="${f.ad_title}"
                ad-url="${f.ad_url}"
                aria-label="${f.aria_description}"
                autoplay
                icon="${f.icon.url}"
                loop
                overlay-type="${f.overlay_type}"
                theme="${f.theme}"
                video-mp4="${(null === (c = f.video_mp4) || void 0 === c ? void 0 : c.url) || ""}"
                video-webm="${(null === (d = f.video_webm) || void 0 === d ? void 0 : d.url) || ""}"
                width="240px"
            ></gads-presentational-video>
          </div>
        `
                }
                c = a.animated_hero_image;
                d = this.formatMultiImage(c, !0);
                const e = c.every(f=>(f = f.use_html_image && f.html_image && 0 !== Object.keys(f.html_image).length ? f.html_image.image : f.image) ? f.height > f.width : !1);
                return h`
          <div class="cycling-image cycling-image-${b} color-${a.color}">
            <gads-image
                images="${d}"
                widths="${(()=>this.isStaticVersion ? e ? "xl:230,lg:180,md:170,sm:215" : "xl:290,lg:220,md:210,sm:270" : this.isReverseContent ? e ? "lg:175,sm:158" : "lg:230,sm:240" : e ? "lg:230,sm:190" : "lg:290,sm:270")()}"
                round-corners
                lazy
            ></gads-image>
          </div>
        `
            }
            ).join("")
        }
        get isReverseContent() {
            return this.hasAttribute("reversed") || this.reversed
        }
        set isReverseContent(a) {
            this.reversed = a
        }
        get isStaticVersion() {
            return this.hasAttribute("static-version") || this.static_version
        }
        set isStaticVersion(a) {
            this.static_version = a
        }
        get staticText() {
            return this.getAttribute("static-text") || this.static_text
        }
        get subHeadline() {
            return this.getAttribute(u.SUBHEADLINE) || this.subheadline
        }
        get tooltipPause() {
            return this.getAttribute("tooltip-pause") || this.animation_pause_tooltip
        }
        get tooltipPlay() {
            return this.getAttribute("tooltip-play") || this.animation_play_tooltip
        }
        animationClass() {
            const a = this.isReverseContent
              , b = this.isStaticVersion;
            let c = "";
            !b && a ? c = "reverse-order" : b && !a ? c = "static-version" : b && a && (c = "static-version reverse-order-static");
            return c
        }
        validateStaticHeadlineCopy() {
            const a = this.querySelector(".static-version-headlines");
            var b = a.querySelector(la.GLUE_HEADLINE);
            b = 3 * (parseInt(window.getComputedStyle(b).getPropertyValue("line-height")) + 2);
            const c = a.clientHeight
              , d = h`
      <div class="error-message">Headline copy does not fit in 3 lines</div>
    `;
            c > b && (a.innerHTML = d)
        }
        isStaticLongCopy() {
            return 40 <= (this.animatedItems[0].animated_hero_text + this.staticText).replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, "").length
        }
        cyclingHeadlinesRender() {
            return h`
      <div class="cycling-headlines-wrapper glue-text-center" aria-hidden="true">
        ${this.animatedItems.map(a=>h`
            <h2 class="glue-headline cycling-headline hero-headline color-${a.color}">
              <span class="glue-font-weight-bold">${a.animated_hero_text}</span>
            </h2>
          `).join("")}
      </div>
      <div class="static-text">
        <div class="static-headline-wrapper">
          <p class="glue-headline glue-text-center">
            <span class="hero-headline glue-font-weight-bold">${this.staticText}</span>
            ${this.animationControlsRender()}
          </p>
        </div>
      </div>
    `
        }
        staticHeadlinesRender() {
            const a = this.isStaticLongCopy() ? "long-version" : ""
              , b = this.isReverseContent
              , c = e=>`
      <span class="glue-headline cycling-headline color-${e.color}">
        ${this.animatedItems[0].animated_hero_text}
      </span>
    `
              , d = `
      <span class="glue-headline static-headline">
        ${this.staticText}
      </span>
    `;
            return h`
      <div class="static-version-headlines ${a}" aria-hidden="true">
        ${this.animatedItems.map(e=>h`
            <div class="headline-wrapper">
              ${b ? d + c(e) : c(e) + d}
            </div>
          `).join("")}
      </div>
    `
        }
        headlinesRender() {
            return this.animatedItems.map(a=>h`
        <div class="glue-headline cycling-headline hero-headline color-${a.color}">
          <span class="glue-font-weight-bold">${a.animated_hero_text}</span>
        </div>
      `).join("")
        }
        animationControlsRender() {
            return h`
      <div class="animation-control-btn-wrapper">
        <button class="play hidden" aria-label="${this.tooltipPlay}">
          <svg role="presentation" width="28" height="28" viewBox="0 0 28 28">
            <path fill="#5f6368" d="M.666 14C.666 6.64 6.639.667 13.999.667S27.333 6.64 27.333 14s-5.974 13.333-13.334 13.333C6.64 27.333.666 21.36.666 14Zm18.667 0-8-6v12l8-6Z" />
          </svg>
        </button>
        <div class="tooltip"><p class="tooltip-content">${this.tooltipPlay}</p></div>
        <button class="pause" aria-label="${this.tooltipPause}">
          <svg role="presentation" width="28" height="28" viewBox="0 0 28 28">
            <path fill="#5f6368" fill-rule="evenodd" clip-rule="evenodd" d="M14 .667C6.64.667.665 6.64.665 14s5.973 13.333 13.333 13.333S27.333 21.36 27.333 14 21.359.667 13.999.667Zm-1.334 18.666H9.999V8.667h2.667v10.666Zm2.667 0h2.666V8.667h-2.666v10.666Z" />
          </svg>
        </button>
        <div class="tooltip"><p class="tooltip-content">${this.tooltipPause}</p></div>
      </div>
    `
        }
        render() {
            var a;
            const b = this.isStaticVersion
              , c = b ? "glue-page" : "";
            return g`
      <section class="gads-animated-hero glue-spacer-6-bottom glue-spacer-6-top
          ${this.animationClass()}">
        <h1 class="glue-visually-hidden aria-headline">${this.ariaHeadline}</h1>
        <div class="animated-hero-items ${c}">
          ${b ? this.staticHeadlinesRender() : this.cyclingHeadlinesRender()}
          <div class="spacer">
            <div class="cycling-images-wrapper">
              ${this.imageContent}
            </div>
            ${b ? this.animationControlsRender() : ""}
          </div>
        </div>
        <div class="reduced-motion-alt" role="heading" aria-level="1"
            aria-label="${null === (a = this.altHeadline) || void 0 === a ? void 0 : a.replace(/<[^>]*>?/gm, "").replace("&nbsp;", " ")}">
          <div class="glue-page">
            <h2 class="glue-headline reduced-motion-alt--headline">
              <span class="glue-font-weight-bold">${this.altHeadline}</span>
            </h2>
          </div>
        </div>
        <div class="glue-page subheadline-content">
          <div class="subheadline glue-text-center glue-spacer-4-bottom">
            <p class="glue-body--large">${this.subHeadline}</p>
          </div>
          <div class="ctas glue-text-center hero-cta">
            ${this.ctaBlock}
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-animated-hero", Rb);
    var Sb = class extends L {
        constructor() {
            super(...arguments);
            this._panelPadding = 24;
            this._panelMemo = [];
            this._animation = void 0;
            this.animated_text_items = null;
            this.bg_color = "";
            this.carousel_aria_labels = null;
            this.media_alignment = this.headline = this.copy = ""
        }
        connectedCallback() {
            let a = this.querySelector(".panels");
            a || (this.replaceChildren(this.render()),
            a = this.querySelector(".panels"));
            this._panelList = null === a || void 0 === a ? void 0 : a.querySelectorAll(".panel");
            const b = null === a || void 0 === a ? void 0 : a.querySelectorAll("a");
            b && b.forEach(c=>{
                c.addEventListener(x.FOCUS, ({target: d})=>{
                    d = d.closest("li");
                    const e = null === d || void 0 === d ? void 0 : d.classList.contains(w.ACTIVE);
                    d && !e && this.goToPanel(d);
                    this._animation && this._animation.pause()
                }
                )
            }
            );
            this._panelList && this._panelList.forEach(c=>{
                c.addEventListener(x.CLICK, ({target: d})=>{
                    d.classList.contains("main-copy-item") && (this.goToPanel(d),
                    this._animation && this._animation.pause())
                }
                );
                c.addEventListener(x.BLUR, ()=>{
                    this._animation && this._animation.play()
                }
                );
                c.addEventListener(x.FOCUS, ({target: d})=>{
                    this.goToPanel(d);
                    this._animation && this._animation.pause()
                }
                )
            }
            );
            a.addEventListener(x.MOUSEOVER, ()=>{
                this._animation && this._animation.pause()
            }
            );
            a.addEventListener(x.MOUSELEAVE, ()=>{
                this._animation && this._animation.play()
            }
            );
            if (l.INTERSECTION_OBS in window) {
                const c = new IntersectionObserver((d=>{
                    for (const e of d)
                        e.isIntersecting && (d = this.querySelector(".active"),
                        this.startIndicator(d),
                        c.unobserve(this))
                }
                ).bind(this),{
                    threshold: .5
                });
                c.observe(this)
            }
            Q.subscribe(c=>{
                const {XL: d, LG: e} = r;
                c = [d, e].includes(c);
                const f = ea(this.updatePanelHeight.bind(this), 35);
                c && (this.updatePanelHeight(),
                window.addEventListener(x.RESIZE, ()=>f()))
            }
            );
            window.addEventListener(x.LOAD, ()=>{
                l.GLUE in window && (a.classList.add("js-connected"),
                this.updatePanelHeight(),
                this.pauseIndicator())
            }
            );
            l.MATCH_MEDIA in window && window.matchMedia("(orientation: portrait)").addEventListener(x.CHANGE, ()=>{
                this.updatePanelHeight()
            }
            );
            this.setBackgroundColor()
        }
        setBackgroundColor() {
            this.classList.add(`bg-${this.firstElementChild.dataset.bgColor}`)
        }
        goToPanel(a) {
            const b = this.querySelector(".active")
              , c = this.querySelector(`#${null === b || void 0 === b ? void 0 : b.id}-image`)
              , d = this.querySelector(`#${a.id}-image`);
            b && b.classList.replace(w.ACTIVE, "inactive");
            a.classList.replace("inactive", w.ACTIVE);
            c && c.classList.add("hidden");
            d && d.classList.remove("hidden");
            this.updatePanelHeight()
        }
        updatePanelHeight() {
            var a;
            this.clearIndicator();
            var b = this.querySelectorAll(".inactive");
            const c = this.querySelector(".active");
            for (var d of b)
                d.style.height = `${d.firstElementChild.offsetHeight}px`;
            b = c.firstElementChild;
            d = null === (a = c.firstElementChild) || void 0 === a ? void 0 : a.nextElementSibling;
            c.style.height = `${b.offsetHeight + d.offsetHeight + this._panelPadding}px`;
            l.ANIMATE in HTMLElement.prototype && this.startIndicator(c)
        }
        startIndicator(a) {
            this._animation = a.animate({
                top: ["-100%", "0%"]
            }, {
                duration: 8E3,
                pseudoElement: "::after"
            });
            this.indicatorFinishedHandler()
        }
        pauseIndicator() {
            this._animation && this._animation.pause()
        }
        clearIndicator() {
            this._animation && this._animation.cancel()
        }
        indicatorFinishedHandler() {
            this._animation && this._animation.addEventListener(x.FINISH, ()=>{
                if (this._panelList)
                    for (const [a,b] of this._panelList.entries())
                        if (b.classList.contains(w.ACTIVE)) {
                            this.goToPanel(a < this._panelList.length - 1 ? this._panelList[a + 1] : this._panelList[0]);
                            break
                        }
            }
            )
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get backgroundColor() {
            return this.getAttribute("bg-color") || this.bg_color
        }
        get carouselCards() {
            return this.encodeJson(this.panelObjects)
        }
        get mainHeadline() {
            return this.headline || this.getAttribute(u.HEADLINE) || ""
        }
        get mainCopy() {
            return this.copy || this.getAttribute(u.COPY) || ""
        }
        get mediaAlignment() {
            return this.media_alignment || this.getAttribute(u.MEDIA_ALIGNMENT) || ""
        }
        get panelMemo() {
            return this._panelMemo
        }
        set panelMemo(a) {
            this._panelMemo = a
        }
        get panelObjects() {
            if (this._panelMemo.length)
                return this._panelMemo;
            let a = this.animated_text_items || this.getAttribute("animated-text-items") || "";
            if ("string" === typeof a)
                try {
                    a = JSON.parse(a)
                } catch (b) {
                    throw Error("Card info is in an incompatible format");
                }
            return this._panelMemo = a.map(b=>{
                const {body: c, title: d} = b;
                return {
                    body: c,
                    images: this.formatMultiImage(b.imgs, !1),
                    title: d
                }
            }
            )
        }
        get carouselAriaLabels() {
            var a = this.carousel_aria_labels || this.getAttribute(u.CAROUSEL_ARIA_LABELS);
            a = "string" === typeof a ? JSON.parse(a) : a;
            return encodeURI(JSON.stringify(a))
        }
        render() {
            const a = "Right" === this.mediaAlignment
              , b = a ? "glue-order-2-xl glue-order-2-lg" : "glue-order-1-xl glue-order-1-lg";
            return g`
      <div class="glue-page" data-bg-color="${this.backgroundColor}">
        <div class="glue-grid">
          <div class="glue-grid__col glue-grid__col--span-2 glue-grid__col--span-1-lg glue-grid__col--span-2-xl"></div>
          <div class="glue-grid__col glue-grid__col--span-8 glue-grid__col--span-10-lg glue-grid__col--span-8-xl headline-container">
            <h2 class="glue-headline glue-headline--headline-2 glue-spacer-2-bottom glue-spacer-1-top animated-headline" aria-label="${this.mainHeadline}">
              <span class="glue-font-weight-medium">${this.mainHeadline}</span>
            </h2>
            <p class="main-copy">${this.mainCopy}</p>
          </div>
          <div class="glue-grid__col glue-grid__col--span-2 glue-grid__col--span-1-lg glue-grid__col--span-2-xl"></div>
          <div class="glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-2-md glue-grid__col--span-1"></div>
          <div class="glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-8-md glue-grid__col--span-5 ${a ? "glue-order-1-xl glue-order-1-lg" : "glue-order-2-xl glue-order-2-lg"}">
            <div class="panels-container glue-text-center">
              <ul class="panels glue-no-bullet" role="list">
                ${this.panelObjects.map((c,d)=>h`
                    <li id="panel-${d}" class="panel glue-spacer-4-bottom main-copy-item ${0 === d ? w.ACTIVE : "inactive"}" tabindex="0">
                      <h3 class="glue-headline glue-headline--headline-5 glue-spacer-2-bottom" aria-label="${c.title} - ${c.images[0].alt}">${c.title}</h3>
                      <p class="glue-spacer-1-bottom panel-body">${c.body}</p>
                    </li>
                  `)}
              </ul>
              <div class="main-btn-container glue-spacer-3-bottom">
                ${this.ctaBlock}
              </div>
            </div>
          </div>
          <div class="glue-grid__col glue-grid__col--span-5 panel-images-wrapper ${b}" aria-hidden="true">
            <div class="panel-images">
              ${this.panelObjects.map((c,d)=>(c = c.images) ? h`
                    <div id="panel-${d}-image" class="panel-image-container ${0 === d ? "" : "hidden"}">
                      <div class="panel-image">
                        <gads-image images='${encodeURI(JSON.stringify(c))}' widths="xl:504,lg:428" round-corners lazy></gads-image>
                      </div>
                    </div>
                  ` : "")}
            </div>
          </div>
        </div>
        <div class="carousel-container">
          <gads-carousel
              animated-text
              cards='${this.carouselCards}'
              cards-per-page="1"
              carousel-aria-labels="${this.carouselAriaLabels}"
              mobile-only
          ></gads-carousel>
        </div>

      </div>
    `
        }
    }
    ;
    customElements.define("gads-animated-text", Sb);
    var Tb = class extends L {
        constructor() {
            super(...arguments);
            this._headerCont = this.querySelector(".budget-header__container");
            this._cardsElements = this.querySelectorAll(".budget-card");
            this._headerContHeight = 0;
            this.cards = this.headline_colored = this.headline = this._headerContPadTop = ""
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get cardsObj() {
            const a = this.getAttribute(u.CARDS) || this.cards;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        stickyHeaderHandler() {
            var a;
            this._headerCont && (this._headerContHeight = null === (a = this._headerCont) || void 0 === a ? void 0 : a.offsetHeight,
            this._headerCont.style.top = `
        calc(50vh - ${this._headerContHeight / 2}px - ${this._headerContPadTop})
      `)
        }
        cardsFocus() {
            const a = new IntersectionObserver(b=>{
                b.forEach(c=>{
                    c.isIntersecting ? c.target.classList.remove("budget-card--inactive") : c.target.classList.add("budget-card--inactive")
                }
                )
            }
            ,{
                threshold: .99
            });
            this._cardsElements && this._cardsElements.forEach(b=>a.observe(b))
        }
        connectedCallback() {
            this.firstElementChild || this.replaceChildren(this.render());
            this._headerCont = this.querySelector(".budget-header__container");
            this._headerContPadTop = window.getComputedStyle(this._headerCont).paddingTop;
            this._cardsElements = this.querySelectorAll(".budget-card");
            this.stickyHeaderHandler();
            l.INTERSECTION_OBS in window && this.cardsFocus();
            const a = ea(this.stickyHeaderHandler.bind(this), 50)
              , b = ea(this.cardsFocus.bind(this), 50);
            window.addEventListener(x.RESIZE, ()=>{
                a();
                l.INTERSECTION_OBS in window && b()
            }
            )
        }
        render() {
            return g`
      <section class="budget glue-page glue-spacer-5-top glue-spacer-5-bottom">
        <div class="glue-grid">
          <div class="glue-grid__col glue-grid__col--span-1"></div>
          <div class="budget-header__container glue-grid__col glue-grid__col--span-12 glue-grid__col--span-4-lg glue-grid__col--span-4-xl glue-grid__col--align-top">
            <div class="budget-header__headline-container">
              <h2 class="budget-header__headline glue-headline glue-headline--headline-2">
                <span class="glue-font-weight-medium">${this.headlineText}</span>
              </h2>
            </div>
            <div class="budget-header__cta-container">
              ${this.ctaBlock}
            </div>
          </div>

          <div class="glue-grid__col glue-grid__col--span-1"></div>

          <div class="glue-grid__col glue-grid__col--span-12 glue-grid__col--span-5-lg glue-grid__col--span-5-xl">
            <div class="glue-grid">
              <div class="glue-grid__col glue-grid__col--span-1"></div>
              <div class="budget-cards__container glue-grid__col glue-grid__col--span-10 glue-grid__col--span-5-lg glue-grid__col--span-5-xl">
                <ul class="glue-cards">
                  ${this.cardsObj.map(a=>{
                var b;
                return h`
                      <li>
                        <gads-card
                            body="${a.body}"
                            card-type="budgetCard"
                            headline="${a.title}"
                            image="${null === (b = a.image.image) || void 0 === b ? void 0 : b.url}"
                            ${a.image.has_transparency ? `${u.HAS_TRANSPARENCY}='true'` : ""}
                        ></gads-card>
                      </li>
                    `
            }
            )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-budget", Tb);
    var Ub = class extends L {
        constructor() {
            super(...arguments);
            this.headline = this.copy = this.background_color = "";
            this.stats = [];
            this.statStrips = this.querySelectorAll(".stat-strip");
            this._isReducedMotion = J.isReducedMotion
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.statStrips = this.querySelectorAll(".stat-strip"));
            this.statStrips.forEach(a=>{
                this._isReducedMotion ? a.classList.add("stat-strip--animation-finished") : l.INTERSECTION_OBS in window && l.ANIMATE in HTMLElement.prototype ? (new IntersectionObserver(this.componentInViewport.bind(this),{
                    root: null
                })).observe(a) : this.animateStats(a)
            }
            )
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get bgColor() {
            return this.getAttribute(u.BACKGROUND_COLOR) || this.background_color
        }
        get headlineText() {
            return this.headline || this.getAttribute(u.HEADLINE) || ""
        }
        get copyText() {
            return this.copy || this.getAttribute(u.COPY) || ""
        }
        get statItems() {
            const a = this.getAttribute("stats");
            return "string" === typeof a ? JSON.parse(a) : this.stats
        }
        componentInViewport(a, b) {
            for (const c of a)
                a = c.target,
                c.isIntersecting && a instanceof HTMLElement && (this.animateStats(a),
                b.disconnect())
        }
        animateStats(a) {
            const b = [...a.children]
              , c = a.animate([{
                transform: "translateY(0)"
            }, {
                transform: `translateY(calc(-100% + ${b[0].offsetHeight}px))`
            }], {
                duration: 3E3,
                fill: "forwards",
                easing: `steps(${b.length - 1}, end)`
            })
              , d = setInterval(()=>{
                c.updatePlaybackRate(1.5 * c.playbackRate)
            }
            , 300);
            c.onfinish = ()=>{
                clearInterval(d);
                c.cancel();
                a.classList.add("stat-strip--animation-finished")
            }
        }
        renderStats(a) {
            const b = a ? "stat--with-icons" : "";
            return this.statItems.map(c=>{
                var d, e, f, k;
                const m = (null === (d = c.icon) || void 0 === d ? 0 : d.icon_id) || (null === (k = null === (f = null === (e = c.icon) || void 0 === e ? void 0 : e.icon_image) || void 0 === f ? void 0 : f.image) || void 0 === k ? 0 : k.url) ? this.renderIcon(c.icon) : "<div></div>";
                d = c.subheadline ? `
        <p class="glue-spacer-2-top">${c.subheadline}</p>
      ` : "";
                return h`
        <div class="stat ${b}">
          ${m}
          <div class="stat-animation">
            <div class="glue-visually-hidden">${c.stat_number}${c.stat_unit}</div>
            <div class="stat-strip" aria-hidden="true">
              ${this.renderStatSteps(c)}
            </div>
          </div>
          ${d}
        </div>
      `
            }
            ).join("")
        }
        renderStatSteps(a) {
            const b = a.stat_number;
            let c = 20;
            c > b && (c = b);
            const d = b / c
              , e = [0];
            for (let f = 1; f < c; f++)
                e.push(Math.trunc(d * f));
            e.push(b);
            return e.map(f=>h`
        <div class="stat-step">
          <span>${f}</span>
          <span>${a.stat_unit}</span>
        </div>
      `).join("")
        }
        renderIcon(a) {
            var b, c, d, e;
            const f = a.icon_color
              , k = null === (c = null === (b = a.icon_image) || void 0 === b ? void 0 : b.image) || void 0 === c ? void 0 : c.url;
            b = h`
      <div>
        <gads-image
            widths="sm:36"
            image="${k}"
            alt-text="${null === (d = a.icon_image) || void 0 === d ? void 0 : d.aria_description}"
            ${(null === (e = a.icon_image) || void 0 === e ? 0 : e.has_transparency) ? u.HAS_TRANSPARENCY : ""}
            lazy
        ></gads-image>
      </div>
    `;
            a = h`
      <div class="stat-icon stat-icon--${f} glue-spacer-2-bottom">
        <gads-icon class-names="glue-icon--24px" icon-id="${a.icon_id}"></gads-icon>
      </div>
    `;
            return k ? b : a
        }
        render() {
            const a = this.headlineText ? `
      <h2 class="headline glue-headline glue-headline--headline-3 glue-text-center">
        <span class="glue-font-weight-medium">${this.headlineText}</span>
      </h2>
    ` : ""
              , b = this.copyText ? `
      <p class="body-copy glue-spacer-3-bottom">${this.copyText}</p>
    ` : ""
              , c = this.ctaBlock ? `
      <div class="cta-container">${this.ctaBlock}</div>
    ` : "";
            var d = this.statItems.length;
            const e = this.statItems.some(k=>{
                var m, n, t, B;
                return (null === (m = null === k || void 0 === k ? void 0 : k.icon) || void 0 === m ? void 0 : m.icon_id) || (null === (B = null === (t = null === (n = null === k || void 0 === k ? void 0 : k.icon) || void 0 === n ? void 0 : n.icon_image) || void 0 === t ? void 0 : t.image) || void 0 === B ? void 0 : B.url)
            }
            )
              , f = (4 < d ? "Author up to 4 stats maximum" : null) || (0 == d ? "Author at least 1 stat to use this module" : null);
            d = f ? `
      <div class="error-message">${f}</div>
    ` : `
      <div class="stats-container stats-container--${d}-column">
        ${this.renderStats(e)}
      </div>
    `;
            return g`
      <section class="glue-spacer-6-bottom glue-spacer-6-top">
        <div class="glue-page callout-container ${this.bgColor && "white" !== this.bgColor ? `callout-container--bg callout-container--bg-${this.bgColor}` : ""}">
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-2"></div>
            <div class="callout-header glue-grid__col glue-grid__col--span-8 glue-text-center">
              ${a}
              ${b}
              ${c}
            </div>
          </div>
          ${d}
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-callout-animated-stat", Ub);
    var Vb, Wb = Vb || (Vb = {});
    Wb.PANEL_BUTTON = ".glue-expansion-panel__button";
    Wb.PANEL_HEADLINE = ".gads-contact-hub-panel__headline--container > .glue-headline";
    Wb.PANEL = ".glue-expansion-panel";
    Wb.PANELS = ".glue-expansion-panels";
    var Xb = class extends L {
        constructor() {
            var a;
            super(...arguments);
            this._panelsEl = this.querySelector(Vb.PANELS);
            this._panelBtns = null === (a = this._panelsEl) || void 0 === a ? void 0 : a.querySelectorAll(Vb.PANEL_BUTTON);
            this._isPanelExpandable = !1;
            this.media_alignment = this.image = this.headline = "";
            this.panels = []
        }
        connectedCallback() {
            var a;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._panelsEl = this.querySelector(Vb.PANELS),
            this._panelBtns = null === (a = this._panelsEl) || void 0 === a ? void 0 : a.querySelectorAll(Vb.PANEL_BUTTON));
            l.GLUE in window && this._panelsEl && this._isPanelExpandable && (new glue.ExpansionPanels(this._panelsEl),
            this._panelBtns && this._panelBtns.forEach(b=>{
                b.setAttribute(u.ROLE, "group");
                this.panelBtnCleanup(b);
                b.addEventListener(x.CLICK, ()=>this.panelBtnCleanup(b))
            }
            ))
        }
        get gtmModuleName() {
            return this.nodeName.toLowerCase()
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get imageObj() {
            const a = this.getAttribute(u.IMAGE) || this.image;
            return "string" === typeof a ? JSON.parse(a) : this.image
        }
        get mediaAlignment() {
            return this.getAttribute(u.MEDIA_ALIGNMENT) || this.media_alignment
        }
        get panelsObj() {
            const a = this.getAttribute(u.PANELS) || this.panels;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        isConsolidatedShort() {
            return this.panelsObj.some(a=>"consolidated_panel_items"in a && 5 >= a.consolidated_panel_items.length && 0 < a.consolidated_panel_items.length)
        }
        isConsolidatedLong() {
            return this.panelsObj.some(a=>"consolidated_panel_items"in a && 5 < a.consolidated_panel_items.length)
        }
        panelBtnCleanup(a) {
            a.setAttribute("tabindex", "-1");
            if (a.classList.contains(w.PANEL_BUTTON_NO_POINTER)) {
                a.removeAttribute("title");
                a.removeAttribute("aria-expanded");
                const b = a.cloneNode(!1);
                for (; a.hasChildNodes(); )
                    a.firstChild && b.appendChild(a.firstChild);
                a.parentNode && a.parentNode.replaceChild(b, a)
            }
        }
        imageRender() {
            var a;
            const b = this.isConsolidatedShort() ? "" : "glue-grid__col--span-4-xl"
              , c = (null === (a = this.imageObj.html_image) || void 0 === a ? 0 : a.content) && this.imageObj.use_html_image ? this.htmlImage() : this.standardImage();
            return h`
      <div class="gads-contact-hub__image--container glue-grid__col
          glue-grid__col--span-5 ${b}">
        ${c}
      </div>
    `
        }
        htmlImage() {
            const a = encodeURI(JSON.stringify([this.imageObj]));
            return h`
      <gads-image
          alt-text="${this.imageObj.aria_description}"
          images="${a}"
          widths="xl:${this.xlImageWidth()},lg:339,md:263,sm:263"
          lazy
          ${this.imageObj.has_transparency ? u.HAS_TRANSPARENCY : ""}>
      </gads-image>
    `
        }
        standardImage() {
            return h`
      <gads-image
          alt-text="${this.imageObj.aria_description}"
          image="${this.imageObj.image.url}"
          widths="xl:${this.xlImageWidth()},lg:339,md:263,sm:263"
          lazy
          ${this.imageObj.has_transparency ? u.HAS_TRANSPARENCY : ""}>
      </gads-image>
    `
        }
        xlImageWidth() {
            return this.isConsolidatedShort() ? "503" : "389"
        }
        panelLinkRender(a) {
            return a.chatbot_agent_id && a.chatbot_context_id ? h`
        <button class="glue-inline-link"
            data-bm-widget-agent-id='${a.chatbot_agent_id}'
            data-bm-widget-context='${a.chatbot_context_id}'
            data-bm-widget-layout="inline"
            data-g-cta-name='${a.gtm_cta_name ? a.gtm_cta_name : "chatbot"}'
            data-g-module-name="${this.gtmModuleName}">
          <span class="bm-widget-button-text"
              aria-label="${a.panel_link_aria_description || ""}">
            ${a.headline}
          </span>
        </button>
      ` : a.chatbot_agent_id || a.chatbot_context_id ? h`<span>Missing data for Chatbot: Agent-ID or Context ID</span>` : a.special_triggers ? h`
        <a aria-label="${a.panel_link_aria_description || ""}"
            ${a.gtm_cta_name ? `data-g-cta-name="${a.gtm_cta_name}"` : ""}
            data-g-module-name="${this.gtmModuleName}"
            ${a.special_triggers ? `special-triggers="${a.special_triggers}"` : ""}>
          ${a.headline}
        </a>
      ` : a.panel_link ? h`
        <a href="${this.relativizeKintaroLink(a.panel_link)}"
            aria-label="${a.panel_link_aria_description || ""}"
            ${a.gtm_cta_name ? `data-g-cta-name="${a.gtm_cta_name}"` : ""}
            data-g-module-name="${this.gtmModuleName}"
            ${this.setExternalLink(a.panel_link)}>
          ${a.headline}
        </a>
      ` : a.headline
        }
        panelsRender() {
            return this.panelsObj.map((a,b)=>{
                b++;
                return "consolidated_panel_items"in a ? this.isConsolidatedShort() ? this.panelConsolidatedRender(a, b) : "" : this.panelStandardRender(a, b)
            }
            )
        }
        panelStandardRender(a, b) {
            var c, d, e, f, k;
            a.expanded_copy && (this._isPanelExpandable = 0 < a.expanded_copy.length);
            return h`
      <article class="glue-expansion-panel ${a.chatbot_agent_id ? "gads-contact-hub-panel__chatbot" : ""}">
        <div class="glue-expansion-panel__toggle">
          <span class="glue-expansion-panel__button ${this._isPanelExpandable ? "" : "gads-contact-hub-panel__button--no-pointer"}"
              id="gads-contact-hub-panel-${b}-toggle"
              data-glue-expansion-panel-toggle-for="gads-contact-hub-panel-${b}-content">
            <div class="gads-contact-hub-panel__header--container">
              <gads-image aria-hidden="true"
                  image="${(null === (c = a.image) || void 0 === c ? void 0 : c.image.url) || ""}"
                  widths="sm:32"
                  lazy
                  ${(null === (d = a.image) || void 0 === d ? 0 : d.has_transparency) ? u.HAS_TRANSPARENCY : ""}>
              </gads-image>
              <div class="gads-contact-hub-panel__headline--container">
                <h3 id="gads-contact-hub-panel-${b}-headline" class="glue-headline glue-headline--headline-5">
                  ${this.panelLinkRender(a)}
                </h3>
                <p class="glue-font-weight-medium" aria-hidden="true">${a.eyebrow}</p>
              </div>
            </div>
            ${this._isPanelExpandable ? h`
              <svg aria-hidden="true" viewBox="0 0 24 24" class="glue-icon glue-expansion-panel__header-arrow">
                <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path>
              </svg>
            ` : ""}
          </span>
        </div>
        <div class="glue-expansion-panel__content" id="gads-contact-hub-panel-${b}-content">
          ${this._isPanelExpandable ? h`
            <div class="gads-contact-hub-panel__content-inner">
              <gads-image alt-text="${(null === (e = a.expanded_image) || void 0 === e ? void 0 : e.aria_description) || ""}"
                  image="${(null === (f = a.expanded_image) || void 0 === f ? void 0 : f.image.url) || ""}"
                  widths="sm:108"
                  ${(null === (k = a.image) || void 0 === k ? 0 : k.has_transparency) ? u.HAS_TRANSPARENCY : ""}>
              </gads-image>
              <p>${a.expanded_copy}</p>
            </div>
          ` : ""}
        </div>
      </article>
    `
        }
        panelConsolidatedRender(a, b) {
            var c, d;
            return h`
      <article class="gads-contact-hub__consolidated-panel">
        <div class="gads-contact-hub-panel__header--container">
          <gads-image aria-hidden="true"
              image="${(null === (c = a.image) || void 0 === c ? void 0 : c.image.url) || ""}"
              widths="sm:32"
              lazy
              ${(null === (d = a.image) || void 0 === d ? 0 : d.has_transparency) ? u.HAS_TRANSPARENCY : ""}>
          </gads-image>
          <div class="gads-contact-hub-panel__headline--container">
            <h3 id="gads-contact-hub-panel-${b}-headline" class="glue-headline glue-headline--headline-5">
              ${a.headline}
            </h3>
          </div>
        </div>
        <ul class="gads-contact-hub__consolidated-list">
          ${this.consolidatedItemsRender(a.consolidated_panel_items)}
        </ul>
      </article>
    `
        }
        consolidatedItemsRender(a) {
            const b = a.length;
            return a.map((c,d)=>h`
        <li class="gads-contact-hub__consolidated-item ${Math.ceil(b / 2) === d ? "gads-contact-hub__consolidated-item--middle" : ""}">
          <div>
            <span class="gads-contact-hub__consolidated-item-country glue-font-weight-medium">
              ${c.country}
            </span>
            <span class="gads-contact-hub__consolidated-item-availability">
              ${c.availability}
            </span>
          </div>
          <div class="gads-contact-hub__consolidated-item-cta">
            <gads-button
                cta-name="${c.gtm_cta_name}"
                cta-text="${c.telephone_formatted}"
                cta-url="tel:${c.telephone}"
                emphasis="low"
                icon-id="PHONE"
                icon-type="glue-icon"
                label="${c.telephone_aria_label}"
                module-name="${this.gtmModuleName}">
            </gads-button>
          </div>
        </li>
      `).join("")
        }
        renderConsolidatedLong() {
            var a = this.panelsObj.filter(c=>!("consolidated_panel_items"in c))
              , b = this.panelsObj.filter(c=>"consolidated_panel_items"in c)[0];
            a = a.length ? `
      <div class="glue-grid__col glue-grid__col--span-1 glue-grid__col--span-2-xl"></div>
      <div class="gads-contact-hub__consolidated-long-ctas-container glue-spacer-4-bottom
          glue-grid__col glue-grid__col--span-10 glue-grid__col--span-8-xl">
        ${a.map(c=>"consolidated_panel_items"in c ? "" : c.chatbot_agent_id && c.chatbot_context_id ? h`
                <button class="glue-button glue-button--medium-emphasis glue-button--icon"
                    aria-label="${c.panel_link_aria_description}"
                    data-bm-widget-agent-id="${c.chatbot_agent_id}"
                    data-bm-widget-context="${c.chatbot_context_id}"
                    data-bm-widget-layout="advanced"
                    data-g-cta-name="${c.gtm_cta_name}"
                    data-g-module-name="${this.gtmModuleName}">
                  <div class="icon-wrapper"><gads-icon icon-id="CHAT"></gads-icon></div>
                  <span class="bm-widget-button-text">${c.headline}</span>
                </button>
              ` : h`
              <gads-button
                  cta-text="${c.headline}"
                  cta-url="${c.panel_link}"
                  label="${c.panel_link_aria_description}"
                  icon-id="${c.consolidated_version_cta_icon}"
                  icon-type="glue-icon"
                  cta-name="${c.gtm_cta_name}"
                  module-name="${this.gtmModuleName}"
                  agent-id="${c.chatbot_agent_id}"
                  context-id="${c.chatbot_context_id}">
              </gads-button>
            `).join("")}
      </div>
      <div class="glue-grid__col glue-grid__col--span-1 glue-grid__col--span-2-xl"></div>
    ` : "";
            b = "consolidated_panel_items"in b ? `
      <div class="glue-grid__col glue-grid__col--span-2 glue-grid__col--span-1-lg"></div>
      <div class="glue-grid__col glue-grid__col--span-8 glue-grid__col--span-10-lg">
        <div class="gads-contact-hub-consolidated-panel__headline">
          ${b.headline}
        </div>
        <ul class="gads-contact-hub__consolidated-list gads-contact-hub__consolidated-list--long">
          ${this.consolidatedItemsRender(b.consolidated_panel_items)}
        </ul>
      </div>
    ` : "";
            return h`
      ${a}
      ${b}
    `
        }
        renderStandard() {
            const a = this.isConsolidatedShort() ? "glue-grid__col glue-grid__col--span-8-md glue-grid__col--span-5" : "glue-grid__col glue-grid__col--span-7 glue-grid__col--span-6-xl"
              , b = this.isConsolidatedShort() ? "glue-grid__col glue-grid__col--span-2-md glue-grid__col--span-1-lg" : "glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-xl"
              , c = this.imageRender();
            return h`
      <div class="${b}"></div>
      ${"Right" !== this.mediaAlignment ? c : ""}
      <div class="${a}">
        <section class="glue-expansion-panels">
          ${this.panelsRender()}
        </section>
      </div>
      ${"Right" === this.mediaAlignment ? c : ""}
    `
        }
        render() {
            const a = this.isConsolidatedShort() ? "gads-contact-hub--consolidated-short" : "";
            return g`
      <section id="gads-contact-hub" class="${a}
          gads-contact-hub glue-page glue-spacer-5-bottom glue-spacer-5-top">
        <div class="glue-grid">
          <div class="glue-grid__col glue-grid__col--span-1 glue-grid__col--span-2-xl"></div>
          <div class="gads-contact-hub__header--container glue-grid__col glue-grid__col--span-10 glue-grid__col--span-8-xl">
            <h2 id="gads-contact-hub-headline" class="glue-headline glue-headline--headline-2 glue-text-center">
              <span class="glue-font-weight-medium">${this.headlineText}</span>
            </h2>
          </div>
        </div>
        <div class="gads-contact-hub__content--container glue-grid">
          ${this.isConsolidatedLong() ? this.renderConsolidatedLong() : this.renderStandard()}
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-contact-hub", Xb);
    var Yb = class extends L {
        constructor() {
            super(...arguments);
            this.headline = this.descriptor = "";
            this.expansion_panels_content = [];
            this.expansion_panels_labels = null
        }
        connectedCallback() {
            this.firstElementChild || this.replaceChildren(this.render());
            if (l.GLUE in window) {
                const a = this.querySelector(".glue-expansion-panels");
                a && new glue.ExpansionPanels(a)
            }
        }
        get panelId() {
            return this.getAttribute("expansion-panels-id") || this.descriptor
        }
        get content() {
            const a = this.getAttribute("expansion-panels-content") || this.expansion_panels_content;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get expansionPanelsLabels() {
            const a = this.getAttribute("expansion-panels-labels") || this.expansion_panels_labels;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        panelBuilder(a, b) {
            return h`
      <div class="glue-expansion-panel">
        <h3 class="glue-expansion-panel__toggle">
          <span class="glue-expansion-panel__button"
              id="expansion-panels-${this.panelId}-${b + 1}-toggle"
              data-glue-expansion-panel-toggle-for="expansion-panels-${this.panelId}-${b + 1}-content">
            <span class="glue-expansion-panel__header-text">${a.headline}</span>
            <div class="icon-wrapper glue-icon glue-expansion-panel__header-arrow">
              <gads-icon icon-id="expand_more"></gads-icon>
            </div>
          </span>
        </h3>
        <div class="glue-expansion-panel__content" id="expansion-panels-${this.panelId}-${b + 1}-content">
          <div>${a.copy}</div>
        </div>
      </div>
    `
        }
        render() {
            var a, b, c;
            const d = h`
      <button aria-label="${(null === (a = this.expansionPanelsLabels) || void 0 === a ? void 0 : a.button_aria_label) || ""}"
          class="glue-expansion-panels__toggle-all glue-button
          glue-button--low-emphasis glue-button--icon-right">
        <span class="glue-expansion-panels__toggle-text
            glue-expansion-panels__toggle-text--expanded">
          ${(null === (b = this.expansionPanelsLabels) || void 0 === b ? void 0 : b.expand_all) || ""}
        </span>
        <span class="glue-expansion-panels__toggle-text
            glue-expansion-panels__toggle-text--collapsed">
          ${(null === (c = this.expansionPanelsLabels) || void 0 === c ? void 0 : c.collapse_all) || ""}
        </span>
        <span class="icon-wrapper">
          <gads-icon icon-id="expand_all"></gads-icon>
        </span>
      </button>
    `;
            return g`
      <section class="glue-page glue-spacer-6-top glue-spacer-6-bottom gads-expansion-panels-container">
        <div class="glue-grid">
          <div class="glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-1-md"></div>
          <div class="glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md">
            <h3 class="glue-headline glue-headline--headline-3">${this.headlineText}</h3>
            <div class="glue-expansion-panels"
                data-glue-expansion-panels-key="${this.panelId}">
              <div class="glue-expansion-panels__header">
                ${d}
              </div>
              ${this.content.map((e,f)=>this.panelBuilder(e, f))}
            </div>
          </div>
          <div class="glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-1-md"></div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-expansion-panels", Yb);
    var Zb = class extends L {
        constructor() {
            super(...arguments);
            this.carousel_aria_labels = null;
            this.goals = this.headline = "";
            this._isReducedMotion = J.isReducedMotion;
            this._tabPanels = this.querySelector(".glue-tabpanels");
            this._tabPanelList = this.querySelector(".glue-tabpanels__page-list")
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get goalsObj() {
            const a = this.getAttribute("goals") || this.goals;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        featureMediaRender(a) {
            return a && Object.keys(a).length ? h`
        <gads-feature-media
            headline="${a.headline}"
            copy="${a.copy}"
            media-alignment="${a.media_alignment}"
            images="${encodeURI(JSON.stringify(a.images))}"
            thumbnail="${encodeURI(JSON.stringify(a.thumbnail))}"
            layout-size="${"Small"}"
            video='${JSON.stringify(a.video)}'
            can-hide
        ></gads-feature-media>
      ` : ""
        }
        relatedProductsRender(a) {
            return a && Object.keys(a).length ? h`
        <gads-related-products
            cards="${encodeURI(JSON.stringify(a.product_cards))}"
            featured-product="${a.featured_product ? encodeURI(JSON.stringify(a.featured_product)) : ""}"
            headline="${a.headline}"
            subheadline="${a.subheadline}"
            view-more-cta-text="${a.view_more_cta_text}"
            view-less-cta-text="${a.view_less_cta_text}"
        ></gads-related-products>
      ` : ""
        }
        resourceGoalCarouselRender(a) {
            return a && Object.keys(a).length ? h`
        <gads-resource-goal-carousel
            cards="${encodeURI(JSON.stringify(a.cards))}"
            carousel-aria-labels="${encodeURI(JSON.stringify(a.carousel_aria_labels))}"
            headline="${a.headline}"
            document-id="${a._documentId}"
        ></gads-resource-goal-carousel>
      ` : ""
        }
        pillsSmMdSlide(a) {
            const b = Q.getBpName() === r.SM ? na.SM : na.MD;
            this._tabPanelList.scrollTo({
                left: a.offsetLeft - b,
                behavior: this._isReducedMotion ? E.AUTO : E.SMOOTH
            })
        }
        scrollOnClick(a) {
            a = {
                top: a.getBoundingClientRect().top + window.scrollY - 170,
                behavior: this._isReducedMotion ? E.AUTO : E.SMOOTH
            };
            window.scroll(a)
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._tabPanels = this.querySelector(".glue-tabpanels"),
            this._tabPanelList = this.querySelector(".glue-tabpanels__page-list"));
            this._tabPanels && l.GLUE in window && new glue.TabPanels(this._tabPanels,{
                panelsCount: 5,
                isResponsive: !1
            });
            this._tabPanelList && this._tabPanelList.addEventListener(x.CLICK, a=>{
                a = a.target;
                a.classList.contains("glue-tab") && (this.scrollOnClick(this._tabPanelList),
                this.pillsSmMdSlide(a))
            }
            )
        }
        render() {
            return g`
      <section class="gads-goal-selector glue-spacer-4-bottom">
        <div class="gads-goal-selector__container">
          <div class="glue-page">
            <div class="glue-grid">
              <div class="glue-grid__col glue-grid__col--span-2"></div>
              <div class="glue-grid__col glue-grid__col--span-8">
                <h2 class="glue-headline glue-headline--headline-4 glue-text-center glue-spacer-4-bottom">
                  <span class="glue-font-weight-medium">${this.headlineText}</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="glue-tabpanels">
            <div class="glue-tabpanels__page-list--container">
              <div class="glue-tabpanels__page-list">
                ${this.goalsObj.map(a=>h`<div data-g-module-name='gads-goal-selector' data-g-cta-name=${a.gtm_cta_name}>${a.tab_name}</div>`)}
              </div>
            </div>
            <div class="glue-tabpanels__panel-list">
              ${this.goalsObj.map((a,b)=>h`
                  <div id="gads-goal-selector-tab-${b}">
                    <div id="gads-goal-selector-tab-${b}-content" class="glue-tabpanels__panel-content">
                      ${this.featureMediaRender(a.tab_content_feature_media)}
                      ${this.relatedProductsRender(a.tab_content_related_products)}
                      ${this.resourceGoalCarouselRender(a.tab_content_resource_goal_carousel)}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-goal-selector", Zb);
    var $b = [w.NO_SCROLL, "gridwall-filter-open"]
      , ac = [w.SHOW]
      , bc = class extends L {
        constructor() {
            super(...arguments);
            this.filter_heading = this.filter_aria_labels = this.cards = "";
            this.show_more_cards = this.filter_categories = null;
            this.bp = Q.getBpName();
            this.cardEls = [...this.querySelectorAll(".gridwall-card")];
            this.currentRow = 1;
            this.currentWidths = [];
            this.filterCtrl = null;
            this.hiddenFrom = 5;
            this.hasHiddenRows = [];
            this.timeout = null;
            this.filterEl = this.querySelector(".glue-filter");
            this.panelGroupEl = this.querySelector(".glue-expansion-panels");
            this.openFilterBtn = this.querySelector(".open-filter-btn");
            this.filterContainer = this.querySelector(".filter-container");
            this.closeFilterBtn = this.querySelector(".close-filter-btn");
            this.checkboxWrappers = this.querySelectorAll(".checkbox-wrapper");
            this.allCards = this.querySelectorAll(".gridwall-card");
            this.gridwallWrapper = this.querySelector(".gridwall-wrapper");
            this.showMoreBtn = this.querySelector(".show-more-btn");
            this.resetFilters = this.querySelector(".reset-filters");
            this.checkboxes = this.querySelectorAll("input[type=checkbox]");
            this.contentTypeParam = (new URLSearchParams(window.location.search)).get("content-type");
            this.resetFiltersSR = this.querySelector(".reset-filters--screen-reader");
            this.disableResetFilters = !0;
            this.filterResult = this.querySelector(".glue-filter-result")
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.cardEls = [...this.querySelectorAll(".gridwall-card")],
            this.filterEl = this.querySelector(".glue-filter"),
            this.panelGroupEl = this.querySelector(".glue-expansion-panels"),
            this.openFilterBtn = this.querySelector(".open-filter-btn"),
            this.filterContainer = this.querySelector(".filter-container"),
            this.closeFilterBtn = this.querySelector(".close-filter-btn"),
            this.checkboxWrappers = this.querySelectorAll(".checkbox-wrapper"),
            this.allCards = this.querySelectorAll(".gridwall-card"),
            this.gridwallWrapper = this.querySelector(".gridwall-wrapper"),
            this.showMoreBtn = this.querySelector(".show-more-btn"),
            this.resetFilters = this.querySelector(".reset-filters"),
            this.resetFiltersSR = this.querySelector(".reset-filters--screen-reader"),
            this.filterResult = this.querySelector(".glue-filter-result"));
            if (l.GLUE in window) {
                this.panelGroupEl && new glue.ExpansionPanels(this.panelGroupEl);
                this.filterEl && (this.filterCtrl = new glue.Filter(this.filterEl));
                this.updateSpacerValues().then(()=>{
                    (this.hasHiddenRows = this.querySelectorAll(this.nextRowQuery())) ? this.calcShowMore() : this.showMoreBtn.style.display = ja.NONE
                }
                );
                this.filterEl.addEventListener(x.CHANGE, async()=>{
                    this.checkboxClasses();
                    const f = this.querySelectorAll(".item-checked");
                    this.checkResetFilter(f);
                    await this.toggleCardVisibility(this.cardEls, !0);
                    this.showMoreBtn.style.display = ja.NONE;
                    this.checkboxClasses();
                    for (const k of this.allCards)
                        k.classList.toggle("remove", !k.classList.contains("glue-filter-is-matching"));
                    this.filterCtrl && (this.cardEls = this.filterCtrl.getFilteredItems());
                    await this.updateSpacerValues();
                    this.calcShowMore();
                    this.toggleCardVisibility(this.cardEls, !1)
                }
                );
                this.resetFilters.addEventListener(x.CLICK, async()=>{
                    const f = this.querySelectorAll(".item-checked");
                    this.resetFiltersSR.innerText = this.resetFiltersSR.dataset.text || "";
                    this.resetFilters.setAttribute(u.DISABLED, "");
                    this.filterCtrl && this.filterCtrl.reset();
                    f.forEach(k=>{
                        k.classList.remove("item-checked")
                    }
                    );
                    await this.toggleCardVisibility(this.cardEls, !0);
                    for (const k of this.allCards)
                        k.classList.toggle("remove", !k.classList.contains("glue-filter-is-matching"));
                    this.filterCtrl && (this.cardEls = this.filterCtrl.getFilteredItems());
                    await this.updateSpacerValues();
                    this.calcShowMore();
                    this.toggleCardVisibility(this.cardEls, !1);
                    this.resetFiltersSR.innerText = ""
                }
                );
                const a = f=>{
                    f.code === C.ESCAPE && d()
                }
                  , b = f=>{
                    f.target.classList.contains(w.NO_SCROLL) && d()
                }
                  , c = f=>{
                    var k, m;
                    const n = [...document.body.children].filter(q=>"NOSCRIPT" !== q.nodeName && "SCRIPT" !== q.nodeName && "MAIN" !== q.nodeName)
                      , t = [...(null === (k = this.parentElement) || void 0 === k ? void 0 : k.children)].filter(q=>q !== this)
                      , B = this.filterContainer.parentElement;
                    k = [...(null === (m = null === B || void 0 === B ? void 0 : B.parentElement) || void 0 === m ? void 0 : m.children)].filter(q=>q !== B);
                    m = [...t, n, k].flat();
                    f ? (m.forEach(q=>{
                        q.setAttribute(u.INERT, "true")
                    }
                    ),
                    m.forEach(q=>{
                        q.setAttribute(u.ARIA_HIDDEN, "true")
                    }
                    )) : (m.forEach(q=>{
                        q.removeAttribute(u.INERT)
                    }
                    ),
                    m.forEach(q=>{
                        q.removeAttribute(u.ARIA_HIDDEN)
                    }
                    ))
                }
                  , d = ()=>{
                    this.filterContainer.classList.remove(...ac);
                    document.body.classList.remove(...$b);
                    const f = this.openFilterBtn.querySelector(".glue-button");
                    c(!1);
                    f.setAttribute(u.ARIA_EXPANDED, "false");
                    f.focus();
                    document.removeEventListener(x.CLICK, b, {
                        capture: !0
                    })
                }
                ;
                this.openFilterBtn.addEventListener(x.CLICK, ()=>{
                    document.body.classList.add(...$b);
                    this.filterContainer.classList.add(...ac);
                    this.filterContainer.setAttribute(u.ROLE, "dialog");
                    this.filterContainer.focus();
                    this.openFilterBtn.querySelector(".glue-button").setAttribute(u.ARIA_EXPANDED, "true");
                    this.closeFilterBtn.addEventListener(x.CLICK, d, {
                        once: !0
                    });
                    document.addEventListener(x.CLICK, b, {
                        capture: !0
                    });
                    c(!0);
                    document.addEventListener(x.KEYUP, a, {
                        once: !0
                    })
                }
                );
                this.checkboxes.forEach(f=>{
                    if (f.id === this.contentTypeParam) {
                        var k = f.closest(".glue-expansion-panel");
                        k = null === k || void 0 === k ? void 0 : k.querySelector(".glue-expansion-panel__button");
                        k instanceof HTMLElement && k.click();
                        f.click();
                        this.disableResetFilters = !1
                    }
                }
                );
                const e = ea(()=>{
                    this.calcShowMore()
                }
                , G.FIVE_HUNDRED);
                window.addEventListener(x.RESIZE, ()=>e());
                Q.subscribe(f=>{
                    this.bp = f;
                    const {SM: k, MD: m, LG: n, XL: t} = r
                      , B = [n, t].includes(f);
                    f = [k, m].includes(f);
                    this.filterContainer.classList.contains(w.SHOW) && B && this.closeFilterBtn.click();
                    f && this.filterResult.setAttribute("aria-live", "off");
                    this.updateSpacerValues()
                }
                );
                this.showMoreBtn.addEventListener(x.CLICK, ()=>{
                    var f = this.hasHiddenRows[this.hasHiddenRows.length - 1];
                    this.hiddenFrom += 2;
                    this.calcShowMore();
                    f = f.nextElementSibling;
                    (f = null === f || void 0 === f ? void 0 : f.getElementsByTagName("a")[0]) && f.focus()
                }
                )
            }
        }
        get filterCategoryGroups() {
            var a = this.getAttribute("filter-categories");
            a = "string" === typeof a ? JSON.parse(a) : this.filter_categories;
            return null === a || void 0 === a ? void 0 : a.category_group
        }
        get filterHeading() {
            return this.getAttribute("filter-heading") || this.filter_heading
        }
        get gridCards() {
            const a = this.getAttribute(u.CARDS) || this.cards;
            return ("string" === typeof a ? JSON.parse(a) : a) || []
        }
        get ariaCloseFilter() {
            const a = this.getAttribute("filter-aria-labels") || this.filter_aria_labels;
            return a ? ("string" === typeof a ? JSON.parse(a) : a).aria_close_filter : ""
        }
        get ariaResetFilter() {
            const a = this.getAttribute("filter-aria-labels") || this.filter_aria_labels;
            return a ? ("string" === typeof a ? JSON.parse(a) : a).aria_reset_filters : ""
        }
        get ariaResetFilterScreenReader() {
            const a = this.getAttribute("aria-reset-filters-screen-reader") || this.filter_aria_labels;
            return a ? ("string" === typeof a ? JSON.parse(a) : a).aria_reset_filters_screen_reader : ""
        }
        get showMoreCardsButton() {
            const a = this.getAttribute("show-more-cards") || this.show_more_cards;
            return a ? "string" === typeof a ? JSON.parse(a) : a : null
        }
        gtmCtaName(a) {
            return a.startsWith("/home/resources/") ? this.replaceSlashes(a.replace("/home/resources/", "")) : this.replaceSlashes((new URL(a)).pathname.toString())
        }
        replaceSlashes(a) {
            return a.replace(/^\/?|\/?$/g, "").replace("/", "-")
        }
        get gtmModuleName() {
            return this.nodeName.toLowerCase()
        }
        buildCard(a, b) {
            const c = this.buildDataAttribute(a.filter_category)
              , d = this.determineCardType(a);
            return h`
      <article
          aria-labelledby="card-${b}-headline"
          class="gridwall-card ${0 < b ? "glue-filter-result__item" : "glue-filter-is-matching featured-card"}"
          type="${d}"
          ${c}
          ${0 === b ? "" : 'data-glue-filter-initial="true"'}>
        <a href="${this.relativizeKintaroLink(a.destination)}" ${this.setExternalLink(a.destination)}
            data-g-cta-name="${a.destination ? this.gtmCtaName(a.destination) : ""}"
            data-g-module-name="${this.gtmModuleName}">
          ${this.cardHasImage(a) ? this.extractImage(a) : ""}
          <div class="copy-section ${a.yt_vid_time ? "has-time-pill" : ""}">
            ${a.eyebrow ? h`<p class="glue-label glue-font-weight-medium eyebrow glue-spacer-1-bottom">${a.eyebrow}</p>` : ""}
            <div class="headline-container glue-spacer-1-bottom">
              ${a.short_headline ? h`
                <h2 class="glue-headline glue-headline--headline-5 short-headline card-headline">${a.short_headline}</h2>
                <h2 class="glue-headline glue-headline--headline-5 long-headline card-headline" id="card-${b}-headline">${a.headline}</h2>
              ` : h`
                <h2 class="glue-headline glue-headline--headline-5 card-headline" id="card-${b}-headline">${a.headline}</h2>
              `}
            </div>
            <div class="cta-section">
              <p class="format">
                <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation">
                  <path d="M12.25 1.777v10.5H1.75v-10.5h10.5Zm0-1.5H1.75c-.825 0-1.5.675-1.5 1.5v10.5c0 .825.675 1.5 1.5 1.5h10.5c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5Zm-3.75 10.5H3.25v-1.5H8.5v1.5Zm2.25-3h-7.5v-1.5h7.5v1.5Zm0-3h-7.5v-1.5h7.5v1.5Z" fill="currentColor" />
                </svg>
                ${a.format}
              </p>
              <div class="icon" aria-hidden="true" role="presentation">
                <svg viewBox="0 0 24 24" fill="#1A73E8">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </article>
    `
        }
        buildDataAttribute(a) {
            const b = [];
            for (const d in a) {
                const e = `data-glue-filter-${d}`;
                var c = a[d];
                c = Array.isArray(c) ? c.join(" ") : c;
                b.push(`${e}="${c.toLowerCase()}"`)
            }
            return b.join(" ")
        }
        buildFilter() {
            const a = []
              , b = [...(new Set(this.gridCards.flatMap(c=>Object.values(null === c || void 0 === c ? void 0 : c.filter_category)).flat()))];
            for (const c of this.filterCategoryGroups)
                a.push(h`
        <div class="glue-expansion-panel">
          <h3 class="glue-expansion-panel__toggle">
            <span class="glue-expansion-panel__button" data-glue-expansion-panel-toggle-for="${c.category_group_id}">
              <span class="glue-expansion-panel__header-text">${c.category_group_name}</span>
              <svg role="presentation" aria-hidden="true" class="glue-icon glue-expansion-panel__header-arrow" viewBox="0 0 24 24">
                <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17" />
              </svg>
            </span>
          </h3>
          <div class="glue-expansion-panel__content" id="${c.category_group_id}">
            <div class="glue-filter-control"
                data-glue-filter-id="${c.category_group_id}"
                role="list"
                aria-controls="glue-filter-result-container">
              ${c.category.map(d=>{
                    const e = -1 !== b.findIndex(f=>d.category_id === f.toLowerCase()) ? "" : w.HIDDEN;
                    return h`
                  <div class="mdc-form-field checkbox-wrapper glue-spacer-1-bottom ${e}">
                    <div role="listitem" class="checkbox mdc-checkbox">
                      <input type="checkbox"
                          id="${d.category_id}"
                          value="${d.category_id}"
                          data-parent="${c.category_group_id}"
                          class="glue-filter__item mdc-checkbox__native-control filter-option">
                      <div class="mdc-checkbox__background" aria-hidden="true" tabindex="-1">
                        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                          <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                        </svg>
                        <div class="mdc-checkbox__mixedmark"></div>
                      </div>
                      <div class="mdc-checkbox__ripple"></div>
                    </div>
                    <label for="${d.category_id}">
                      ${d.category_name}
                    </label>
                  </div>
                `
                }
                )}
            </div>
          </div>
        </div>
      `);
            return h`
      <div class="glue-expansion-panels">
        <div class="glue-expansion-panels__header">
          <h2 class="glue-eyebrow ${"filter-heading"}">${this.filterHeading}</h2>
          <button class="close-filter-btn" aria-label="${this.ariaCloseFilter}">
            <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--18px" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>
        ${a.join("")}
        <div class="glue-filter-control glue-spacer-3-top"
            data-glue-filter-id="initial"
            aria-controls="glue-filter-result-container">
          <button class="glue-button glue-button--low-emphasis reset-filters" ${this.disableResetFilters ? "disabled" : ""}>${this.ariaResetFilter}</button>
          <div
              aria-live="assertive"
              class="reset-filters--screen-reader screen-reader-only"
              data-text="${this.ariaResetFilterScreenReader}">
          </div>
        </div>
      </div>
    `
        }
        checkResetFilter(a) {
            0 < a.length ? this.resetFilters.removeAttribute(u.DISABLED) : this.resetFilters.setAttribute(u.DISABLED, "")
        }
        calcShowMore() {
            this.hasHiddenRows = this.querySelectorAll(this.nextRowQuery());
            const a = this.hasHiddenRows[this.hasHiddenRows.length - 1];
            if (a) {
                this.showMoreBtn.style.display = ja.BLOCK;
                for (var b = 0; b < this.hasHiddenRows.length; b++)
                    this.hasHiddenRows[b].classList.toggle("remove", !1),
                    this.hasHiddenRows[b].firstElementChild.tabIndex = 0,
                    this.hasHiddenRows[b].removeAttribute(u.ARIA_HIDDEN),
                    this.hasHiddenRows[b].firstElementChild.removeAttribute(u.ARIA_HIDDEN);
                b = [];
                for (var c = a.nextElementSibling; c; )
                    b.push(c),
                    c = c.nextElementSibling;
                for (c = 0; c < b.length; c++)
                    b[c].tabIndex = -1,
                    b[c].firstElementChild.tabIndex = -1,
                    b[c].setAttribute(u.ARIA_HIDDEN, "true"),
                    b[c].firstElementChild.setAttribute(u.ARIA_HIDDEN, "true")
            }
            this.hasHiddenRows && null !== a && void 0 !== a && a.nextElementSibling || (this.showMoreBtn.style.display = ja.NONE)
        }
        checkboxClasses() {
            this.checkboxWrappers.forEach(a=>{
                const b = a.querySelector("input");
                a.classList.toggle("item-checked", b.checked)
            }
            )
        }
        createVisibilityPromise(a, b, c) {
            return new Promise(d=>{
                a.classList.contains("remove") && d();
                a.addEventListener(x.TRANSITION_END, ()=>{
                    d()
                }
                , {
                    once: !0
                });
                setTimeout(()=>{
                    a.classList.toggle(w.HIDDEN, c)
                }
                , 80 * b)
            }
            )
        }
        determineCardType(a) {
            return a.yt_vid_id ? "video" : this.cardHasImage(a) ? "image" : "text"
        }
        extractImage(a) {
            var b, c, d;
            const e = !!a.yt_vid_id;
            let f = null
              , k = !1;
            let m = null
              , n = null;
            const t = a.landscape_image
              , B = a.portrait_image;
            e ? (n = (null === (b = t.image) || void 0 === b ? 0 : b.url) ? t : a.image[0],
            k = !n) : (null === (c = B.image) || void 0 === c ? 0 : c.url) && (null === (d = t.image) || void 0 === d ? 0 : d.url) ? f = [B, t] : a.image.length && 2 <= a.image.length ? f = a.image : k = !0;
            k = f ? !f.every(F=>F.image.url) : !0;
            if (!k && f) {
                m = this.formatMultiImage(f);
                f[1].breakpoint = r.SM;
                var q = f[1]
            }
            a = h`
      <div class="video-container">
        <gads-image
            alt-text="${null === n || void 0 === n ? void 0 : n.aria_description}"
            image-span="1"
            image="${null === n || void 0 === n ? void 0 : n.image.url}"
            widths="xl:273,lg:432,md:450,sm:599">
        </gads-image>
        <gads-image
            alt-text="${null === n || void 0 === n ? void 0 : n.aria_description}"
            image-span="2"
            image="${null === n || void 0 === n ? void 0 : n.image.url}"
            widths="xl:616,lg:845,md:950,sm:599">
        </gads-image>
        <gads-icon icon-id="VIDEO_YOUTUBE" class="glue-video__play-button glue-video__play-button--white glue-icon--32px"></gads-icon>
        ${a.yt_vid_time ? h`
          <gads-time-pill time="${a.yt_vid_time}" time-aria-label="${a.yt_vid_time_label}" template="dark"></gads-time-pill>
        ` : ""}
      </div>
    `;
            q = h`
      <div class="image-container">
        <gads-image
            image-span='1'
            image='${null === q || void 0 === q ? void 0 : q.image.url}'
            widths="xl:276,md:449,sm:599"${(null === q || void 0 === q ? 0 : q.has_transparency) ? ` ${u.HAS_TRANSPARENCY}` : ""}>
        </gads-image>
        <gads-image
            image-span='2'
            images='${m}'
            widths="xl:300,lg:290,md:300,sm:599">
        </gads-image>
      </div>
    `;
            return e ? h`
        ${n && n.image.url ? a : this.isDev ? "<div class='missing-image'> Video card image is missing... </div>" : ""}
      ` : h`
        ${k ? this.isDev ? "<div class='missing-image'> Portrait/Landscape image is missing... </div>" : "" : q}
      `
        }
        cardHasImage(a) {
            var b, c, d = null === (b = a.landscape_image) || void 0 === b ? void 0 : b.image;
            b = null === (c = a.portrait_image) || void 0 === c ? void 0 : c.image;
            a = 0 < a.image.length;
            d = null !== d && 0 < Object.keys(d).length;
            return null !== b && 0 < Object.keys(b).length || d || a
        }
        getSpacerValue(a) {
            0 === a && (this.currentWidths = this.bp === r.XL ? [1, 2] : [2]);
            if (this.currentWidths.length)
                a = this.currentWidths.pop();
            else {
                const b = this.pickCardWidths();
                a = b.pop();
                this.currentWidths = b;
                this.currentRow++
            }
            return a
        }
        nextRowQuery() {
            return `[data-grid-row='${this.hiddenFrom}'],
        [data-grid-row='${this.hiddenFrom - 1}']`
        }
        pickCardWidths() {
            var a = {
                "default": [[1, 1], [2]],
                sm: [[1]],
                xl: [[1, 1, 1], [1, 2], [2, 1]]
            };
            a = a[this.bp] || a["default"];
            return [...a[Math.floor(Math.random() * a.length)]]
        }
        toggleCardVisibility(a, b) {
            return new Promise(c=>{
                const d = [];
                for (let e = 1; e < a.length; e++)
                    d.push(this.createVisibilityPromise(a[e], e, b));
                Promise.all(d).then(()=>c())
            }
            )
        }
        updateSpacerValues() {
            return new Promise(a=>{
                this.timeout && clearTimeout(this.timeout);
                for (const [b,c] of this.allCards.entries())
                    if (c.classList.contains("glue-filter-is-matching")) {
                        const d = this.getSpacerValue(b);
                        c.dataset.gridSpan = `${d}`;
                        c.dataset.gridRow = `${this.currentRow}`;
                        this.currentRow >= this.hiddenFrom && c.classList.toggle("remove", !0)
                    } else
                        c.dataset.gridRow = "0",
                        c.classList.toggle("remove", !0);
                this.currentRow = 1;
                setTimeout(()=>a(), G.EIGHT_HUNDRED)
            }
            )
        }
        render() {
            const a = this.filterCategoryGroups.map(b=>b.category_group_id).join(" ") + " initial";
            return g`
      <div class="glue-spacer-6-bottom glue-spacer-6-top gridwall-page">
        <div class="glue-page">
          <div class="glue-grid glue-filter">
            <div class="glue-grid__col glue-grid__col--span-12 glue-spacer-4-bottom gridwall-filter">
              <gads-button
                  class="open-filter-btn"
                  cta-text="${this.filterHeading}"
                  icon-type="glue-icon-right"
                  icon-id="EXPAND_MORE"
                  cta-aria-controls="gads-gridwall-filter-container"
                  cta-aria-haspopup="true"
                  cta-aria-expanded="false">
              </gads-button>
            </div>
            <div class="glue-grid__col glue-grid__col--span-12 glue-grid__col--span-4-lg glue-grid__col--span-3-xl">
              <div id="gads-gridwall-filter-container" class="filter-container" tabindex="-1">
                <div class="glue-filter" id="resource-cards-filter">
                  ${this.buildFilter()}
                </div>
              </div>
            </div>
            <div class="glue-grid__col glue-grid__col--span-12 glue-grid__col--span-8-lg glue-grid__col--span-9-xl">
              <div class="gridwall-wrapper">
                <section class="gridwall glue-filter-result" id="glue-filter-result-container"
                    data-glue-filter-ids="${a}" aria-live="polite" aria-atomic="true">
                  ${this.gridCards.length ? this.gridCards.map((b,c)=>this.buildCard(b, c)) : "<span>Gridwall is not authored with any Gridwall Cards</span>"}
                </section>
              </div>
              ${this.showMoreCardsButton ? h`
                <gads-button
                    class="show-more-btn glue-spacer-5-top"
                    cta-name="${this.showMoreCardsButton.gtm_cta_name}"
                    cta-text="${this.showMoreCardsButton.text}"
                    emphasis="${this.showMoreCardsButton.emphasis}"
                    label="${this.showMoreCardsButton.aria_description}"
                    module-name="${this.gtmModuleName}">
                </gads-button>
              ` : ""}
            </div>
          </div>
        </div>
      </div>
    `
        }
    }
    ;
    customElements.define("gads-grid-wall", bc);
    var cc = class extends L {
        constructor() {
            super(...arguments);
            this.copy = this.headline = this.icon = "";
            this._jumpLinks = this.querySelectorAll(".gads-hero-jumplinks__cta--container .glue-button")
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get bodyCopy() {
            return this.getAttribute(u.COPY) || this.copy
        }
        get eyebrowObj() {
            const a = this.getAttribute(u.ICON) || this.icon;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get buttonsObj() {
            var a = this.getAttribute(u.CTA) || this.ctaInfo;
            return (a = "string" === typeof a ? JSON.parse(a) : a) && a.map(b=>h`<gads-button icon-size="24" label-icon-inline ${this.unpackCta(b)}></gads-button>`)
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._jumpLinks = this.querySelectorAll(".gads-hero-jumplinks__cta--container .glue-button"));
            const a = l.GLUE in window && new glue.SmoothScroll;
            a && this._jumpLinks && this._jumpLinks.forEach(b=>{
                const c = b.href || ""
                  , d = c.slice(c.lastIndexOf("#") + 1, c.length);
                b.addEventListener(x.CLICK, ()=>{
                    a.scrollToId(d, {
                        hash: !1,
                        offset: {
                            x: 0,
                            y: 120
                        }
                    })
                }
                )
            }
            )
        }
        render() {
            var a, b;
            return g`
      <section class="gads-hero-jumplinks glue-spacer-6-top">
        <div class="glue-page">
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-2"></div>
            <div class="glue-grid__col glue-grid__col--span-8">
              ${(null === (a = this.eyebrowObj.image) || void 0 === a ? 0 : a.url) ? h`
                <div class="gads-hero-jumplinks__eyebrow-icon--container glue-spacer-3-bottom">
                  <div class="gads-hero-jumplinks__eyebrow-icon--inner">
                    <gads-image alt-text="${this.eyebrowObj.aria_description}" image=${null === (b = this.eyebrowObj.image) || void 0 === b ? void 0 : b.url} widths="xl:60,lg:60,md:60,sm:60">
                    </gads-image>
                  </div>
                </div>
              ` : ""}
              <h1 class="gads-hero-jumplinks__headline glue-headline glue-text-center glue-spacer-2-bottom">
                ${this.headlineText}
              </h1>
            </div>
            <div class="glue-grid__col glue-grid__col--span-2"></div>
          </div>
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-3"></div>
            <div class="glue-grid__col glue-grid__col--span-6">
              <p class="gads-hero-jumplinks__copy glue-text-center">
                ${this.bodyCopy}
              </p>
            </div>
            <div class="glue-grid__col glue-grid__col--span-3"></div>
          </div>
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-1"></div>
            <div class="glue-grid__col glue-grid__col--span-10">
              ${this.buttonsObj ? h`
                <div class="gads-hero-jumplinks__cta--container glue-spacer-5-top">
                  ${this.buttonsObj}
                </div>
              ` : ""}
            </div>
            <div class="glue-grid__col glue-grid__col--span-1"></div>
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-hero-jump-links", cc);
    var dc = class extends L {
        constructor() {
            super(...arguments);
            this.contactBtn = this.querySelector(".gads-hero-support__cta-contact");
            this.jumpLinks = this.querySelectorAll(".gads-hero-support__cta--container .glue-button");
            this.contactHub = new Xb;
            this.contactHubLink = null;
            this.image = this.headline = this.eyebrow_text = this.eyebrow_icon = this.gtm_cta_name = this.cta_schedule_text = this.cta_eto_text = this.cta_eto_number = this.cta_eto_label = this.cta_contact_text = "";
            this.disable_scheduler = !1
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.contactBtn = this.querySelector(".gads-hero-support__cta-contact"),
            this.jumpLinks = this.querySelectorAll(".gads-hero-support__cta--container .glue-button"));
            window.addEventListener(x.DOM_CONTENT_LOADED, ()=>{
                const a = this.contactBtn && l.GLUE in window && new glue.SmoothScroll
                  , b = this.jumpLinks && l.GLUE in window && new glue.SmoothScroll
                  , c = ()=>{
                    this.contactHubLink && this.contactHubLink.focus({
                        preventScroll: !0
                    })
                }
                ;
                a && this.contactHub && this.contactBtn && this.contactBtn.addEventListener(x.CLICK, ()=>{
                    var d;
                    const e = [...document.querySelectorAll(Vb.PANEL)].find(f=>"none" !== window.getComputedStyle(f).display);
                    this.contactHubLink = null === (d = null === e || void 0 === e ? void 0 : e.querySelector(Vb.PANEL_HEADLINE)) || void 0 === d ? void 0 : d.firstElementChild;
                    a.scrollToId(this.contactHub.gtmModuleName, {
                        hash: !1,
                        offset: {
                            x: 0,
                            y: 120
                        }
                    });
                    setTimeout(c, 100)
                }
                );
                b && this.jumpLinks && this.jumpLinks.forEach(d=>{
                    const e = d.href || ""
                      , f = e.slice(e.lastIndexOf("#") + 1, e.length);
                    d.addEventListener(x.CLICK, ()=>{
                        b.scrollToId(f, {
                            hash: !1,
                            offset: {
                                x: 0,
                                y: 120
                            }
                        });
                        setTimeout(c, 100)
                    }
                    )
                }
                )
            }
            )
        }
        get gtmModuleName() {
            return this.nodeName.toLowerCase()
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get eyebrowObj() {
            var a = this.getAttribute("eyebrow-icon") || this.eyebrow_icon;
            a = "string" === typeof a ? JSON.parse(a) : a;
            const b = this.getAttribute("eyebrow-text") || this.eyebrow_text;
            return {
                eyebrow_icon: a,
                eyebrow_text: b
            }
        }
        get imageObj() {
            const a = this.getAttribute(u.IMAGE) || this.image;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        legacyCTAEtoRender() {
            const a = this.getAttribute("cta-eto-label") || this.cta_eto_label
              , b = this.formatEto(this.getAttribute("cta-eto-number") || this.cta_eto_number)
              , c = this.getAttribute("cta-eto-text") || this.cta_eto_text
              , d = this.getAttribute(u.GTM_CTA_NAME) || this.gtm_cta_name;
            return b ? h`
      <gads-button
          cta-label="${a}"
          cta-name="${d}"
          cta-text="${c}"
          cta-url="tel:${b}"
          icon-type="glue-icon"
          icon-id="PHONE"
          icon-size="24"
          label="${c}"
          module-name="${this.gtmModuleName}">
      </gads-button>` : ""
        }
        legacyCTAContactRender() {
            const a = this.getAttribute("cta-contact-text") || this.cta_contact_text;
            return a ? h`
      <gads-button
          class="gads-hero-support__cta-contact"
          cta-name="viewallcontactoptions"
          cta-text="${a}"
          label="${a}"
          icon-type="glue-icon"
          icon-id="ARROW_DOWNWARD"
          icon-size="24"
          module-name="${this.gtmModuleName}">
      </gads-button>` : ""
        }
        legacyCTASchedulerCtaRender() {
            const a = this.getAttribute("cta-schedule-text") || this.cta_schedule_text;
            return a ? h`
      <gads-button
          class="gads-hero-support__cta-schedule"
          cta-name="schedulemeeting"
          cta-text="${a}"
          cta-url="${this.relativizeKintaroLink("/home/contact-us/schedule/")}"
          label="${a}"
          icon-type="glue-icon"
          icon-id="CALENDAR"
          icon-size="24"
          module-name="${this.gtmModuleName}">
      </gads-button>` : ""
        }
        standardImage() {
            return h`
      <gads-image
          class="gads-hero-support__image"
          alt-text="${this.imageObj.aria_description}"
          image="${this.imageObj.image.url}"
          widths="lg:747,md:446,sm:599"
          ${this.imageObj.has_transparency ? u.HAS_TRANSPARENCY : ""}
          loading-eager
          priority-high>
      </gads-image>
    `
        }
        htmlImage() {
            const a = encodeURI(JSON.stringify([this.imageObj]));
            return h`
      <gads-image
          class="gads-hero-support__image"
          alt-text="${this.imageObj.aria_description}"
          images="${a}"
          widths="lg:747,md:446,sm:599"
          ${this.imageObj.has_transparency ? u.HAS_TRANSPARENCY : ""}
          loading-eager
          priority-high>
      </gads-image>
    `
        }
        render() {
            var a, b, c, d;
            return g`
      <section class="gads-hero-support glue-spacer-5-top">
        <div class="glue-page">
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-1 glue-grid__col--span-2-xl"></div>
            <div class="glue-grid__col glue-grid__col--span-10 glue-grid__col--span-8-xl">
              <div class="gads-hero-support__eyebrow-icon--container glue-spacer-2-bottom">
                <div class="gads-hero-support__eyebrow-icon--inner">
                  <gads-image aria-hidden="true"
                      image="${null === (a = this.eyebrowObj.eyebrow_icon) || void 0 === a ? void 0 : a.image.url}"
                      widths="sm:22"
                      ${(null === (c = null === (b = this.eyebrowObj) || void 0 === b ? void 0 : b.eyebrow_icon) || void 0 === c ? 0 : c.has_transparency) ? u.HAS_TRANSPARENCY : ""}>
                  </gads-image>
                  <span class="gads-hero-support__eyebrow-icon--text">${this.eyebrowObj.eyebrow_text}</span>
                </div>
              </div>
              <h1 class="gads-hero-support__headline glue-headline glue-text-center glue-spacer-4-bottom">${this.headlineText}</h1>
              <div class="gads-hero-support__cta--container">
                ${this.legacyCTAEtoRender()}
                ${this.disable_scheduler ? "" : this.legacyCTASchedulerCtaRender()}
                ${this.legacyCTAContactRender()}
                ${this.ctaBlock}
              </div>
              ${(null === (d = this.imageObj.html_image) || void 0 === d ? 0 : d.content) && this.imageObj.use_html_image ? this.htmlImage() : this.standardImage()}
            </div>
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-hero-support", dc);
    var ec = class extends L {
        constructor() {
            super(...arguments);
            this.copy = this.headline = this.jumplink_id = this.eyebrow_color = this.eyebrow_label = this.eyebrow_icon_id = this.background_color = "";
            this.card_type = "list-card";
            this.cards = []
        }
        get gtmModuleName() {
            return this.nodeName.toLowerCase()
        }
        get jumplinkId() {
            return this.getAttribute("jumplink-id") || this.jumplink_id
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get copyText() {
            return this.getAttribute(u.COPY) || this.copy
        }
        get eyebrowText() {
            return this.getAttribute("eyebrow-label") || this.eyebrow_label
        }
        get eyebrowIconId() {
            return this.getAttribute("eyebrow-icon-id") || this.eyebrow_icon_id
        }
        get eyebrowColor() {
            return this.getAttribute("eyebrow-color") || this.eyebrow_color
        }
        get cardType() {
            return this.getAttribute("card-type") || this.card_type
        }
        get backgroundVariation() {
            return this.getAttribute(u.BACKGROUND_COLOR) || this.background_color
        }
        get cardsList() {
            const a = this.getAttribute(u.CARDS) || this.cards;
            return a ? "string" === typeof a ? JSON.parse(a) : a : []
        }
        glueGrids() {
            return {
                offsetCol: "list-card" === this.cardType ? "glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-2 glue-grid__col--span-1-md glue-grid__col--span-2-xl" : "glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-2 glue-grid__col--span-1-md glue-grid__col--span-1-xl",
                containerCol: "list-card" === this.cardType ? "glue-grid__col glue-grid__col--span-8 glue-grid__col--span-10-md glue-grid__col--span-8-xl" : "glue-grid__col glue-grid__col--span-8 glue-grid__col--span-12-md glue-grid__col--span-12-lg glue-grid__col--span-10-xl"
            }
        }
        render() {
            return g`
      <section class="gads-jumplink-section gads-jumplink-section--${this.backgroundVariation}" id="${this.jumplinkId}">
        <div class="glue-page">
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-2 glue-grid__col--span-1-md glue-grid__col--span-2-xl"></div>
            <div class="glue-grid__col glue-grid__col--span-8 glue-grid__col--span-10-md glue-grid__col--span-8-xl">
              <div class="gads-jumplink-section__eyebrow-icon--container">
                <div class="gads-jumplink-section__eyebrow-icon--inner">
                  <gads-icon icon-id="${this.eyebrowIconId}" class-names="gads-jumplink-section__eyebrow-icon glue-icon glue-icon--24px  glue-icon--${this.eyebrowColor}" aria-hidden="true"></gads-icon>
                  <span class="gads-jumplink-section__eyebrow-icon--text gads-jumplink-section__eyebrow-icon--${this.eyebrowColor}">${this.eyebrowText}</span>
                </div>
              </div>
              <h2 class="gads-jumplink-section__headline glue-headline glue-headline--headline-2 glue-text-center glue-spacer-2-bottom">
                <span class="glue-font-weight-medium">${this.headlineText}</span>
              </h2>
              <p class="gads-jumplink-section__copy glue-body--large glue-text-center glue-spacer-5-bottom">
                ${this.copyText}
              </p>
            </div>
          </div>

          <div class="glue-grid">
            <div class="glue-grid__col ${this.glueGrids().offsetCol}"></div>
            <div class="glue-grid__col ${this.glueGrids().containerCol}">
              <div class="gads-jumplink-section__list gads-jumplink-section__list--${this.cardType}">
              ${this.cardsList ? [...this.cardsList].map(a=>h`
                  <gads-jumplink-${this.cardType}
                      time='${a.time}'
                      ${a.time_aria_label ? `time-aria-label="${a.time_aria_label}"` : ""}
                      headline='${a.card_heading}'
                      cta-url='${a.cta_url}'
                      cta-name='${a.gtm_cta_name}'
                      cta-label='${a.cta_label}'
                      cta-aria-description='${a.cta_aria_description}'
                      module-name='${this.gtmModuleName}'
                      label='${a.label}'
                      ${a.video_thumbnail ? `video-thumbnail='${encodeURI(JSON.stringify(a.video_thumbnail))}'` : ""}
                      video-thumbnail-aria='${a.video_thumbnail_aria_description}'>
                  </gads-jumplink-${this.cardType}>
              `) : ""}
              </div>
            </div>
          </div>
          ${this.ctaBlock ? h` <div class="cta-container glue-text-center glue-spacer-5-top">${this.ctaBlock}</div>` : ""}
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-jump-link-section", ec);
    var fc = (a="")=>(null === a || void 0 === a ? 0 : a.match(/https?:\/\/.*?google\.*?com/)) ? 'target="_blank" rel="noopener noreferrer"' : (null === a || void 0 === a ? 0 : a.match(/https?:\/\//)) ? 'target="_blank" rel="noopener noreferrer nofollow"' : ""
      , gc = a=>{
        var b;
        return a ? (a = null === (b = a.split("/home/")[1]) || void 0 === b ? void 0 : b.split("/").join("-").slice(0, -1)) ? a : "overview" : ""
    }
      , ic = (a,b,c,d,e=null)=>h`
    <div class="glue-header__container">
      <div class="glue-header__lock-up">
        ${"desktop" === a ? h`
          <button class="mobile-close-nav-btn" aria-label="${null === d || void 0 === d ? void 0 : d.aria_close_nav_drawer}">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#202124"/>
            </svg>
          </button>
        ` : ""}
        ${"mobile" === a ? h`
    <div class="glue-header__hamburger">
      <button class="glue-header__drawer-toggle-btn" aria-label="${null === d || void 0 === d ? void 0 : d.aria_open_nav_drawer}">
        <svg class="glue-icon glue-icon--24px" role="presentation" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
      </button>
    </div>
  ` : ""}
        <div class="glue-header__logo">
          <a class="glue-header__logo-link" href="${c}" title="Google ${b}">
            ${h`
    <div class="glue-header__logo-container">
      <svg class="glue-header__logo-svg" role="presentation" aria-hidden="true" viewBox="0 0 74 24"><path fill="#4285F4" d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z"></path><path fill="#EA4335" d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"></path><path fill="#4285F4" d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z"></path><path fill="#FBBC05" d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"></path><path fill="#34A853" d="M58 .24h2.51v17.57H58z"></path><path fill="#EA4335" d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z"></path></svg>
    </div>
  `}
            <span class="glue-header__logo--product" aria-hidden="true">${b}</span>
          </a>
        </div>
        ${e && "mobile" === a ? hc(e, a) : ""}
      </div>
    </div>
  `
      , jc = (a,b="desktop",c=null)=>h`
    <div class="gads-mega-nav-cta-container glue-header__container${"desktop" === b ? " glue-header__container--cta" : ""}">
      <div class="glue-header__cta">
        ${a.ctaBlock}
        ${a.disclaimer ? h`
          <div class="header-phone-number__rollover">
            <span class="glue-font-weight-medium">${a.disclaimer}</span>
          </div>
        ` : ""}
        ${c && "desktop" === b ? hc(c, b) : ""}
      </div>
    </div>
  `
      , nc = (a,b,c)=>h`
    <ul class="glue-header__list glue-header__list--nested glue-header__deep-nav">
      ${a.subcategories.map(d=>{
        const e = kc(d.heading_link, b);
        return h`
          ${d.heading && !d.heading.startsWith("{") ? h`
            <li class="glue-header__item l2-link ${e ? "glue-header__item--active glue-header--is-active" : ""}">
              <a class="glue-header__link glue-headline glue-headline--headline-6${!d.links.length || d.links.some(f=>f.has_arrow) ? " l2-link-no-nested" : ""}"
                  href="${d.heading_link || "#"}"
                  data-g-cta-name="${gc(d.heading_link)}"
                  data-g-module-name="gads-mega-nav"
                  ${e ? 'aria-current="page"' : ""}>
                ${d.heading}
                ${!d.links.length || d.links.some(f=>f.has_arrow) ? h`
                  <svg width="16" height="12" role="presentation" aria-hidden="true" class="glue-icon glue-icon--18px" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L8.59 1.41L12.17 5H0V7H12.17L8.59 10.59L10 12L16 6L10 0Z" fill="#202124"/>
                  </svg>
                ` : ""}
              </a>
              ${d.heading_link_additional_text ? h`<p class="l2-additional-text">${d.heading_link_additional_text}</p>` : ""}
            </li>
          ` : ""}
          ${d.links.length ? h`
              ${d.links.map(f=>{
            var k, m;
            const n = kc(f.cta_url, b, c)
              , t = (null === c || void 0 === c ? void 0 : c.parent_url) && (null === (k = f.cta_url) || void 0 === k ? void 0 : k.endsWith(c.parent_url));
            return f.cta_text ? h`
                  <li class="glue-header__item ${n ? "glue-header__item--active glue-header--is-active" : ""}${f.has_arrow ? " l2-link" : ""}">
                    <a class="glue-header__link l3-link${f.has_arrow ? " glue-headline glue-headline--headline-6 l2-link-no-nested l3-link--has-arrow" : ""}"
                        href="${t ? "#" : f.cta_url}"
                        data-g-cta-name="${gc(f.cta_url)}"
                        data-g-module-name="gads-mega-nav"
                        ${n ? 'aria-current="page"' : ""}>
                      ${f.cta_text}
                    </a>
                    ${t && (null === (m = c.links) || void 0 === m ? 0 : m.length) ? lc(c.links, b) : ""}
                  </li>
                ` : ""
        }
        )}
          ` : ""}
        `
    }
    )}
      ${a.featured_items.length ? mc(a) : ""}
    </ul>
  `
      , oc = (a,b,c)=>h`
    <div class="desktop-nav-panels-wrapper">
      ${Object.keys(a).map(d=>{
        const e = a[d];
        return e.subcategories.length ? h`
            <div class="desktop-nav-panel" data-nav-panel-index="${d}" id="nav-panel-index-${d}" role="menu" aria-label="${e.category_name}">
              <div class="links-panel">
                <div class="category-heading">
                  <h5 class="glue-headline glue-headline--headline-5" aria-hidden="true">${e.category_name}</h5>
                </div>
                <div class="subcategory-wrapper">
                  ${e.subcategories.map(f=>{
            const k = kc(f.heading_link, b);
            return h`
                      <div class="subcategory">
                        ${f.heading && !f.heading.startsWith("{") ? h`<div class="subcategory-heading${k ? " glue-header__item--active glue-header--is-active" : ""}">
                          ${f.heading_link ? h`
                            <a class="glue-headline glue-headline--headline-6 cat-heading cat-heading-link"
                                ${k ? 'aria-current="page"' : ""}
                                href="${f.heading_link}"
                                data-g-cta-name="${gc(f.heading_link)}"
                                data-g-module-name="gads-mega-nav"
                                ${f.heading_link_additional_text ? `aria-label="${f.heading}. ${f.heading_link_additional_text}."` : ""}>
                              ${f.heading}
                              <svg width="16" height="12" role="presentation" aria-hidden="true" class="glue-icon glue-icon--18px" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0L8.59 1.41L12.17 5H0V7H12.17L8.59 10.59L10 12L16 6L10 0Z" fill="currentColor"/></svg>
                            </a>
                            ` : h`
                              <p class="glue-headline glue-headline--headline-6 cat-heading">${f.heading}</p>
                            `}
                          <span aria-hidden="true">
                            ${f.heading_link_additional_text ? h`<p class="l2-additional-text">${f.heading_link_additional_text}</p>` : ""}
                          </span>
                        </div>` : ""}

                        <div class="subcategory-links">
                          ${f.links.map(m=>{
                const n = kc(m.cta_url, b, c);
                return m.cta_text ? h`
                              <a href="${m.cta_url}"
                                  role="menuitem"
                                  class="sub-cat-link${n ? " sub-cat-link-active" : ""}${m.has_arrow ? " glue-headline glue-headline--headline-6 cat-heading cat-heading-link sub-cat-link--has-arrow" : ""}"
                                  data-g-cta-name="${gc(m.cta_url)}"
                                  data-g-module-name="gads-mega-nav"
                                  ${n ? 'aria-current="page"' : ""}>
                                ${m.cta_text}
                                ${m.has_arrow ? h`
                                  <svg width="16" height="12" role="presentation" aria-hidden="true" class="glue-icon glue-icon--18px" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L8.59 1.41L12.17 5H0V7H12.17L8.59 10.59L10 12L16 6L10 0Z" fill="currentColor"/>
                                  </svg>
                                ` : null}
                              </a>
                            ` : ""
            }
            )}
                        </div>
                      </div>
                    `
        }
        )}
                </div>
              </div>
              ${e.featured_items.length ? mc(e) : ""}
            </div>
          ` : ""
    }
    )}
    </div>
  `
      , mc = a=>h`
    <div class="glue-header__item featured-item featured-item-${a.featured_background_color}">
      ${a.featured_image.image ? h`
        <gads-image
            class="featured-image"
            image="${a.featured_image.image.url}"
            widths="lg:317"
            alt-text="${a.featured_image.aria_description}"
            ${a.featured_image.has_transparency ? u.HAS_TRANSPARENCY : ""}>
        </gads-image>` : ""}
      <div class="featured-item-headline-wrapper glue-spacer-2-bottom glue-spacer-2-top">
        <span class="featured-item-headline glue-headline glue-headline--headline-5">${a.featured_headline}</span>
      </div>
      ${a.featured_items.map(b=>h`
          <a href="${b.featured_link_url}" class="glue-headline glue-headline--headline-6 glue-spacer-2-bottom glue-spacer-1-top featured-item-link-title">
            ${b.featured_link_text}
            <svg width="16" height="12" role="presentation" aria-hidden="true" class="glue-icon" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0L8.59 1.41L12.17 5H0V7H12.17L8.59 10.59L10 12L16 6L10 0Z" fill="currentColor"/></svg>
          </a>
          <p class="featured-body-copy glue-spacer-2-bottom">${b.featured_body_copy}</p>
        `)}
    </div>
  `
      , kc = (a,b,c)=>{
        b = !(null === a || void 0 === a || !a.endsWith(b));
        a = !!((null === c || void 0 === c ? 0 : c.parent_url) && (null === a || void 0 === a ? 0 : a.endsWith(c.parent_url)));
        return b || a
    }
      , pc = ({subcategories: a},b)=>{
        if (!a)
            return !1;
        const c = b.includes("/home/resources/") ? "/home/resources/" : b;
        return (b = a.some(d=>{
            var e;
            return null === (e = d.heading_link) || void 0 === e ? void 0 : e.endsWith(c)
        }
        )) ? b : a.some(d=>d.links.length && d.links.some(e=>{
            var f;
            return null === (f = e.cta_url) || void 0 === f ? void 0 : f.endsWith(c)
        }
        ))
    }
      , qc = ({sub_links: a},b)=>(null === a || void 0 === a ? void 0 : a.some(c=>{
        var d;
        return null === (d = c.cta_url) || void 0 === d ? void 0 : d.endsWith(b)
    }
    )) || !1
      , rc = (a,b,c,d)=>h`
    <div class="glue-header__container glue-header__container--linkbar">
      <nav class="glue-header__link-bar" aria-label="${b}">
        <ul class="glue-header__list">
          ${null === d || void 0 === d || !d.links || (null === d || void 0 === d ? 0 : d.campaign_name) && d.campaign_image ? null : h`
          <li class="glue-header__item glue-header--is-active tier-2-desktop-bar">
            <a class="glue-header__link tier-2-parent-false-link" href="#" tabindex="-1"></a>
              ${lc(d.links, c, !0)}
            </li>
          `}
          ${Object.keys(a).map((e,f)=>{
        const k = a[e]
          , m = k.subcategories.length
          , n = k.category_link
          , t = kc(n, c)
          , B = !d && pc(k, c)
          , q = (null === d || void 0 === d ? void 0 : d.parent_url) && pc(k, d.parent_url);
        return h`
              <li class="glue-header__item
                  ${t || B ? " glue-header__item--active glue-header--is-active" : ""}
                  ${q ? " tier-2-active-parent" : ""}">
                <a class="glue-header__link glue-headline glue-headline--headline-5 initial-links${m ? " has-nested-links" : ""}"
                    href="${m ? "#" : n}"
                    title="${k.category_name}"
                    ${!m && (null === n || void 0 === n ? 0 : n.match("http")) ? 'target="_blank" rel="noopener noreferrer"' : ""}
                    ${m ? `
                      data-deep-nav-index="${e}"
                      aria-haspopup="menu"
                      aria-controls="nav-panel-index-${f}"
                    ` : `
                      data-g-cta-name="${gc(n)}"
                      data-g-module-name="gads-mega-nav"
                    `}
                    ${t ? 'aria-current="page"' : ""}>
                  ${k.category_name}
                  ${m ? '<span class="arrow"></span>' : ""}
                </a>
                ${m ? nc(k, c, d) : null}
              </li>
            `
    }
    )}
        </ul>
      </nav>
    </div>
  `
      , lc = (a,b,c=!1)=>h`
    <ul class="glue-header__list ${c ? "tier-2-list glue-header__list--nested glue-header__deep-nav" : ""}" role="menu">
      ${a.map(d=>{
        if (d.cta_text) {
            var e = qc(d, b);
            const f = d.cta_url ? kc(d.cta_url, b) : !1
              , k = d.sub_links && d.sub_links.length;
            e = e ? "glue-header--is-active glue-header__item--active" : f ? "glue-header__item--active" : "";
            return h`
            <li class="glue-header__item ${e}" role="none">
              <a class="glue-header__link ${k ? "has-nested-links" : ""}"
                  href="${d.cta_url && !k ? d.cta_url : "#"}" role="menuitem"
                  ${!k && d.cta_url ? `
                      data-g-cta-name="${gc(d.cta_url)}"
                      data-g-module-name="gads-mega-nav-tier-2"
                  ` : null}
                  ${d.cta_url ? fc(d.cta_url) : null}
                  ${k ? 'aria-expanded="false"' : ""}>
                ${d.cta_text}
                ${k ? '<span class="arrow"></span>' : ""}
              </a>
              ${k && d.sub_links ? lc(d.sub_links, b) : ""}
            </li>
          `
        }
        return ""
    }
    ).join("")}
    </ul>
  `
      , hc = (a,b)=>a.isV2 ? h`
      <gads-single-sign-on-v2
          ads-account-status='${JSON.stringify(a.adsAccountStatus)}'
          cta='${a.cardCta}'
          cta-sign-in='${a.signIn}'
          cta-start-now='${a.startNow}'
          logged-in-url='${a.loggedInUrl}'
          mock-api-data='${a.mockApi}'
          modal='${JSON.stringify(a.modal)}'
          module-name='${a.moduleName}'
          profile-alt-text='${a.profileAltText}'
          profile-cta-name='${a.profileCtaName}'
          profile-image-placeholder='${a.profileImageBuildPlaceholder}'
          type='${b}'>
      </gads-single-sign-on>
    ` : h`
      <gads-single-sign-on
          cta='${a.cardCta}'
          cta-sign-in='${a.signIn}'
          cta-start-now='${a.startNow}'
          logged-in-url='${a.loggedInUrl}'
          mock-api-data='${a.mockApi}'
          module-name='${a.moduleName}'
          profile-alt-text='${a.profileAltText}'
          profile-cta-name='${a.profileCtaName}'
          profile-image-placeholder='${a.profileImageBuildPlaceholder}'
          type='${b}'>
      </gads-single-sign-on>
    `
      , tc = (a,b)=>{
        var c, d, e;
        return a ? h`
    <div class="gads-mega-nav__subnav">
      <div class="gads-mega-nav__subnav-campaign-container">
        ${(null === (d = null === (c = a.campaign_image) || void 0 === c ? void 0 : c.image) || void 0 === d ? 0 : d.url) ? h`
          <gads-image
              aria-hidden="true"
              image="${a.campaign_image.image.url}"
              role="presentation"
              widths="sm:20">
          </gads-image>
        ` : null}
        ${a.campaign_name ? h`
          <span class="gads-mega-nav__subnav-campaign-name">
            ${a.campaign_name}
          </span>
        ` : null}
      </div>
      ${(null === (e = a.links) || void 0 === e ? 0 : e.length) ? h`
        <ul class="glue-header__list">
          ${a.links.map(f=>{
            if (!f.cta_url)
                return null;
            const k = kc(f.cta_url, b) ? " gads-mega-nav__subnav-link--is-active" : null;
            return h`
              <li class="glue-header__item">
                <a class="glue-header__link${k}"
                    href="${f.cta_url}"
                    ${fc(f.cta_url)}
                    data-g-cta-name="${gc(f.cta_url)}"
                    data-g-module-name="gads-mega-nav-tier-2">
                  ${f.cta_text}
                </a>
              </li>
            `
        }
        )}
        </ul>
      ` : null}
    </div>
  ` : null
    }
    ;
    var uc = class extends L {
        constructor() {
            super(...arguments);
            this.content_jump_text = this.categories_aria_label = this.categories = "";
            this.cta_sticky = null;
            this.eto_number = this.eto_disclaimer = "";
            this.hide_on_scroll = !1;
            this.homepage_url = "";
            this.navigation_aria_labels = null;
            this.office_hours = this.product = this.parent_menu_aria = "";
            this.single_sign_on = null;
            this.tier_2 = {};
            this.pageShader = this.querySelector(".page-shader");
            this.mainNavLinks = this.querySelectorAll(".initial-links");
            this.panelCache = [];
            this.headerEl = this.querySelector(".glue-header");
            this.glueNav = null;
            this.tier2DesktopBar = this.querySelector(".tier-2-desktop-bar")
        }
        connectedCallback() {
            var a;
            this.headerEl || (this.replaceChildren(this.render()),
            this.headerEl = this.querySelector(".glue-header"),
            this.pageShader = this.querySelector(".page-shader"),
            this.mainNavLinks = this.querySelectorAll(".initial-links"),
            this.tier2DesktopBar = this.querySelector(".tier-2-desktop-bar"));
            const b = null === (a = this.headerEl) || void 0 === a ? void 0 : a.hasAttribute("hide-on-scroll");
            if (l.GLUE in window && this.headerEl) {
                this.glueNav = new glue.Header(this.headerEl,{
                    hideOnScroll: b,
                    steppedNav: !0
                });
                this.tier2DesktopBar && this.tier2DesktopBar.parentNode && this.tier2DesktopBar.parentNode.appendChild(this.tier2DesktopBar);
                this.querySelectorAll('[href="#"]').forEach(d=>{
                    d.addEventListener(x.CLICK, e=>e.preventDefault())
                }
                );
                (a = this.querySelector(".mobile-close-nav-btn")) && a.addEventListener(x.CLICK, ()=>{
                    this.glueNav && this.glueNav.drawer.close()
                }
                );
                a = window.matchMedia(this.getMediaBreakpoint(r.LG));
                const c = d=>{
                    this.desktopNavPanelHandler(d)
                }
                ;
                this.addEventListener(x.KEYUP, d=>{
                    d.code === C.ESCAPE && c(d)
                }
                );
                a.matches && (this.mainNavLinks.forEach(d=>{
                    d.addEventListener(x.CLICK, c);
                    this.setExpandedAttribute(d)
                }
                ),
                this.pageShader.addEventListener(x.CLICK, c));
                a.onchange = d=>{
                    d.matches ? (this.querySelector(`.${"desktop-nav-panel"}.${w.SHOW}`) && this.pageShader.classList.add("nav-open"),
                    this.mainNavLinks.forEach(e=>{
                        e.addEventListener(x.CLICK, c);
                        this.pageShader.addEventListener(x.CLICK, c);
                        this.setExpandedAttribute(e)
                    }
                    )) : (this.pageShader.classList.remove("nav-open"),
                    this.mainNavLinks.forEach(e=>{
                        e.removeEventListener(x.CLICK, c);
                        this.pageShader.removeEventListener(x.CLICK, c);
                        this.setExpandedAttribute(e, !1)
                    }
                    ))
                }
                ;
                (new ResizeObserver(()=>{
                    this.checkPanelHeightOverflow()
                }
                )).observe(this.headerEl);
                this.glueNav.root.addEventListener(x.GLUE_HEADER_HIDE, ()=>{
                    const d = new Event(x.GADS_HEADER_HIDE);
                    document.dispatchEvent(d)
                }
                )
            }
            Oa.displayContactButtons()
        }
        setExpandedAttribute(a, b=!0) {
            a.classList.contains("has-nested-links") && (b ? a.setAttribute(u.ARIA_EXPANDED, "false") : a.removeAttribute(u.ARIA_EXPANDED))
        }
        checkPanelHeightOverflow() {
            for (const a of this.panelCache) {
                const b = window.innerHeight;
                a.offsetHeight + 96 > b ? (a.classList.add("overflow-height"),
                a.style.setProperty("--variable-height", `${b - 48}px`)) : (a.classList.remove("overflow-height"),
                a.style.removeProperty("--variable-height"))
            }
        }
        desktopNavPanelHandler(a) {
            const b = a.currentTarget;
            b.classList.contains("has-nested-links") && a.preventDefault();
            a = this.querySelector(`[data-nav-panel-index="${b.dataset.deepNavIndex}"]`);
            var c = this.querySelector(`.${"desktop-nav-panel"}.${w.SHOW}`);
            if (c && c !== a) {
                c.classList.remove(w.SHOW);
                if (c = c.previousElementSibling)
                    c.classList.remove(w.ACTIVE),
                    c.setAttribute(u.ARIA_EXPANDED, "false");
                this.pageShader.classList.remove("nav-open");
                document.body.classList.remove(w.NO_SCROLL);
                this.checkPanelHeightOverflow()
            }
            c = b.nextElementSibling;
            (null === c || void 0 === c ? 0 : c.classList.contains("desktop-nav-panel")) ? (c.classList.toggle(w.SHOW),
            b.setAttribute(u.ARIA_EXPANDED, `${"true" !== b.ariaExpanded}`),
            this.pageShader.classList.toggle("nav-open"),
            document.body.classList.toggle(w.NO_SCROLL),
            this.checkPanelHeightOverflow()) : a && (a = null === a || void 0 === a ? void 0 : a.cloneNode(!0),
            this.panelCache.push(a),
            b.insertAdjacentElement("afterend", a),
            this.checkPanelHeightOverflow(),
            a.classList.add(w.SHOW),
            document.body.classList.add(w.NO_SCROLL),
            this.pageShader.classList.add("nav-open"),
            b.setAttribute(u.ARIA_EXPANDED, "true"));
            b.classList.toggle(w.ACTIVE)
        }
        get contentJumpText() {
            return this.getAttribute("content-jump-text") || this.content_jump_text
        }
        get categoryData() {
            var a = this.getAttribute("categories") || this.categories;
            a = "string" === typeof a ? JSON.parse(a) : a;
            for (const c of a) {
                c.category_link && (c.category_link = this.relativizeKintaroLink(c.category_link));
                var b = c.subcategories;
                if (b.length)
                    for (const d of b)
                        if (d.heading_link && (d.heading_link = this.relativizeKintaroLink(d.heading_link)),
                        b = d.links,
                        b.length)
                            for (const e of b)
                                e.cta_url && (e.cta_url = this.relativizeKintaroLink(e.cta_url))
            }
            return a
        }
        get categoryAriaLabel() {
            return this.getAttribute("categories-aria-label") || this.categories_aria_label
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get hideOnScroll() {
            const a = this.getAttribute("hide-on-scroll") || this.hide_on_scroll;
            return "boolean" === typeof a ? a : "true" === a
        }
        get homepageUrl() {
            return this.relativizeKintaroLink(this.getAttribute("homepage-url") || this.homepage_url)
        }
        get navCtaInfo() {
            const a = this.getAttribute("eto-number") || this.eto_number;
            return {
                ctaBlock: this.ctaBlock,
                disclaimer: this.getAttribute("eto-disclaimer") || this.eto_disclaimer,
                tel: a,
                tel_formatted: this.formatEto(a) || ""
            }
        }
        get parentMenuAria() {
            return this.getAttribute("parent-menu-aria") || this.parent_menu_aria
        }
        get productName() {
            return this.getAttribute("product") || this.product
        }
        get officeHours() {
            return this.getAttribute(u.OFFICE_HOURS) || this.office_hours
        }
        get navigationAriaLabels() {
            const a = this.navigation_aria_labels || this.getAttribute(u.NAVIGATION_ARIA_LABELS);
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get singleSignOn() {
            const a = this.getAttribute("single-sign-on");
            return a ? JSON.parse(a) : this.single_sign_on || null
        }
        get ssoCardCta() {
            var a;
            return JSON.stringify(null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.cta) || null
        }
        get ssoMockApi() {
            var a;
            return (null === (a = this.singleSignOn) || void 0 === a ? 0 : a.mock_api_data) ? JSON.stringify(this.singleSignOn.mock_api_data) : null
        }
        get ssoNavCta() {
            var a;
            return JSON.stringify(null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.nav_cta) || null
        }
        get ssoProfileAltText() {
            var a;
            return (null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.profile_alt_text) || null
        }
        get ssoProfileCtaName() {
            var a;
            return (null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.profile_cta_name) || null
        }
        get ssoImageBuildPlaceholder() {
            var a, b;
            return (null === (b = null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.profile_image_placeholder) || void 0 === b ? void 0 : b.url) || null
        }
        get ssoLoggedInUrl() {
            var a;
            return (null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.logged_in_url) || null
        }
        get ssoInfo() {
            if (!this.singleSignOn)
                return null;
            let a = {
                signIn: this.getCtaByGtmName(A.SIGNIN),
                startNow: this.getCtaByGtmName(A.STARTNOW),
                cardCta: this.ssoCardCta,
                mockApi: this.ssoMockApi,
                profileAltText: this.ssoProfileAltText,
                profileCtaName: this.ssoProfileCtaName,
                profileImageBuildPlaceholder: this.ssoImageBuildPlaceholder,
                loggedInUrl: this.ssoLoggedInUrl,
                moduleName: this.gtmModuleName
            };
            "is_v2"in this.singleSignOn && (a = {
                ...a,
                adsAccountStatus: this.singleSignOn.ads_account_status,
                modal: this.singleSignOn.modal,
                isV2: !0
            });
            return a
        }
        get stickyCTA() {
            var a = this.getAttribute("cta-sticky") || this.cta_sticky;
            if (a) {
                a = "string" === typeof a ? JSON.parse(a) : a;
                const b = "string" === typeof a.cta ? JSON.parse(a.cta) : a.cta;
                return b ? {
                    cta: b,
                    is_sticky: a.is_sticky
                } : null
            }
            return null
        }
        get tier2() {
            var a, b = this.getAttribute("tier-2") || this.tier_2;
            if (!b)
                return null;
            b = "string" === typeof b ? JSON.parse(b) : b;
            if (null === (a = b.links) || void 0 === a || !a.length)
                return null;
            for (const c of b.links)
                if (c.cta_url && (c.cta_url = this.relativizeKintaroLink(c.cta_url)),
                a = c.sub_links,
                null === a || void 0 === a ? 0 : a.length)
                    for (const d of a)
                        d.cta_url && (d.cta_url = this.relativizeKintaroLink(d.cta_url));
            return b
        }
        render() {
            const a = this.tier2;
            var b = JSON.stringify(this.officeHours)
              , c = this.hideOnScroll ? "hide-on-scroll" : null
              , d = h`
    <a href="#main-page-content" class="glue-header__link glue-header__skip-content">
      ${this.contentJumpText}
    </a>
  `
              , e = ic("mobile", this.productName, this.homepageUrl, this.navigationAriaLabels, this.ssoInfo)
              , f = jc(this.navCtaInfo, "mobile")
              , k = ic("desktop", this.productName, this.homepageUrl, this.navigationAriaLabels)
              , m = h`
    <div class="glue-header__container glue-header__stepped-nav">
      <div class="glue-header__stepped-nav-controls-container">
        <div class="glue-header__stepped-nav-controls" data-glue-steppednav-label="${this.parentMenuAria}">
          <div class="glue-header__stepped-nav-controls-arrow">
            <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--18px" viewBox="0 0 24 24"><path d="M16.41 5.41L15 4l-8 8 8 8 1.41-1.41L9.83 12"></path></svg>
            <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--18px glue-header__stepped-nav-subnav-icon" viewBox="0 0 24 24"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>
          </div>
          <div class="glue-header__stepped-nav-controls-title glue-header__link glue-headline glue-headline--headline-5"></div>
        </div>
      </div>
      <div class="glue-header__stepped-nav-menus"></div>
    </div>
  `
              , n = rc(this.categoryData, this.categoryAriaLabel, this.url, a)
              , t = jc(this.navCtaInfo, "desktop", this.ssoInfo)
              , B = (null === a || void 0 === a ? 0 : a.campaign_image) && a.campaign_name ? tc(this.tier2, this.url) : null
              , q = oc(this.categoryData, this.url, a);
            var F = (F = this.stickyCTA) ? h`
      <gads-sticky-cta
          cta='${JSON.stringify(F.cta)}'
          is-sticky="${F.is_sticky}">
      </gads-sticky-cta>` : "";
            return g`
      <header class="glue-header ${a ? "glue-header--double" : "glue-header--single"}"
          office-hours='${b}' ${c}>
        ${d}
        <div class="glue-header__bar glue-header__bar--mobile">
          <div class="glue-header__tier">
            ${e}
            ${f}
          </div>
        </div>
        <div class="glue-header__bar glue-header__bar--desktop glue-header__drawer">
          <div class="glue-header__tier">
            ${k}
            ${m}
            ${n}
            ${t}
            ${B}
          </div>
        </div>
        <div class="glue-header__drawer-backdrop"></div>
      </header>
      ${q}
      <div class="page-shader"></div>
      ${F}
    `
        }
    }
    ;
    customElements.define("gads-mega-nav", uc);
    var vc = class extends L {
        constructor() {
            var a;
            super(...arguments);
            this.featured_product = this.disclaimer = "";
            this.first_card_featured = !1;
            this.view_more_cta_text = this.view_less_cta_text = this.tools_cards = this.subheadline = this.product_cards = this.headline = "";
            this.hiddenCardsContainerElem = this.querySelector(".hidden-cards");
            this.hiddenCardsElem = null === (a = this.hiddenCardsContainerElem) || void 0 === a ? void 0 : a.querySelectorAll(".animated-card");
            this.showBtn = this.querySelector(".show-more-btn button");
            this.showBtnSvg = this.querySelector(".show-more-btn svg")
        }
        connectedCallback() {
            var a;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.hiddenCardsContainerElem = this.querySelector(".hidden-cards"),
            this.hiddenCardsElem = null === (a = this.hiddenCardsContainerElem) || void 0 === a ? void 0 : a.querySelectorAll(".animated-card"),
            this.showBtn = this.querySelector(".show-more-btn button"),
            this.showBtnSvg = this.querySelector(".show-more-btn svg"));
            if (this.hiddenCardsContainerElem) {
                a = this.hiddenCardsContainerElem.getAttribute("view-more-cta-text");
                const b = this.hiddenCardsContainerElem.getAttribute("view-less-cta-text");
                if (a && b) {
                    const d = new Map([[a, b], [b, a]]);
                    this.hiddenCardsElem && this.hiddenCardsElem.forEach((e,f)=>{
                        e.style.transitionDelay = `${100 * (f + 4)}ms`;
                        e.ariaHidden = "false"
                    }
                    );
                    this.showBtn && this.showBtn.addEventListener(x.CLICK, ()=>{
                        var e;
                        this.showBtn && this.showBtn.lastChild && (this.showBtn.lastChild.textContent = d.get(null === (e = this.showBtn.textContent) || void 0 === e ? void 0 : e.trim()));
                        if (this.hiddenCardsContainerElem)
                            if (this.hiddenCardsContainerElem.classList.contains(w.ACTIVE)) {
                                this.hiddenCardsElem && this.hiddenCardsElem.forEach((k,m)=>{
                                    k.style.transitionDelay = `${40 * m}ms`;
                                    k.ariaHidden = "true"
                                }
                                );
                                this.hiddenCardsContainerElem.classList.remove(w.ACTIVE, "glue-spacer-5-top");
                                this.showBtnSvg && this.showBtnSvg.classList.remove("icon-rotated");
                                const f = setTimeout(()=>{
                                    this.hiddenCardsContainerElem && (this.hiddenCardsContainerElem.style.maxHeight = "0",
                                    this.hiddenCardsContainerElem.style.overflow = "hidden",
                                    clearTimeout(f))
                                }
                                , G.FOUR_HUNDRED)
                            } else
                                this.hiddenCardsElem && this.hiddenCardsElem.forEach((f,k)=>{
                                    f.style.transitionDelay = `${100 * (k + 10)}ms`;
                                    f.ariaHidden = "false"
                                }
                                ),
                                this.hiddenCardsContainerElem.style.maxHeight = `${this.hiddenCardsContainerElem.scrollHeight}px`,
                                this.hiddenCardsContainerElem.style.overflow = "unset",
                                this.hiddenCardsContainerElem.classList.add(w.ACTIVE, "glue-spacer-5-top"),
                                this.showBtnSvg && this.showBtnSvg.classList.add("icon-rotated")
                    }
                    );
                    this.hiddenCardsContainerElem.addEventListener(x.TRANSITION_END, e=>{
                        "max-height" === e.propertyName && this.showBtn && (e = this.showBtn.getBoundingClientRect().top + window.scrollY - 120,
                        window.scroll({
                            top: e,
                            behavior: E.SMOOTH
                        }))
                    }
                    )
                } else
                    throw Error("View more/less button text has not been supplied");
                const c = ea((()=>{
                    var d;
                    if (null === (d = this.hiddenCardsContainerElem) || void 0 === d ? 0 : d.classList.contains(w.ACTIVE))
                        this.hiddenCardsContainerElem.style.maxHeight = `${this.hiddenCardsContainerElem.scrollHeight}px`
                }
                ).bind(this), 100);
                window.addEventListener(x.RESIZE, ()=>c())
            }
        }
        get gtmModuleName() {
            return this.nodeName.toLowerCase()
        }
        get featuredProduct() {
            var a = this.getAttribute("featured-product") || this.featured_product;
            return a && (a = "string" === typeof a ? JSON.parse(decodeURI(a)) : a,
            Object.hasOwnProperty.call(a, u.CTA)) ? a : null
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get subHeadline() {
            return this.getAttribute(u.SUBHEADLINE) || this.subheadline
        }
        get disclaimerText() {
            return this.getAttribute(u.DISCLAIMER) || this.disclaimer
        }
        get cardData() {
            const a = this.getAttribute(u.CARDS) || this.product_cards || this.tools_cards;
            return "string" === typeof a ? JSON.parse(decodeURI(a)) : a
        }
        get topCards() {
            return 3 < this.cardData.length ? this.cardData.slice(0, 3) : this.cardData
        }
        get hiddenCardsContainer() {
            return 3 < this.cardData.length ? this.cardData.slice(3) : null
        }
        get viewMoreCtaText() {
            return this.getAttribute("view-more-cta-text") || this.view_more_cta_text
        }
        get viewLessCtaText() {
            return this.getAttribute("view-less-cta-text") || this.view_less_cta_text
        }
        get cardType() {
            return ""
        }
        get isToolsCard() {
            return "toolsCard" === this.cardType
        }
        get firstCardFeatured() {
            return this.getAttribute("first-card-featured") || this.first_card_featured
        }
        fallbackClasses() {
            return 2 === this.cardData.length ? "fallback-layout" : ""
        }
        featuredProductRender(a) {
            return h`
      <gads-featured-product
          body-copy=${encodeURI(a.body_copy)}
          cta='${JSON.stringify(a.cta)}'
          image='${JSON.stringify(a.image)}'
          main-headline="${a.main_headline}"
          media-alignment="${a.media_alignment}"
          ${a.image.has_transparency ? u.HAS_TRANSPARENCY : ""}
      ></gads-featured-product>
    `
        }
        hiddenCardsContainerRender() {
            return h`
      <div class="hidden-cards-container glue-spacer-5-top">
        <div class="glue-text-center show-more-btn">
          <gads-button cta-text="${this.viewMoreCtaText}" icon-type="glue-icon-right" icon-id="EXPAND_MORE"></gads-button>
        </div>
        <div class="related-cards-container hidden-cards ${this.isToolsCard ? "related-tools-cards" : ""}"
            view-more-cta-text="${this.viewMoreCtaText}"
            view-less-cta-text="${this.viewLessCtaText}">
          ${this.hiddenCardsContainer ? this.hiddenCardsContainer.map(a=>{
                var b;
                const c = a.images && this.formatMultiImage(a.images, !0);
                return h`
              <gads-card
                  ${a.body ? `body='${encodeURI(a.body)}'` : ""}
                  card-type="${this.cardType}"
                  ${this.isToolsCard ? `cta-name="${a.gtm_cta_name}" cta-url="${a.cta_url}"` : `cta='${JSON.stringify(a.cta)}'`}
                  has-transparency="${a.has_transparency}"
                  headline="${a.headline || a.title}"
                  icon="${null === (b = a.icon) || void 0 === b ? void 0 : b.url}"
                  images='${c}'
                  module-name="${this.gtmModuleName}"
              ></gads-card>
            `
            }
            ) : ""}
        </div>
      </div>
    `
        }
        topCardsRender() {
            return h`
      <div class="related-cards-container glue-spacer-5-top ${this.fallbackClasses()} ${this.isToolsCard ? "related-tools-cards" : ""}">
        ${this.topCards.map((a,b)=>{
                var c;
                const d = a.images && this.formatMultiImage(a.images, !0);
                return h`
            <gads-card
                ${a.body ? `body='${encodeURI(a.body)}'` : ""}
                card-type="${this.cardType}"
                ${this.isToolsCard ? `cta-name="${a.gtm_cta_name}" cta-url="${a.cta_url}"` : `cta='${JSON.stringify(a.cta)}'`}
                first-card-featured="${0 === b ? this.firstCardFeatured : ""}"
                has-transparency="${a.has_transparency}"
                headline="${a.headline || a.title}"
                icon="${null === (c = a.icon) || void 0 === c ? void 0 : c.url}"
                images='${d}'
                module-name="${this.gtmModuleName}">
            </gads-card>
          `
            }
            )}
      </div>
    `
        }
        disclaimerRender() {
            return h`
      <div class="disclaimer-container">
        <p class="glue-font-weight-regular glue-small-text">
          ${this.disclaimerText}
        </p>
      </div>
    `
        }
        render() {
            const a = this.featuredProduct;
            return g`
      <section class="gads-related-items glue-spacer-6-bottom ${a ? "" : "glue-spacer-6-top"}">
        <div class="${a ? "gads-related-items__container--arc" : "gads-related-items__container"}">
          <div class="glue-page">
            ${this.headlineText || this.subHeadline ? h`
              <div class="glue-grid glue-text-center">
                <div class="glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-2"></div>
                <div class="copy-section glue-grid__col glue-grid__col--span-8">
                  ${this.headlineText ? h`
                    <h2 class="main-headline glue-headline glue-headline--headline-2">
                      <span class="glue-spacer-2-bottom glue-font-weight-medium">${this.headlineText}</span>
                    </h2>
                  ` : ""}
                  ${this.subHeadline ? h`
                    <p class="main-subheadline ${a ? "main-subheadline--spacer" : ""}">${this.subHeadline}</p>
                  ` : ""}
                </div>
              </div>
            ` : ""}
            ${a ? this.featuredProductRender(a) : ""}
            <div class="glue-grid">
              <div class="glue-grid__col glue-grid__col--span-1 ${this.isToolsCard ? "glue-grid__col--span-0-md" : ""} glue-grid__col--span-0-lg"></div>
              <div class="glue-grid__col glue-grid__col--span-10 ${this.isToolsCard ? "glue-grid__col--span-12-md" : ""} glue-grid__col--span-12-lg">
                ${this.topCardsRender()}
                ${this.disclaimerText ? this.disclaimerRender() : ""}
                ${this.hiddenCardsContainer ? this.hiddenCardsContainerRender() : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("related-various", vc);
    var wc = class extends vc {
        get cardType() {
            return "productCard"
        }
    }
    ;
    customElements.define("gads-related-products", wc);
    var xc = class extends vc {
        get cardType() {
            return "toolsCard"
        }
    }
    ;
    customElements.define("gads-related-tools", xc);
    var yc = class extends L {
        constructor() {
            super(...arguments);
            this.gtm_cta_name = this.copy = "";
            this.button = this.querySelector(".glue-button");
            this._isReducedMotion = J.isReducedMotion
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.button = this.querySelector(".glue-button"));
            window.addEventListener(x.DOM_CONTENT_LOADED, ()=>{
                this.button && this.button.addEventListener(x.CLICK, ()=>{
                    window.scroll({
                        top: 0,
                        behavior: this._isReducedMotion ? E.AUTO : E.SMOOTH
                    });
                    document.body.setAttribute(u.TABINDEX, "-1");
                    document.body.focus();
                    document.body.removeAttribute(u.TABINDEX)
                }
                )
            }
            )
        }
        get copyText() {
            return this.getAttribute(u.COPY) || this.copy
        }
        get gtmCtaName() {
            return this.getAttribute(u.GTM_CTA_NAME) || this.gtm_cta_name
        }
        get gtmModuleName() {
            return this.getAttribute(u.GTM_MODULE_NAME) || this.nodeName.toLowerCase()
        }
        render() {
            return g`
      <section class="gads-resource-jumplink-to-top">
        <gads-button
            cta-name="${this.gtmCtaName}"
            cta-text="${this.copyText}"
            icon-type="glue-icon"
            icon-id="ARROW_UPWARD"
            icon-size="24"
            emphasis="high"
            module-name="${this.gtmModuleName}"
        ></gads-button>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-resource-jumplink-to-top", yc);
    var zc = class extends L {
        constructor() {
            super(...arguments);
            this.article_copy_blocks = this.headline = "";
            this._listItem = this.querySelectorAll(".gads-resource-toc__item");
            this.listItem = (a,b)=>h`
      <li data-article="${a}" class="gads-resource-toc__item">
        <a href="javascript:void(0)" class="glue-inline-link">${b}</a>
      </li>
    `
        }
        connectedCallback() {
            function a(c) {
                b && b.scrollToId(c, {
                    hash: !1,
                    offset: {
                        x: 0,
                        y: 100
                    }
                });
                (c = document.getElementById(c)) && c.focus({
                    preventScroll: !0
                })
            }
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._listItem = this.querySelectorAll(".gads-resource-toc__item"));
            const b = l.GLUE in window && new glue.SmoothScroll;
            b && this._listItem && this._listItem.forEach(c=>{
                const d = c.dataset.article;
                d && (c.addEventListener(x.CLICK, ()=>{
                    a(d)
                }
                ),
                c.addEventListener(x.KEYPRESS, e=>{
                    e.code === C.ENTER && a(d)
                }
                ))
            }
            )
        }
        get headlineText() {
            const a = this.getAttribute(u.HEADLINE);
            return "string" === typeof a ? decodeURI(a) : this.headline
        }
        get articleCopyBlocks() {
            var a = this.getAttribute("article-copy-blocks");
            return (a = "string" === typeof a ? JSON.parse(decodeURI(a)) : this.article_copy_blocks) && Array.isArray(a) ? a.map(b=>this.listItem(b.article_id, b.article_title)) : [""]
        }
        render() {
            return g`
      <section class="gads-resource-toc">
        <div class="gads-resource-toc__wrapper glue-page">
          <div class="glue-grid">
            <div class="glue-grid__col glue-grid__col--span-0-sm glue-grid__col--span-1-xl"></div>
              <nav class="gads-resource-toc__list glue-grid__col glue-grid__col--span-3-lg glue-grid__col--span-2-xl" aria-labelledby="gads-resource-toc__title">
                <p id="gads-resource-toc__title" class="gads-resource-toc__title">${this.headlineText}</p>
                <ol>
                  ${this.articleCopyBlocks}
                </ol>
              </nav>
            </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-resource-table-of-contents", zc);
    var Ac = {
        CONTENT_JUMP: "content-jump-text",
        CTA_STICKY: "cta-sticky",
        HIDE_ON_SCROLL: "hide-on-scroll",
        LOCKUP_TEXT: "lockup-text",
        ROLLOVER_TEXT: "rollover-text",
        SINGLE_SIGN_ON: "single-sign-on",
        TEL: "tel"
    }
      , Bc = {
        GLUE_IS_SHOWING_DRAWER: "glue-is-showing-drawer"
    }
      , Cc = {
        GLUE_HEADER: ".glue-header",
        GLUE_HEADER_DRAWER: ".glue-header__drawer",
        BUTTON: "gads-button"
    }
      , Dc = class extends L {
        constructor() {
            var a;
            super(...arguments);
            this.content_jump_text = null;
            this.cta_sticky = {};
            this.hide_on_scroll = !1;
            this.lockup_text = null;
            this.navigation_aria_labels = {};
            this.office_hours = {};
            this.rollover_text = null;
            this.single_sign_on = {};
            this.header = void 0;
            this.headerEl = this.querySelector(Cc.GLUE_HEADER);
            this.drawerEl = this.querySelector(Cc.GLUE_HEADER_DRAWER);
            this.drawerButtons = null === (a = this.drawerEl) || void 0 === a ? void 0 : a.querySelectorAll(Cc.BUTTON)
        }
        connectedCallback() {
            var a, b;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.headerEl = this.querySelector(Cc.GLUE_HEADER),
            this.drawerButtons = null === (a = this.drawerEl) || void 0 === a ? void 0 : a.querySelectorAll(Cc.BUTTON));
            let c = Q.getBpName();
            const d = null === (b = this.headerEl) || void 0 === b ? void 0 : b.hasAttribute(Ac.HIDE_ON_SCROLL)
              , {SM: e, MD: f} = r;
            if (this.drawerButtons && [e, f].includes(c))
                for (const k of this.drawerButtons)
                    (a = k.firstElementChild) && a.setAttribute(u.TABINDEX, "-1");
            Q.subscribe(k=>{
                c = k;
                k = [e, f].includes(c);
                if (this.drawerButtons)
                    for (const m of this.drawerButtons) {
                        const n = m.firstElementChild;
                        n && (k ? n.setAttribute(u.TABINDEX, "-1") : n.removeAttribute(u.TABINDEX))
                    }
            }
            );
            window.addEventListener(x.DOM_CONTENT_LOADED, ()=>{
                this.headerEl && l.GLUE in window && (this.header = new glue.Header(this.headerEl,{
                    hideOnScroll: d
                }));
                this.addEventListener(x.CLICK, ()=>{
                    var k;
                    if ([e, f].includes(c)) {
                        const m = null === (k = this.headerEl) || void 0 === k ? void 0 : k.classList.contains(Bc.GLUE_IS_SHOWING_DRAWER);
                        if (this.drawerButtons)
                            for (const n of this.drawerButtons)
                                (k = n.firstElementChild) && (m ? k.removeAttribute(u.TABINDEX) : k.setAttribute(u.TABINDEX, "-1"))
                    }
                }
                )
            }
            );
            Oa.displayContactButtons()
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get lockupText() {
            return this.getAttribute(Ac.LOCKUP_TEXT) || this.lockup_text
        }
        get contentJumpText() {
            return this.getAttribute(Ac.CONTENT_JUMP) || this.content_jump_text
        }
        get rolloverText() {
            return this.getAttribute(Ac.ROLLOVER_TEXT) || this.rollover_text
        }
        get officeHours() {
            const a = this.getAttribute(u.OFFICE_HOURS) || this.office_hours;
            return a && 0 !== Object.keys(a).length ? "string" === typeof a ? a : JSON.stringify(a) : null
        }
        get openAriaLabel() {
            const a = this.getAttribute(u.NAVIGATION_ARIA_LABELS) || this.navigation_aria_labels;
            return a && 0 !== Object.keys(a).length ? ("string" === typeof a ? JSON.parse(a) : a).aria_open_nav_drawer : null
        }
        get singleSignOn() {
            const a = this.getAttribute(Ac.SINGLE_SIGN_ON) || this.single_sign_on;
            return a && 0 !== Object.keys(a).length ? "string" === typeof a ? JSON.parse(a) : a : null
        }
        get ssoCardCta() {
            var a;
            return JSON.stringify(null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.cta) || null
        }
        get ssoMockApi() {
            var a;
            return null !== (a = this.singleSignOn) && void 0 !== a && a.mock_api_data ? JSON.stringify(this.singleSignOn.mock_api_data) : null
        }
        get ssoProfileAltText() {
            var a;
            return (null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.profile_alt_text) || null
        }
        get ssoProfileCtaName() {
            var a;
            return (null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.profile_cta_name) || null
        }
        get ssoImageBuildPlaceholder() {
            var a, b;
            return (null === (b = null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.profile_image_placeholder) || void 0 === b ? void 0 : b.url) || null
        }
        get ssoLoggedInUrl() {
            var a;
            return (null === (a = this.singleSignOn) || void 0 === a ? void 0 : a.logged_in_url) || null
        }
        get hideOnScroll() {
            const a = this.getAttribute(Ac.HIDE_ON_SCROLL) || this.hide_on_scroll;
            return "boolean" === typeof a ? a : "true" === a
        }
        renderGoogleLogo() {
            return h`
      <div class="glue-header__logo">
        <a class="glue-header__logo-link" href="#" title="Google">
          <div class="glue-header__logo-container">
            <gads-icon icon-id="GOOGLE_COLOR_LOGO" class-names="glue-header__logo-svg"></gads-icon>
          </div>
          ${this.lockupText ? h`
            <span class="glue-header__logo--product">${this.lockupText}</span>
          ` : null}
        </a>
      </div>
    `
        }
        renderSSO(a) {
            if (!this.singleSignOn)
                return null;
            const b = this.getCtaByGtmName(A.STARTNOW) || this.getCtaByGtmName(A.CREATEANDMANAGEADS);
            return "is_v2"in this.singleSignOn ? h`
        <gads-single-sign-on-v2
            ads-account-status='${JSON.stringify(this.singleSignOn.ads_account_status)}'
            cta='${this.ssoCardCta}'
            cta-sign-in='${this.getCtaByGtmName(A.SIGNIN).replace(/\s{2,}/g, " ").trim()}'
            cta-start-now='${b.replace(/\s{2,}/g, " ").trim()}'
            logged-in-url='${this.ssoLoggedInUrl}'
            mock-api-data='${this.ssoMockApi}'
            modal='${JSON.stringify(this.singleSignOn.modal)}'
            module-name='${this.gtmModuleName}'
            profile-cta-name='${this.ssoProfileCtaName}'
            profile-alt-text='${this.ssoProfileAltText}'
            profile-image-placeholder='${this.ssoImageBuildPlaceholder}'
            type='${a}'>
        </gads-single-sign-on>
      ` : h`
        <gads-single-sign-on
            cta='${this.ssoCardCta}'
            cta-sign-in='${this.getCtaByGtmName(A.SIGNIN).replace(/\s{2,}/g, " ").trim()}'
            cta-start-now='${b.replace(/\s{2,}/g, " ").trim()}'
            mock-api-data='${this.ssoMockApi}'
            profile-alt-text='${this.ssoProfileAltText}'
            profile-cta-name='${this.ssoProfileCtaName}'
            profile-image-placeholder='${this.ssoImageBuildPlaceholder}'
            logged-in-url='${this.ssoLoggedInUrl}'
            type='${a}'>
        </gads-single-sign-on>
      `
        }
        renderStickyCTA() {
            var a = this.getAttribute(Ac.CTA_STICKY) || this.cta_sticky;
            if (!a || 0 === Object.keys(a).length)
                return null;
            a = "string" === typeof a ? JSON.parse(a) : a;
            return h`
      <gads-sticky-cta
          cta='${JSON.stringify(a.cta)}'
          is-sticky="${a.is_sticky}">
      </gads-sticky-cta>
    `
        }
        render() {
            return g`
      <header class="glue-header glue-header--single" ${this.officeHours ? `office-hours='${this.officeHours}'` : null} ${this.hideOnScroll ? "hide-on-scroll" : null}>
        ${this.contentJumpText ? h`
          <a href="#main-page-content" class="glue-header__link glue-header__skip-content">${this.contentJumpText}</a>
        ` : null}
        <div class="glue-header__bar glue-header__bar--mobile">
          <div class="glue-header__tier">
            <div class="glue-header__container">
              <div class="glue-header__lock-up">
                <div class="glue-header__hamburger">
                  <button class="glue-header__drawer-toggle-btn" ${this.openAriaLabel ? `aria-label="${this.openAriaLabel}"` : null}>
                    <gads-icon icon-id="MENU" class-names="glue-icon--24px"></gads-icon>
                  </button>
                </div>
                ${this.renderGoogleLogo()}
                ${this.renderSSO("mobile")}
              </div>
            </div>
          </div>
        </div>
        <div class="glue-header__bar glue-header__bar--desktop glue-header__drawer">
          <div class="glue-header__tier">
            <div class="glue-header__container">
              <div class="glue-header__lock-up">
                ${this.renderGoogleLogo()}
              </div>
            </div>
            <div class="glue-header__container glue-header__container--linkbar">
              <nav class="glue-header__link-bar"></nav>
            </div>
            ${this.ctaBlock ? h`
              <div class="glue-header__container glue-header__container--cta">
                <div class="glue-header__cta header-phone-number">
                  <div class="gads-mega-nav-cta-container glue-header__container">
                    <div class="glue-header__cta">
                      ${this.ctaBlock}
                      ${this.rolloverText ? h`
                        <div class="header-phone-number__rollover">
                          <span class="glue-font-weight-medium">${this.rolloverText}</span>
                        </div>
                      ` : null}
                      ${this.renderSSO("desktop")}
                    </div>
                  </div>
                </div>
              </div>
            ` : null}
          </div>
        </div>
        <div class="glue-header__drawer-backdrop"></div>
        ${this.renderStickyCTA()}
      </header>
    `
        }
    }
    ;
    customElements.define("gads-simple-nav", Dc);
    var Ec = class {
        constructor() {
            this.result = new Map
        }
        init(a) {
            const b = [...a.querySelectorAll(".mdc-text-field:not(.leadgenautocomplete)")]
              , c = [...a.querySelectorAll(".mdc-select")];
            a = [...a.querySelectorAll(".mdc-form-field")];
            b.forEach(d=>{
                const e = new mdc.textField.MDCTextField(d)
                  , f = d.querySelector("input");
                e.listen(x.CHANGE, ()=>{
                    const m = new CustomEvent(x.FORM_UPDATE,{
                        bubbles: !0,
                        detail: {
                            id: null === f || void 0 === f ? void 0 : f.name,
                            valid: e.valid && "" !== (null === f || void 0 === f ? void 0 : f.value),
                            value: null === f || void 0 === f ? void 0 : f.value
                        }
                    });
                    d.dispatchEvent(m)
                }
                );
                const k = d.getAttribute("key");
                k && this.result.set(k, e)
            }
            );
            c.forEach(d=>{
                const e = new mdc.select.MDCSelect(d);
                e.listen(x.MDC_SELECT_CHANGE, ()=>{
                    const k = new CustomEvent(x.FORM_UPDATE,{
                        bubbles: !0,
                        detail: {
                            id: e.selectedText.id,
                            valid: e.valid && "" !== e.value,
                            value: e.value,
                            selectedText: e.selectedText.textContent
                        }
                    });
                    d.dispatchEvent(k)
                }
                );
                const f = d.getAttribute("key");
                f && this.result.set(f, e)
            }
            );
            a.forEach(d=>{
                const e = new mdc.formField.MDCFormField(d)
                  , f = d.querySelector(".mdc-checkbox")
                  , k = d.querySelector("input");
                if (f) {
                    const m = new mdc.checkbox.MDCCheckbox(d);
                    e.input = m;
                    m.listen(x.CLICK, ()=>{
                        const n = new CustomEvent(x.FORM_UPDATE,{
                            bubbles: !0,
                            detail: {
                                id: null === k || void 0 === k ? void 0 : k.name,
                                value: m.checked,
                                valid: m.checked
                            }
                        });
                        d.dispatchEvent(n)
                    }
                    )
                }
            }
            );
            return this.result
        }
    }
    ;
    var Fc = class extends L {
        constructor() {
            super(...arguments);
            this.leadgen_data = this.form_name = this.agree_terms = this.agree_contact = this.fields_required_industry = this.field_industry = this.field_budget_option_4 = this.field_budget_option_3 = this.field_budget_option_2 = this.field_budget_option_1 = this.field_budget = this.field_marketing_objective_brand_awareness = this.field_marketing_objective_leads = this.field_marketing_objective_offline_sales = this.field_marketing_objective_online_sales = this.field_marketing_objective = this.field_business_email = this.field_business_website = this.field_business_name = this.field_first_name = this.fields_required_message = this.disclaimer = this.fail_message = this.fail_headline = this.thankyou_message = this.thankyou_headline = this.recaptcha_site_key = this.leadgen_industries_url = this.cta_label = this.copy_required_fields = this.copy = this.headline = null;
            this.modalTriggerCtas = document.querySelectorAll('[href="#smart-calc-form"]');
            this.modalEl = this.querySelector(".smart-calc-modal");
            this.modalCloseBtn = this.querySelector(".smart-calc-modal .glue-modal__close-btn");
            this.formEl = this.querySelector(".smart-calc-form-el");
            this.formInputEls = this.querySelectorAll("input");
            this.mdcInputs = (new Ec).init(this);
            this.formInputSubid = this.querySelector('input[name="subid"]');
            this.formRequiredCheckboxes = this.querySelectorAll(".smart-calc-form-required-checkbox");
            this.formRecaptchaContainer = this.querySelector(".recaptcha-container");
            this.submitBtn = this.querySelector(".submit-btn");
            this.data = {
                budget: "",
                "collects-pii-spii-checkbox": "",
                company: "",
                email: "",
                firstName: "",
                "g-recaptcha-response": "",
                industry: "",
                Legaldisclaimer: "",
                marketingobjective: "",
                website: ""
            };
            this.recaptchaSuccess = !0;
            this.leadgenJsonLoaded = this.leadgenInit = !1;
            this.urlSubidParam = (new URLSearchParams(window.location.search)).get("subid") || "";
            this.formbox_url = ""
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get copyText() {
            return this.getAttribute(u.COPY) || this.copy
        }
        get copyRequiredFieldsText() {
            return this.getAttribute("copy_required_fields") || this.copy_required_fields
        }
        get ctaLabelText() {
            return this.getAttribute("cta_label") || this.cta_label
        }
        get leadgenIndustriesUrl() {
            return this.getAttribute("leadgen_industries_url") || this.leadgen_industries_url
        }
        get recaptchaSiteKey() {
            return this.getAttribute("recaptcha_site_key") || this.recaptcha_site_key
        }
        get thankyouHeadlineText() {
            return this.getAttribute("thankyou_headline") || this.thankyou_headline
        }
        get thankyouMessageText() {
            return this.getAttribute("thankyou_message") || this.thankyou_message
        }
        get failHeadlineText() {
            return this.getAttribute("fail_headline") || this.fail_headline
        }
        get failMessageText() {
            return this.getAttribute("fail_message") || this.fail_message
        }
        get agreeContactText() {
            return this.getAttribute("agree_contact") || this.agree_contact
        }
        get agreeTermsText() {
            return this.getAttribute("agree_terms") || this.agree_terms
        }
        get requiredIndustryText() {
            return this.getAttribute("fields_required_industry") || this.fields_required_industry
        }
        get formBoxContent() {
            return {
                disclaimer: this.disclaimer || "",
                generic_validation_text: this.getAttribute("fields_required_message") || this.fields_required_message,
                formbox_elements: [{
                    id: "firstName",
                    field_name: "firstName",
                    label: this.getAttribute("field_first_name") || this.field_first_name,
                    required: !0,
                    type: "text"
                }, {
                    id: "company",
                    field_name: "company",
                    label: this.getAttribute("field_business_name") || this.field_business_name,
                    required: !0,
                    type: "text"
                }, {
                    id: "website",
                    field_name: "website",
                    label: this.getAttribute("field_business_website") || this.field_business_website,
                    pattern: "^(http:\\/\\/www\\.|https:\\/\\/www\\.|Http:\\/\\/|http:\\/\\/|Https:\\/\\/|https:\\/\\/)?[A-Za-z0-9]+([\\-\\.]{1}[A-Za-z0-9]+)*\\.[A-Za-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",
                    required: !0,
                    type: "text"
                }, {
                    id: "email",
                    field_name: "email",
                    label: this.getAttribute("field_business_email") || this.field_business_email,
                    pattern: "[a-zA-Z0-9\\._%+\\-]+@[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,}$",
                    required: !0,
                    type: "email"
                }, {
                    id: "marketingobjective",
                    field_name: "marketingobjective",
                    label: this.getAttribute("field_marketing_objective") || this.field_marketing_objective,
                    options: [{
                        label: this.getAttribute("field_marketing_objective_online_sales") || this.field_marketing_objective_online_sales,
                        value: "online-sales"
                    }, {
                        label: this.getAttribute("field_marketing_objective_offline_sales") || this.field_marketing_objective_offline_sales,
                        value: "offline-sales"
                    }, {
                        label: this.getAttribute("field_marketing_objective_leads") || this.field_marketing_objective_leads,
                        value: "leads"
                    }, {
                        label: this.getAttribute("field_marketing_objective_brand_awareness") || this.field_marketing_objective_brand_awareness,
                        value: "brand-awareness"
                    }],
                    required: !0,
                    type: "select"
                }, {
                    id: "budget",
                    field_name: "budget",
                    label: this.getAttribute("field_budget") || this.field_budget,
                    options: [{
                        label: this.getAttribute("field_budget_option_1") || this.field_budget_option_1,
                        value: "budget-option-1"
                    }, {
                        label: this.getAttribute("field_budget_option_2") || this.field_budget_option_2,
                        value: "budget-option-2"
                    }, {
                        label: this.getAttribute("field_budget_option_3") || this.field_budget_option_3,
                        value: "budget-option-3"
                    }, {
                        label: this.getAttribute("field_budget_option_4") || this.field_budget_option_4,
                        value: "budget-option-4"
                    }],
                    required: !0,
                    type: "select"
                }, {
                    id: "industry",
                    field_name: "industry",
                    label: this.getAttribute("field_industry") || this.field_industry,
                    required: !0,
                    type: "leadgenautocomplete"
                }, {
                    id: "Form_name__c",
                    field_name: "Form_name__c",
                    initial_value: this.getAttribute("form_name") || this.form_name,
                    label: "Form_name__c",
                    type: "hidden"
                }, {
                    id: "subid",
                    field_name: "subid",
                    initial_value: "",
                    label: "Subid",
                    type: "hidden"
                }]
            }
        }
        connectedCallback() {
            var a, b, c = document.createElement("link");
            c.rel = "stylesheet";
            c.href = "https://www.gstatic.com/glue/v26_0/glue-material.min.css";
            document.head.appendChild(c);
            c = document.createElement("script");
            c.src = "https://google.com/recaptcha/api.js";
            document.body.appendChild(c);
            c = document.createElement("script");
            c.src = "https://www.gstatic.com/glue/v26_0/material-components-web.min.js";
            document.body.appendChild(c);
            this.firstElementChild || this.replaceChildren(this.render());
            this.modalTriggerCtas = document.querySelectorAll('[href="#smart-calc-form"]');
            this.modalEl = this.querySelector(".smart-calc-modal");
            this.modalCloseBtn = this.querySelector(".smart-calc-modal .glue-modal__close-btn");
            this.formEl = this.querySelector(".smart-calc-form-el");
            this.formInputEls = this.querySelectorAll("input");
            this.formRecaptchaContainer = this.querySelector(".recaptcha-container");
            this.formRequiredCheckboxes = this.querySelectorAll(".smart-calc-form-required-checkbox");
            this.submitBtn = this.querySelector(".submit-btn");
            this.formboxUrl = (null === (a = this.formEl) || void 0 === a ? void 0 : a.dataset.fbxUrl) || "";
            const d = this.data;
            [...this.formInputEls].forEach(m=>{
                m = m.name;
                const n = this.mdcInputs.get(m)
                  , t = (null === n || void 0 === n ? void 0 : n.value) || "";
                n && (d[m] = t)
            }
            );
            l.GLUE in window && this.modalEl && this.modalTriggerCtas && [...this.modalTriggerCtas].forEach(m=>{
                const n = new glue.Modal(this.modalEl,m,this.modalCloseBtn);
                m.addEventListener(x.CLICK, ()=>{
                    this.leadgenInit || this.initLeadgen();
                    n.open()
                }
                )
            }
            );
            const e = m=>{
                this.data["g-recaptcha-response"] = m;
                this.checkValid(this.recaptchaSuccess = !0)
            }
              , f = ()=>this.checkValid(this.recaptchaSuccess = !1)
              , k = (null === (b = this.modalEl) || void 0 === b ? void 0 : b.getAttribute("data-recaptcha")) || "";
            this.isJsAgent() || window.addEventListener(x.LOAD, ()=>{
                grecaptcha.ready(()=>{
                    l.G_RECAPTCHA in window && this.formRecaptchaContainer && grecaptcha.render(this.formRecaptchaContainer, {
                        sitekey: k,
                        callback: e,
                        "expired-callback": f
                    })
                }
                )
            }
            );
            this.formInputSubid && (this.formInputSubid.value = this.urlSubidParam);
            a = this.querySelector('input[name="Form_name__c"]');
            this.formNameCValue = null === a || void 0 === a ? void 0 : a.value;
            this.checkValid();
            this.addEventListener(x.FORM_UPDATE, m=>{
                ({detail: m} = m);
                if (m) {
                    const n = m.value;
                    d[m.id] = m.valid ? n : ""
                }
                this.checkValid()
            }
            );
            this.submitBtn && this.submitBtn.addEventListener(x.CLICK, m=>{
                m.preventDefault();
                this.submitHandler()
            }
            );
            window.addEventListener(x.PAGESHOW, ()=>{
                this.checkValid(this.recaptchaSuccess = !1);
                grecaptcha.ready(()=>grecaptcha.reset())
            }
            )
        }
        checkValid(a=this.recaptchaSuccess) {
            var b;
            const c = Object.values(this.data).every(Boolean);
            a = a && [...this.formRequiredCheckboxes].every(d=>d.checked);
            null === (b = this.submitBtn) || void 0 === b ? void 0 : b.toggleAttribute(u.DISABLED, !c || !a)
        }
        async submitHandler() {
            var a, b;
            null === (a = this.submitBtn) || void 0 === a ? void 0 : a.setAttribute(u.DISABLED, "true");
            null === (b = this.submitBtn) || void 0 === b ? void 0 : b.blur();
            this.formboxUrl && (a = {
                formbox_url: this.formboxUrl
            },
            this.modalEl && (this.modalEl.setAttribute("view", "LOADING"),
            await this.saveFormbox(this.data, a).then(()=>{
                var c;
                return null === (c = this.modalEl) || void 0 === c ? void 0 : c.setAttribute("view", "THANKS")
            }
            ).catch(c=>{
                if (this.modalEl)
                    throw this.modalEl.setAttribute("view", "FAIL"),
                    Error("Could not save lead data: " + c);
            }
            )))
        }
        async initLeadgen() {
            var a;
            const b = this.querySelector("#leadgen-dropdown")
              , c = this.querySelector("leadgen-autocomplete");
            await this.handleLeadgenJSON(b, c);
            this.setupIndustryGroups(c);
            this.setupLeadgenInput(c);
            null === (a = this.modalEl) || void 0 === a ? void 0 : a.setAttribute("view", "FORM");
            this.leadgenInit = !0
        }
        isJsAgent() {
            return window.navigator.userAgent.includes(l.JSDOM)
        }
        async handleLeadgenJSON(a, b) {
            var c;
            const d = (null === (c = this.modalEl) || void 0 === c ? void 0 : c.getAttribute("data-source")) || "";
            (c = await this.getIndustriesJSON(d)) ? (c = await this.renderLeadgen(c),
            a && b && (a.innerHTML = c,
            b.appendChild(a.content.cloneNode(!0)))) : this.leadgenJsonLoaded = !1
        }
        setupIndustryGroups(a) {
            const b = null === a || void 0 === a ? void 0 : a.querySelector(".mdc-select__menu");
            a = [...((null === a || void 0 === a ? void 0 : a.querySelectorAll('[is="industry-group-title"]')) || [])];
            b && this.leadgenJsonLoaded && a.forEach(c=>{
                this.setupIndustryObserver(c);
                this.setupIndustryGroupObserver(c, b)
            }
            )
        }
        setupIndustryObserver(a) {
            [...a.querySelectorAll("li")].forEach(b=>{
                var c, d;
                const e = null === (d = null === (c = b.querySelector(".mdc-list-item__text")) || void 0 === c ? void 0 : c.textContent) || void 0 === d ? void 0 : d.toLowerCase();
                (new MutationObserver(f=>{
                    f.forEach(k=>{
                        "attributes" === k.type && k.target instanceof HTMLElement && (k = (k = k.target.getAttribute(k.attributeName || "")) && (null === e || void 0 === e ? void 0 : e.includes(k.toLowerCase())),
                        b.classList.toggle(w.HIDDEN, !k))
                    }
                    )
                }
                )).observe(b, {
                    attributes: !0,
                    attributeFilter: ["query"]
                })
            }
            )
        }
        setupIndustryGroupObserver(a, b) {
            (new MutationObserver(()=>{
                const c = ![...a.querySelectorAll("li")].some(d=>!d.classList.contains(w.HIDDEN));
                a.classList.toggle(w.HIDDEN, c)
            }
            )).observe(b, {
                attributes: !0,
                attributeFilter: ["class"],
                subtree: !0
            })
        }
        setupLeadgenInput(a) {
            var b = document.querySelector(".mdc-text-field.leadgenautocomplete");
            l.MDC in window && b && (b = new mdc.textField.MDCTextField(b),
            this.leadgenJsonLoaded ? (this.setupLeadgenKeyUpEvent(b, a),
            this.setupLeadgenFocusOutEvent(b, a),
            this.setupLeadgenClickEvent(b, a)) : this.setupDefaultLeadgenValidation(b))
        }
        setupLeadgenKeyUpEvent(a, b) {
            const c = null === b || void 0 === b ? void 0 : b.querySelector(".mdc-select__menu")
              , d = [...((null === b || void 0 === b ? void 0 : b.querySelectorAll('[is="industry-group-title"]')) || [])]
              , e = null === b || void 0 === b ? void 0 : b.querySelectorAll('[is="industry-title"]');
            a.listen(x.INPUT, f=>{
                const k = "" === a.value;
                k ? (null === c || void 0 === c ? void 0 : c.classList.remove("mdc-menu-surface--open"),
                a.valid = !1) : (new Promise(m=>{
                    null === e || void 0 === e ? void 0 : e.forEach(n=>{
                        n.setAttribute("query", a.value)
                    }
                    );
                    m(!0)
                }
                )).then(()=>{
                    setTimeout(()=>{
                        var m = !k && d.some(n=>!n.classList.contains(w.HIDDEN));
                        null === c || void 0 === c ? void 0 : c.classList.toggle("mdc-menu-surface--open", m);
                        a.valid = m;
                        m = f.target;
                        if (m instanceof HTMLElement) {
                            const n = new CustomEvent(x.FORM_UPDATE,{
                                bubbles: !0,
                                detail: {
                                    id: "industry",
                                    valid: !1,
                                    value: ""
                                }
                            });
                            m.dispatchEvent(n)
                        }
                    }
                    , 100)
                }
                )
            }
            )
        }
        setupLeadgenFocusOutEvent(a, b) {
            const c = null === b || void 0 === b ? void 0 : b.querySelector(".mdc-select__menu");
            a.listen(x.FOCUSOUT, ()=>{
                "" === a.value && (null === c || void 0 === c ? void 0 : c.classList.remove("mdc-menu-surface--open"),
                a.valid = !1)
            }
            )
        }
        setupLeadgenClickEvent(a, b) {
            const c = null === b || void 0 === b ? void 0 : b.querySelector(".mdc-select__menu");
            null === b || void 0 === b ? void 0 : b.addEventListener(x.CLICK, d=>{
                var e;
                d = d.target;
                if (d instanceof HTMLElement && d.classList.contains("clickable")) {
                    const f = d.getAttribute("group-title") || ""
                      , k = (null === (e = d.textContent) || void 0 === e ? void 0 : e.trim()) || a.value;
                    e = `${f} - ${k}`;
                    a.value = e;
                    e = new CustomEvent(x.FORM_UPDATE,{
                        bubbles: !0,
                        detail: {
                            id: "industry",
                            valid: a.valid && "" !== a.value,
                            value: e
                        }
                    });
                    d.dispatchEvent(e);
                    null === c || void 0 === c ? void 0 : c.classList.remove("mdc-menu-surface--open")
                }
            }
            )
        }
        setupDefaultLeadgenValidation(a) {
            const b = document.querySelector("#industry-helper-text")
              , c = document.querySelectorAll(".mdc-text-field-helper-text").item(0);
            b && c && (b.innerHTML = c.innerHTML);
            a.useNativeValidation = !0
        }
        getLeadgeData() {
            return JSON.parse(this.getAttribute("leadgen_data") || "{}")
        }
        async getIndustriesJSON(a) {
            if ("" === a && this.hasAttribute("leadgen_data"))
                return this.leadgenJsonLoaded = !0,
                this.getLeadgeData();
            a = await fetch(a);
            if (a.ok)
                return this.leadgenJsonLoaded = !0,
                a.json();
            404 === a.status ? console.warn("JSON file not found at the specified URL.") : console.warn("An error occurred while fetching the JSON.")
        }
        async renderLeadgen(a) {
            const b = [];
            try {
                for (const c in a)
                    if (c) {
                        let d = `<li><ul is="industry-group-title"><span class="group-title">${c}</span>`;
                        const e = a[c];
                        for (const f of e)
                            f && (d += `<li is="industry-title" class="mdc-list-item clickable" group-title="${c}">`,
                            d += '<span class="mdc-list-item__ripple"></span>',
                            d += `<span class="mdc-list-item__text clickable" group-title="${c}">${f}`,
                            d += "</span></li>");
                        d += "</ul></li>";
                        b.push(d)
                    }
            } catch (c) {
                console.warn("Could not render Industries field: " + c)
            }
            return `
    <div class="mdc-select__menu mdc-menu mdc-menu-surface">
      <ul role="listbox" class="mdc-list">${b.join("")}</ul>
    </div>
  `
        }
        saveFormbox(a, b) {
            const c = new FormData;
            c.append("budget", `${a.budget}`);
            c.append("collects-pii-spii-checkbox", `${a["collects-pii-spii-checkbox"]}`);
            c.append("company", `${a.company}`);
            c.append("email", `${a.email}`);
            c.append("firstName", `${a.firstName}`);
            c.append("Form_name__c", `${this.formNameCValue}`);
            c.append("g-recaptcha-response", `${a["g-recaptcha-response"]}`);
            c.append("industry", `${a.industry}`);
            c.append("Legaldisclaimer", `${a.Legaldisclaimer}`);
            c.append("marketingobjective", `${a.marketingobjective}`);
            c.append("subid", `${this.urlSubidParam}`);
            c.append("website", `${a.website}`);
            return this.postFetchHandler(b.formbox_url, c)
        }
        async postFetchHandler(a, b, c) {
            return fetch(a, {
                method: "POST",
                body: b,
                headers: c
            }).then(d=>{
                if (!d.ok)
                    throw Error("Response error: " + d);
                return d.json()
            }
            ).then(d=>d).catch(d=>{
                throw Error("Save post error: " + d);
            }
            )
        }
        get formboxUrl() {
            return this.getAttribute("formbox-url") || this.formbox_url
        }
        set formboxUrl(a) {
            this.formbox_url = a
        }
        renderModalHeader() {
            return h`
      <div class="smart-calc-form-headline glue-grid__col glue-grid__col--span-0 glue-grid__col--span-2-md glue-grid__col--span-1-xl"></div>
      <div class="smart-calc-form-headline glue-text-center glue-grid__col
          glue-grid__col--span-8 glue-spacer-5-bottom">
        <h2 id="modal-label" class="glue-headline glue-headline--headline-2 glue-spacer-2-bottom">
          <span class="glue-font-weight-medium">${this.headlineText}</span>
        </h2>
        <p id="modal-content">
          ${this.copyText}
        </p>
      </div>
    `
        }
        renderLoading() {
            return h`
      <div class="smart-calc-form-loading">
        <svg class="spinner" role="presentation" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    `
        }
        renderForm() {
            var a, b;
            const c = (null === (a = this.formBoxContent) || void 0 === a ? 0 : a.disclaimer) ? `
      <p class="glue-small-text glue-spacer-3-bottom">${this.formBoxContent.disclaimer}</p>
    ` : "";
            a = `
      <div class="smart-calc-form-disclaimer glue-grid__col glue-grid__col--span-3-md glue-grid__col--span-2-xl"></div>
      <div class="smart-calc-form-disclaimer glue-grid__col glue-grid__col--span-1-md"></div>
      <div class="smart-calc-form-disclaimer glue-grid__col glue-grid__col--span-10 glue-grid__col--span-8-xl glue-spacer-3-top">
        <span class="glue-small-text">${this.copyRequiredFieldsText}</span>
      </div>
    `;
            return h`
      <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-3-md glue-grid__col--span-2-xl"></div>
      <section id="smart-calc-form-section" aria-live="polite"
          class="smart-calc-form-section glue-grid__col glue-grid__col--span-6">
        <form class="glue-form smart-calc-form-el" is="smart-calc-form-section"
            data-fbx-url="${this.formboxUrl}"
            autocomplete="off">
          <ul class="glue-form__group">
            ${null === (b = this.formBoxContent) || void 0 === b ? void 0 : b.formbox_elements.map(d=>{
                if ("hidden" === d.type)
                    return `
                  <input class="smart-calc-form-hidden-input" type="hidden"
                      name="${d.field_name}" value="${d.initial_value}" required />
                `;
                let e;
                "text" === d.type || "email" === d.type || "tel" === d.type ? e = this.renderInput(d.field_name, d.label, !0, d.type, this.formBoxContent.generic_validation_text, d.pattern) : "select" === d.type && d.options ? e = this.renderSelect(d.field_name, d.label, d.options, !0, this.formBoxContent.generic_validation_text) : "leadgenautocomplete" === d.type && (e = this.renderInput(d.field_name, d.label, !0, d.type, this.requiredIndustryText) + '\n      <leadgen-autocomplete>\n        <template id="leadgen-dropdown">\n        </template>\n      </leadgen-autocomplete>\n    ');
                return `
                  <li class="glue-form__element">${e}</li>
                `
            }
            )}
            <li class="glue-form__element glue-spacer-4-top glue-spacer-5-bottom">
              ${this.renderCheckboxes()}
            </li>
          </ul>
          <div class="glue-text-center">
            ${c}
            ${'\n      <div class="recaptcha-container glue-spacer-5-bottom"></div>\n    '}
            <button disabled
                class="disabled glue-button glue-button--high-emphasis submit-btn" data-g-cta-name="get-your-media-plan">
              ${this.ctaLabelText}
            </button>
          </div>
        </form>
      </section>
      ${a}
    `
        }
        renderInput(a, b, c, d, e, f="") {
            return h`
      <label key="${a}" class="form-element mdc-text-field mdc-text-field--outlined
          mdc-text-field--with-trailing-icon glue-text-field ${c ? "glue-text-field--required" : ""} ${d}">
        <input class="mdc-text-field__input"
            name="${a}"
            type="${d || "text"}"
            aria-labelledby="${a}-label"
            ${e ? `aria-controls="${a}-helper-text"` : ""}
            ${c ? "required" : ""}
            ${f ? `pattern="${f}"` : ""}>
        <svg class="mdc-text-field__icon mdc-text-field__icon--trailing glue-icon" role="presentation" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        <span class="mdc-notched-outline">
          <span class="mdc-notched-outline__leading"></span>
          <span class="mdc-notched-outline__notch">
            <span class="mdc-floating-label" id="${a}-label">${b}</span>
          </span>
          <span class="mdc-notched-outline__trailing"></span>
        </span>
      </label>
      ${e ? `
        <div class="mdc-text-field-helper-line">
          <div id="${a}-helper-text" aria-hidden="true"
              class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg">
            ${e}
          </div>
        </div>
      ` : ""}
    `
        }
        renderSelect(a, b, c, d, e) {
            return h`
      <div key="${a}" class="mdc-select mdc-select--outlined
          glue-select form-element ${d ? "mdc-select--required" : ""}">
        <input type="hidden" name="${a}">
        <div class="mdc-select__anchor" role="button" aria-haspopup="listbox"
            aria-labelledby="label-${a} ${a}" aria-controls="${a}-helper-text"
            aria-describedby="${a}-helper-text">
          <span id="${a}" class="mdc-select__selected-text"></span>
          <span class="mdc-select__dropdown-icon">
            <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
              <polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
              <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
            </svg>
          </span>
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__notch">
              <span id="label-${a}" class="mdc-floating-label">${b}</span>
            </span>
            <span class="mdc-notched-outline__trailing"></span>
          </span>
        </div>
        <div class="mdc-select__menu mdc-menu mdc-menu-surface">
          <ul class="mdc-list" role="listbox">
            <li class="mdc-list-item mdc-list-item--selected" data-value=""
                role="option" aria-selected="true"
                aria-setsize="${c.length}" aria-posinset="1">
              <span class="mdc-list-item__ripple"></span>
            </li>
            ${c.map((f,k)=>h`
                <li class="mdc-list-item" data-value="${f.value || `${a}'-'${k + 1}`}" role="option"
                    aria-setsize="${c.length}" aria-posinset="${k + 2}">
                  <span class="mdc-list-item__ripple"></span>
                  <span class="mdc-list-item__text">${f.label || f}</span>
                </li>
              `)}
          </ul>
        </div>
      </div>
      <p id="${a}-helper-text"class="mdc-select-helper-text
          mdc-select-helper-text--validation-msg glue-select-helper-text">
        ${e}
      </p>
    `
        }
        renderCheckboxes() {
            return h`
      <div class="mdc-touch-target-wrapper glue-spacer-3-bottom">
        ${this.agreeContactText ? `
          <div class="mdc-form-field">
            <div class="mdc-checkbox mdc-checkbox--touch glue-checkbox">
              <input type="checkbox" class="smart-calc-form-required-checkbox mdc-checkbox__native-control"
                  id="Legaldisclaimer" name="Legaldisclaimer">
              <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                  <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
                <div class="mdc-checkbox__mixedmark"></div>
              </div>
              <div class="mdc-checkbox__ripple"></div>
            </div>
            <label for="Legaldisclaimer">
              ${this.agreeContactText}
            </label>
          </div>
        ` : ""}
      </div>
      <div class="mdc-touch-target-wrapper">
        ${this.agreeTermsText ? `
          <div class="mdc-form-field">
            <div class="mdc-checkbox mdc-checkbox--touch glue-checkbox">
              <input type="checkbox" class="smart-calc-form-required-checkbox mdc-checkbox__native-control"
                  id="collects-pii-spii-checkbox" name="collects-pii-spii-checkbox">
              <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                  <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
                <div class="mdc-checkbox__mixedmark"></div>
              </div>
              <div class="mdc-checkbox__ripple"></div>
            </div>
            <label for="collects-pii-spii-checkbox">
              ${this.agreeTermsText}
            </label>
          </div>
        ` : ""}
      </div>
    `
        }
        renderThankYou() {
            return h`
      <div class="smart-calc-thank-you glue-text-center
          glue-grid__col glue-grid__col--span-12 glue-grid__col--span-10-xl">
        <p class="glue-headline glue-headline--headline-4">${this.thankyouHeadlineText}</p>
        <p>${this.thankyouMessageText}<p>
      </div>
    `
        }
        renderFailMsg() {
            return h`
      <div class="smart-calc-fail-msg glue-text-center
          glue-grid__col glue-grid__col--span-12 glue-grid__col--span-10-xl">
        <p class="glue-headline glue-headline--headline-4">${this.failHeadlineText}</p>
        <p>${this.failMessageText}<p>
      </div>
    `
        }
        render() {
            return g`
      <div class="smart-calc-modal glue-modal glue-modal--dark" role="dialog" aria-modal="true"
          aria-labelledby="modal-label" aria-describedby="modal-content" view="INIT"
          data-source="${this.leadgenIndustriesUrl}" data-recaptcha="${this.recaptchaSiteKey}">
        <div class="glue-page">
          <div class="glue-grid modal-wrapper">
            <div class="glue-grid__col glue-grid__col--span-1-xl"></div>
            <div class="smart-calc-modal-container glue-grid__col
                glue-grid__col--span-12 glue-grid__col--span-10-xl">
              <div class="glue-grid glue-spacer-6-top glue-spacer-5-bottom">
                ${this.renderModalHeader()}
                ${this.renderLoading()}
                ${this.renderForm()}
                ${this.renderThankYou()}
                ${this.renderFailMsg()}
              </div>
              <button class="glue-modal__close-btn" aria-label="Close the modal"></button>
            </div>
          </div>
        </div>
      </div>
    `
        }
    }
    ;
    customElements.define("gads-smart-calc-form", Fc);
    var Gc = class extends L {
        constructor() {
            super(...arguments);
            this.main_headline = this.tabbar_id = "";
            this.tabs = null;
            this.visually_hidden_headline = "";
            this.tabPanels = this.querySelector(".glue-tabpanels")
        }
        connectedCallback() {
            var a;
            this.firstElementChild || (this.replaceChildren(this.render()),
            this.tabPanels = this.querySelector(".glue-tabpanels"));
            if (this.tabPanels && l.GLUE in window) {
                const b = {
                    panelsCount: (null === (a = this.tabs) || void 0 === a ? void 0 : a.length) || 2
                };
                new glue.TabPanels(this.tabPanels,b)
            }
        }
        get tabsList() {
            const a = this.getAttribute("tabs") || this.tabs;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get tabBarId() {
            return this.getAttribute("tabbar-id") || this.tabbar_id
        }
        get tabNames() {
            return this.tabsList.map(a=>h`<div data-g-module-name="gads-tab-bar" data-g-cta-name="${a.gtm_cta_name}">${a.tab_text}</div>`).join("")
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.main_headline
        }
        get visuallyHiddenHeadline() {
            return this.getAttribute("visually-hidden-headline") || this.visually_hidden_headline
        }
        tabPanelImageRender(a, b, c) {
            return h`
      <gads-image
          image="${a}"
          widths="xl:593,lg:511,md:369,sm:599"
          alt-text="${b}"
          round-corners
          lazy
          lazy-trigger=".gads-tab-bar__panel-image"
          ${c ? u.HAS_TRANSPARENCY : ""}
      ></gads-image>
    `
        }
        htmlImagestabPanelImageRender(a, b, c) {
            a = encodeURI(JSON.stringify([a]));
            return h`
      <gads-image
          alt-text="${b}"
          images="${a}"
          widths="xl:593,lg:511,md:369,sm:599"
          round-corners
          lazy
          lazy-trigger=".gads-tab-bar__panel-image"
          ${c ? u.HAS_TRANSPARENCY : ""}
      ></gads-image>
    `
        }
        buildHeadline() {
            return this.headlineText ? h`
        <div class="glue-grid">
          <div class="glue-grid__col glue-grid__col--span-0 glue-grid__col--span-1-md glue-grid__col--span-2-lg"></div>
          <div class="glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md glue-grid__col--span-8-lg">
            <h2 class="glue-headline glue-headline--headline-2 glue-text-center glue-spacer-3-bottom">
              <span class="glue-font-weight-medium">${this.headlineText}</span>
            </h2>
          </div>
        </div>
      ` : this.visuallyHiddenHeadline ? h`
        <h2 class="glue-visually-hidden">
          ${this.visuallyHiddenHeadline}
        </h2>
      ` : ""
        }
        tabPanelRender(a, b) {
            var c, d, e, f, k, m, n = a.image.aria_description;
            n = n ? this.encodeJson(n) : "";
            return h`
      <div id="${this.tabBarId}-tab-${b}">
        <h2 class="glue-tabpanels__panel-toggle">
          <div class="glue-tabpanels__panel-button" id="${this.tabBarId}-tab-${b}-toggle">
            <span class="glue-tabpanels__panel-title">${a.tab_text}</span>
            <svg role="presentation" aria-hidden="true" class="glue-icon glue-expansion-panel__header-arrow" viewBox="0 0 24 24">
              <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17" />
            </svg>
          </div>
        </h2>
        <div id="${this.tabBarId}-tab-${b}-content" class="glue-tabpanels__panel-content">
          <div class="glue-grid">
            <div class="gads-tab-bar__panel-image glue-grid__col glue-grid__col--span-5">
              ${(null === (d = null === (c = a.image.html_image) || void 0 === c ? void 0 : c.image) || void 0 === d ? 0 : d.url) && (null === (e = a.image.html_image) || void 0 === e ? 0 : e.content) && a.image.use_html_image ? this.htmlImagestabPanelImageRender(a.image, n, a.image.has_transparency) : this.tabPanelImageRender(a.image.image.url, n, a.image.has_transparency)}
            </div>
            <div class="gads-tab-bar__panel-copy glue-grid__col glue-grid__col--span-5">
              <h3 class="glue-headline glue-headline--headline-4 glue-spacer-2-bottom">
                <span class="glue-font-weight-medium">${a.content_heading}</span>
              </h3>
              <p>${a.content_body}</p>
            </div>
            <div class="gads-tab-bar__panel-image glue-grid__col glue-grid__col--span-5">
              ${(null === (k = null === (f = a.image.html_image) || void 0 === f ? void 0 : f.image) || void 0 === k ? 0 : k.url) && (null === (m = a.image.html_image) || void 0 === m ? 0 : m.content) && a.image.use_html_image ? this.htmlImagestabPanelImageRender(a.image, n, a.image.has_transparency) : this.tabPanelImageRender(a.image.image.url, n, a.image.has_transparency)}
            </div>
          </div>
        </div>
      </div>
    `
        }
        render() {
            return g`
      <section class="glue-page glue-spacer-6-top glue-spacer-6-bottom">
        ${this.buildHeadline()}
        <div class="glue-grid">
          <div class="glue-grid__col glue-grid__col--span-1"></div>
          <div class="glue-grid__col glue-grid__col--span-10">
            <div class="glue-tabpanels glue-tabpanels--centeredtabs">
              <div class="glue-tabpanels__page-list">
                ${this.tabNames}
              </div>
              <div class="glue-tabpanels__panel-list">
                ${this.tabsList.map((a,b)=>this.tabPanelRender(a, b))}
              </div>
            </div>
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-tab-bar", Gc);
    var Hc = class extends L {
        constructor() {
            super(...arguments);
            this._panelsEl = this.querySelector(".glue-expansion-panels");
            this.headline = this.copy = "";
            this.icon = [];
            this.layout_order = "";
            this.panels = [];
            this.show_expansion_panels = !1
        }
        connectedCallback() {
            this.firstElementChild || (this.replaceChildren(this.render()),
            this._panelsEl = this.querySelector(".glue-expansion-panels"));
            l.GLUE in window && this._panelsEl && new glue.ExpansionPanels(this._panelsEl)
        }
        get gtmModuleName() {
            return this.nodeName
        }
        get headlineText() {
            return this.getAttribute(u.HEADLINE) || this.headline
        }
        get copyText() {
            return this.getAttribute(u.COPY) || this.copy
        }
        get layoutOrder() {
            return this.getAttribute("layout-order") || this.layout_order
        }
        get panelsObj() {
            const a = this.getAttribute(u.PANELS) || this.panels;
            return "string" === typeof a ? JSON.parse(a) : a
        }
        get showExpansionPanels() {
            return this.hasAttribute("show-expansion-panels") || this.show_expansion_panels
        }
        checkCopy(a) {
            return this.showExpansionPanels ? a.headline : `${a.headline} - ${a.copy}`
        }
        panelBuilder() {
            const a = this.showExpansionPanels;
            return this.panelsObj.map((b,c)=>{
                var d;
                return h`
        <div class="glue-expansion-panel ${a ? "" : "is-static"}">
          <h3 class="glue-expansion-panel__toggle">
            <span class="glue-expansion-panel__button column-expansion-panel ${a ? "" : "gads-contact-hub-panel__button--no-pointer"}"
                id="panel-${c}-toggle" data-glue-expansion-panel-toggle-for="panel-${c}-content" ${a ? "" : 'aria-expanded="true"'}>
              ${(null === (d = b.icon) || void 0 === d ? 0 : d.image.url) ? h`
                <gads-image aria-hidden="true"
                    image="${b.icon.image.url}"
                    widths="sm:24"
                    lazy>
                </gads-image>
              ` : ""}
              <span class="glue-expansion-panel__header-text">${b.headline}</span>
              ${b.copy ? h`
                <svg aria-hidden="true" viewBox="0 0 24 24" class="glue-icon glue-expansion-panel__header-arrow">
                  <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path>
                </svg>
              ` : ""}
            </span>
          </h3>
          <div
              class="glue-expansion-panel__content ${b.copy ? "" : " hidden"}"
              ${a ? "" : "data-glue-expansion-panel-initial='expanded'"}
              id="panel-${c}-content">
            <div>
              <p class="copy-text">${b.copy}</p>
            </div>
          </div>
        </div>
      `
            }
            )
        }
        render() {
            return g`
      <section class="glue-spacer-5-top glue-spacer-5-bottom glue-fullbleed">
        <div class="glue-fullbleed">
          <div class="glue-page">
            <div class="glue-grid">
              <div class="glue-grid__col glue-grid__col--span-1-xl glue-grid__col--span-0-lg glue-grid__col--span-1-md glue-grid__col--span-0-sm"></div>
              <div class="glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md glue-grid__col--span-12-lg glue-grid__col--span-10-xl">
                <div class="glue-grid">
                  <div class="glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md glue-grid__col--span-5-lg glue-grid__col--span-4-xl">
                    <h2 class="glue-headline glue-headline--headline-2 glue-spacer-2-bottom">
                      <span class="glue-font-weight-medium">${this.headlineText}</span>
                    </h2>
                    <p class="two-column-list--body glue-spacer-2-bottom copy-text">
                      ${this.copyText}
                    </p>
                    <div class="cta-container">
                      ${this.ctaBlock}
                    </div>
                  </div>
                  <div class="glue-grid__col glue-grid__col--span-4-sm glue-grid__col--span-10-md glue-grid__col--span-7-lg  glue-grid__col--span-6-xl two-column-list--button-container">
                    <div class="glue-expansion-panels ${this.showExpansionPanels ? "" : "no-expansion-panels"}">
                      ${this.panelBuilder()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
        }
    }
    ;
    customElements.define("gads-two-column-list", Hc);
    var Y = {};
    Y.GadsAdsFormat = Qb;
    Y.GadsAnimatedHero = Rb;
    Y.GadsAnimatedText = Sb;
    Y.GadsBudget = Tb;
    Y.GadsCalloutAnimatedStat = Ub;
    Y.GadsContactHub = Xb;
    Y.GadsExpansionPanels = Yb;
    Y.GadsGoalSelector = Zb;
    Y.GadsGridWall = bc;
    Y.GadsHeroJumpLinks = cc;
    Y.GadsHeroSupport = dc;
    Y.GadsJumpLinkSection = ec;
    Y.GadsMegaNav = uc;
    Y.GadsRelatedProducts = wc;
    Y.GadsRelatedTools = xc;
    Y.GadsResourceJumplinkToTop = yc;
    Y.GadsResourceTableOfContents = zc;
    Y.GadsSimpleFooter = Kb;
    Y.GadsSimpleNav = Dc;
    Y.GadsSmartCalcForm = Fc;
    Y.GadsTabBar = Gc;
    Y.GadsTwoColumnList = Hc;
    var Z = {};
    Object.defineProperty(Z, "__esModule", {
        value: !0
    });
    Z.isGrpcClient = Z.Selectors = Z.EventNames = void 0;
    var Ic = Z.EventNames || (Z.EventNames = {});
    Ic.AMA_CLIENT_READY = "AMAClient:ready";
    Ic.LOAD = "load";
    (Z.Selectors || (Z.Selectors = {})).MARKETING_CLIENT_SCRIPT = "marketing-client";
    Z.isGrpcClient = function(a) {
        return ["getAdsAccounts", "setAuthUser"].every(b=>b in a)
    }
    ;
    var Jc = {};
    Object.defineProperty(Jc, "__esModule", {
        value: !0
    });
    Jc.AmaClientService = void 0;
    Jc.AmaClientService = class {
        static loadMarketingClient() {
            Promise.all([new Promise(a=>{
                if ("complete" === document.readyState)
                    return a();
                window.addEventListener(Z.EventNames.LOAD, ()=>a())
            }
            ), new Promise(a=>{
                if (window.MarketingClient)
                    return a(window.MarketingClient);
                const b = document.getElementById(Z.Selectors.MARKETING_CLIENT_SCRIPT);
                null === b || void 0 === b ? void 0 : b.addEventListener(Z.EventNames.LOAD, ()=>a(window.MarketingClient))
            }
            )]).then(()=>{
                (0,
                Z.isGrpcClient)(window.MarketingClient) && window.dispatchEvent(new CustomEvent(Z.EventNames.AMA_CLIENT_READY,{
                    detail: window.MarketingClient
                }))
            }
            )
        }
    }
    ;
    Object.defineProperty({}, "__esModule", {
        value: !0
    });
    new X.GadsImage;
    new X.SubIDOperations;
    new X.AWPrefetch;
    new Y.GadsAnimatedHero;
    Jc.AmaClientService.loadMarketingClient();
}
).call(this || window, (window.__wpcc = window.__wpcc || {}));
