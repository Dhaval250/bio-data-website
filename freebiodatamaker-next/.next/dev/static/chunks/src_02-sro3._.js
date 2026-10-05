(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BiodataForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BiodataForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplateSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TemplateSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplateCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TemplateCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BiodataPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BiodataPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const LANGS = [
    {
        id: "en",
        label: "EN"
    },
    {
        id: "mr",
        label: "मराठी"
    },
    {
        id: "hi",
        label: "हिंदी"
    },
    {
        id: "gu",
        label: "ગુજરાતી"
    },
    {
        id: "te",
        label: "తెలుగు"
    },
    {
        id: "bn",
        label: "বাংলা"
    }
];
const GOD_IMAGES = [
    {
        id: "ganesh1",
        emoji: "🕉️",
        label: "Om / Ganesha"
    },
    {
        id: "ganesh2",
        emoji: "🐘",
        label: "Ganesha"
    },
    {
        id: "lakshmi",
        emoji: "🪷",
        label: "Lakshmi"
    },
    {
        id: "krishna",
        emoji: "🪈",
        label: "Krishna"
    },
    {
        id: "shiva",
        emoji: "🔱",
        label: "Shiva"
    },
    {
        id: "durga",
        emoji: "⚔️",
        label: "Durga"
    },
    {
        id: "hanuman",
        emoji: "🙏",
        label: "Hanuman"
    },
    {
        id: "sai",
        emoji: "✨",
        label: "Sai Baba"
    },
    {
        id: "om",
        emoji: "ॐ",
        label: "Om"
    },
    {
        id: "swastik",
        emoji: "卐",
        label: "Swastik"
    },
    {
        id: "ram",
        emoji: "🏹",
        label: "Ram"
    },
    {
        id: "vishnu",
        emoji: "🌀",
        label: "Vishnu"
    }
];
/** Optional chips — same as freebiodatamaker.com */ const OPTIONAL_CHIPS = [
    {
        key: "maritalStatus",
        label: "Marital Status"
    },
    {
        key: "rashi",
        label: "Rashi"
    },
    {
        key: "nakshatra",
        label: "Nakshatra"
    },
    {
        key: "manglik",
        label: "Manglik"
    },
    {
        key: "gotra",
        label: "Gotra"
    },
    {
        key: "gana",
        label: "Gan"
    },
    {
        key: "diet",
        label: "Diet"
    },
    {
        key: "disability",
        label: "Disability"
    },
    {
        key: "complexion",
        label: "Complexion"
    },
    {
        key: "blood",
        label: "Blood Group"
    },
    {
        key: "salary",
        label: "Salary"
    },
    {
        key: "nativePlaceExtra",
        label: "Native Place"
    },
    {
        key: "hobbies",
        label: "Hobbies & Interests"
    },
    {
        key: "expectations",
        label: "Expectations"
    }
];
const fieldClass = "w-full min-h-[44px] max-w-full rounded-xl border border-[#e8e0d4] bg-white px-3 py-2.5 text-base text-[#1c1917] shadow-[0_1px_2px_rgba(28,25,23,0.04)] outline-none transition placeholder:text-[#a8a29e] focus:border-[#c4a35a] focus:shadow-[0_0_0_3px_rgba(196,163,90,0.18)] sm:min-h-[42px] sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm touch-manipulation appearance-none";
const SESSION_KEY = "fbm-biodata-session-v1";
function loadSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return null;
        return parsed;
    } catch  {
        return null;
    }
}
function saveSession(snap) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(snap));
    } catch  {
    // quota / private mode — ignore
    }
}
function clearSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        sessionStorage.removeItem(SESSION_KEY);
    } catch  {
    /* ignore */ }
}
function makeId() {
    return `f-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
function defaultPersonalFields() {
    return [
        {
            id: makeId(),
            key: "fullName",
            label: "Full Name",
            value: "",
            include: true,
            required: true,
            section: "personal",
            placeholder: "Enter your full name"
        },
        {
            id: makeId(),
            key: "dob",
            label: "Date of Birth",
            value: "",
            include: true,
            type: "date",
            section: "personal"
        },
        {
            id: makeId(),
            key: "gender",
            label: "Gender",
            value: "",
            include: true,
            type: "select",
            options: [
                "Male",
                "Female"
            ],
            section: "personal"
        },
        {
            id: makeId(),
            key: "height",
            label: "Height",
            value: "",
            include: true,
            section: "personal",
            placeholder: "5'8\""
        },
        {
            id: makeId(),
            key: "nativePlace",
            label: "Place of Birth",
            value: "",
            include: true,
            section: "personal",
            placeholder: "e.g. Mumbai, Maharashtra"
        },
        {
            id: makeId(),
            key: "religion",
            label: "Religion",
            value: "",
            include: true,
            section: "personal",
            placeholder: "e.g. Hindu / Muslim / Christian"
        },
        {
            id: makeId(),
            key: "caste",
            label: "Caste",
            value: "",
            include: true,
            section: "personal",
            placeholder: "e.g. your community"
        },
        {
            id: makeId(),
            key: "education",
            label: "Highest Qualification",
            value: "",
            include: true,
            section: "personal",
            placeholder: "e.g. B.Tech Computer Science"
        },
        {
            id: makeId(),
            key: "occupation",
            label: "Profession",
            value: "",
            include: true,
            section: "personal",
            placeholder: "e.g. Software Engineer at TCS"
        }
    ];
}
function defaultFamilyFields() {
    return [
        {
            id: makeId(),
            key: "fatherName",
            label: "Father's Name",
            value: "",
            include: true,
            section: "family"
        },
        {
            id: makeId(),
            key: "fatherOccupation",
            label: "Father's Occupation",
            value: "",
            include: true,
            section: "family"
        },
        {
            id: makeId(),
            key: "motherName",
            label: "Mother's Name",
            value: "",
            include: true,
            section: "family"
        },
        {
            id: makeId(),
            key: "motherOccupation",
            label: "Mother's Occupation",
            value: "",
            include: true,
            section: "family"
        },
        {
            id: makeId(),
            key: "siblings",
            label: "Siblings (Brothers/Sisters)",
            value: "",
            include: true,
            section: "family",
            placeholder: "e.g. 1 Brother, 1 Sister"
        }
    ];
}
function defaultContactFields() {
    return [
        {
            id: makeId(),
            key: "phone",
            label: "Mobile No.",
            value: "",
            include: true,
            section: "contact",
            placeholder: "10-digit mobile"
        },
        {
            id: makeId(),
            key: "email",
            label: "Email ID",
            value: "",
            include: true,
            section: "contact",
            placeholder: "name@email.com"
        },
        {
            id: makeId(),
            key: "address",
            label: "Present Address",
            value: "",
            include: true,
            type: "textarea",
            section: "contact",
            placeholder: "House, area, city, state, PIN"
        }
    ];
}
const initialData = {
    language: "en",
    fullName: "",
    dob: "",
    gender: "",
    height: "",
    religion: "",
    caste: "",
    rashi: "",
    nakshatra: "",
    gotra: "",
    manglik: "",
    education: "",
    occupation: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    siblings: "",
    nativePlace: "",
    familyDetails: "",
    phone: "",
    email: "",
    address: "",
    partnerPreferences: "",
    templateId: "abstract-orange",
    biodataTitle: "Biodata",
    mantra: "|| Shri Ganeshaya Namah ||",
    godImage: "🕉️",
    customFields: []
};
const STEP_KEYS = [
    "stepInfo",
    "stepFamily",
    "stepContact"
];
/** Fields that should never be auto-translated */ const SKIP_TRANSLATE_KEYS = new Set([
    "dob",
    "gender",
    "height",
    "phone",
    "email"
]);
/** Latin letters → likely English (or romanized) text worth translating */ function looksLatin(text) {
    return /[A-Za-z]{2,}/.test(text);
}
/** Detect script to pick API source language */ function detectScriptLang(text, fallback = "en") {
    if (/[\u0A80-\u0AFF]/.test(text)) return "gu"; // Gujarati
    if (/[\u0900-\u097F]/.test(text)) return "hi"; // Devanagari (hi/mr)
    if (/[\u0C00-\u0C7F]/.test(text)) return "te"; // Telugu
    if (/[\u0980-\u09FF]/.test(text)) return "bn"; // Bengali
    if (looksLatin(text)) return "en";
    return fallback;
}
/** Field row: label + Include + input + up/down — aligned like original */ function FieldRow({ field, onChange, onMove, onRemove, isFirst, isLast, includeText = "Include", selectText = "Select", language = "en", onTranslateValue }) {
    _s();
    const [editingLabel, setEditingLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [translating, setTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tryAutoTranslate = async ()=>{
        if (!onTranslateValue) return;
        if (language === "en") return;
        if (SKIP_TRANSLATE_KEYS.has(field.key)) return;
        if (field.type === "date" || field.type === "select") return;
        const v = field.value?.trim();
        if (!v || !looksLatin(v)) return;
        setTranslating(true);
        try {
            const res = await fetch("/api/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: v,
                    from: "en",
                    to: language
                })
            });
            const data = await res.json();
            const translated = String(data?.translated || "").trim();
            if (translated && translated !== v) {
                onTranslateValue(field.id, translated);
            }
        } catch  {
        // keep original on failure
        } finally{
            setTranslating(false);
        }
    };
    const btnIcon = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e8e0d4] bg-[#faf8f5] text-[#9a7b3c] transition active:scale-95 disabled:opacity-25 touch-manipulation sm:h-8 sm:w-8";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-full overflow-hidden rounded-xl border border-[#ebe4d8] bg-white p-3 shadow-[0_1px_4px_rgba(28,25,23,0.04)] sm:rounded-2xl sm:p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: editingLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            className: "min-w-0 flex-1 rounded-lg border border-[#c4a35a] bg-white px-2 py-1.5 text-base font-semibold text-stone-800 outline-none focus:ring-2 focus:ring-[#c4a35a]/20 sm:text-sm",
                            value: field.label,
                            onChange: (e)=>onChange(field.id, {
                                    label: e.target.value
                                }),
                            onBlur: ()=>setEditingLabel(false),
                            onKeyDown: (e)=>e.key === "Enter" && setEditingLabel(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-[13px] font-semibold leading-tight text-stone-700 sm:text-sm",
                                    children: [
                                        field.label,
                                        (field.required || field.key === "fullName") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#c4a35a]",
                                            children: " *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataForm.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    title: "Edit label",
                                    onClick: ()=>setEditingLabel(true),
                                    className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-stone-400 touch-manipulation hover:bg-[#faf6eb] hover:text-[#c4a35a] sm:h-7 sm:w-7",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-3.5 w-3.5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                translating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-medium text-[#9a7b3c]",
                                    children: "…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex shrink-0 cursor-pointer items-center gap-1.5 text-[11px] font-medium text-[#9a7b3c] touch-manipulation sm:text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: field.include,
                                onChange: (e)=>onChange(field.id, {
                                        include: e.target.checked
                                    }),
                                className: "h-4 w-4 rounded border-[#c4a35a] text-[#c4a35a] focus:ring-[#c4a35a]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden xs:inline sm:inline",
                                children: includeText
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BiodataForm.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: field.type === "select" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(fieldClass, "pr-8"),
                            value: field.value,
                            "data-field-key": field.key,
                            onChange: (e)=>onChange(field.id, {
                                    value: e.target.value
                                }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: selectText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                field.key === "gender" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "male",
                                            children: field.options && field.options[0] || "Male"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataForm.tsx",
                                            lineNumber: 312,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "female",
                                            children: field.options && field.options[1] || "Female"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataForm.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 311,
                                    columnNumber: 17
                                }, this) : (field.options || []).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o,
                                        children: o
                                    }, o, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 317,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this) : field.type === "textarea" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(fieldClass, "min-h-[80px] resize-y"),
                            value: field.value,
                            onChange: (e)=>onChange(field.id, {
                                    value: e.target.value
                                }),
                            onBlur: ()=>void tryAutoTranslate(),
                            placeholder: field.placeholder,
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: field.type === "date" ? "date" : "text",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(fieldClass, field.type === "date" && "min-h-[44px] [color-scheme:light] [-webkit-appearance:none] appearance-none"),
                            value: field.value,
                            "data-field-key": field.key,
                            onChange: (e)=>onChange(field.id, {
                                    value: e.target.value
                                }),
                            onBlur: ()=>void tryAutoTranslate(),
                            placeholder: field.placeholder,
                            autoComplete: field.key === "fullName" ? "name" : "off"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end gap-1.5 sm:justify-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: isFirst,
                                onClick: ()=>onMove(field.id, -1),
                                className: btnIcon,
                                title: "Move up",
                                "aria-label": "Move field up",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-3.5 w-3.5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 12l5-5 5 5H5z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: isLast,
                                onClick: ()=>onMove(field.id, 1),
                                className: btnIcon,
                                title: "Move down",
                                "aria-label": "Move field down",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-3.5 w-3.5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 8l5 5 5-5H5z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onRemove(field.id),
                                className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-red-500 transition hover:bg-red-50 active:scale-95 touch-manipulation sm:h-8 sm:w-8",
                                title: "Remove field",
                                "aria-label": "Remove field",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-3.5 w-3.5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BiodataForm.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BiodataForm.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_s(FieldRow, "X43AC/5iWtora9q2b+4TrJRa5e4=");
_c = FieldRow;
function BiodataForm() {
    _s1();
    // sessionStorage keeps data across steps; auto-clears when tab/window closes
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [personalFields, setPersonalFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultPersonalFields);
    const [familyFields, setFamilyFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultFamilyFields);
    const [contactFields, setContactFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultContactFields);
    const [showGodModal, setShowGodModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Client hydrate (avoid SSR mismatch)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BiodataForm.useEffect": ()=>{
            const s = loadSession();
            let preferred = null;
            try {
                preferred = sessionStorage.getItem("fbm-preferred-template");
            } catch  {
                preferred = null;
            }
            if (s) {
                if (s.data) {
                    setData({
                        ...s.data,
                        templateId: preferred || s.data.templateId || "abstract-orange"
                    });
                } else if (preferred) {
                    setData({
                        "BiodataForm.useEffect": (prev)=>({
                                ...prev,
                                templateId: preferred
                            })
                    }["BiodataForm.useEffect"]);
                }
                if (typeof s.step === "number") setStep(s.step);
                if (s.personalFields?.length) setPersonalFields(s.personalFields);
                if (s.familyFields?.length) setFamilyFields(s.familyFields);
                if (s.contactFields?.length) setContactFields(s.contactFields);
                if (typeof s.showPreview === "boolean") setShowPreview(s.showPreview);
            } else if (preferred) {
                setData({
                    "BiodataForm.useEffect": (prev)=>({
                            ...prev,
                            templateId: preferred
                        })
                }["BiodataForm.useEffect"]);
            }
            setHydrated(true);
        }
    }["BiodataForm.useEffect"], []);
    // Homepage "Choose Your Perfect Template" → apply selection live
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BiodataForm.useEffect": ()=>{
            const onPick = {
                "BiodataForm.useEffect.onPick": (e)=>{
                    const ce = e;
                    const id = ce?.detail?.templateId;
                    if (!id) return;
                    setData({
                        "BiodataForm.useEffect.onPick": (prev)=>({
                                ...prev,
                                templateId: id
                            })
                    }["BiodataForm.useEffect.onPick"]);
                    setShowPreview(false);
                    try {
                        sessionStorage.setItem("fbm-preferred-template", id);
                    } catch  {
                    /* ignore */ }
                    // Jump to form create section
                    try {
                        document.getElementById("create")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    } catch  {
                    /* ignore */ }
                }
            }["BiodataForm.useEffect.onPick"];
            window.addEventListener("fbm-template-select", onPick);
            return ({
                "BiodataForm.useEffect": ()=>window.removeEventListener("fbm-template-select", onPick)
            })["BiodataForm.useEffect"];
        }
    }["BiodataForm.useEffect"], []);
    // Persist all form + steps to sessionStorage on every change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BiodataForm.useEffect": ()=>{
            if (!hydrated) return;
            saveSession({
                data,
                step,
                personalFields,
                familyFields,
                contactFields,
                showPreview
            });
        }
    }["BiodataForm.useEffect"], [
        hydrated,
        data,
        step,
        personalFields,
        familyFields,
        contactFields,
        showPreview
    ]);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BiodataForm.useCallback[update]": (key, value)=>{
            setData({
                "BiodataForm.useCallback[update]": (prev)=>({
                        ...prev,
                        [key]: value
                    })
            }["BiodataForm.useCallback[update]"]);
        }
    }["BiodataForm.useCallback[update]"], []);
    const lang = data.language;
    /** Apply translated labels + placeholders when language changes */ const applyLangToFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BiodataForm.useCallback[applyLangToFields]": (list, language)=>{
            return list.map({
                "BiodataForm.useCallback[applyLangToFields]": (f)=>{
                    const translated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldLabel"])(language, f.key);
                    const ph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldPlaceholder"])(language, f.key);
                    return {
                        ...f,
                        label: translated && translated !== f.key ? translated : f.label,
                        placeholder: f.key === "dob" || f.key === "gender" ? f.placeholder : ph,
                        // Display labels in language; values stay male/female via FieldRow
                        options: f.key === "gender" ? [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(language, "male"),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(language, "female")
                        ] : f.options
                    };
                }
            }["BiodataForm.useCallback[applyLangToFields]"]);
        }
    }["BiodataForm.useCallback[applyLangToFields]"], []);
    /** Translate field value between languages via API */ const translateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BiodataForm.useCallback[translateText]": async (text, to, fromLang)=>{
            const value = (text || "").trim();
            if (!value) return text;
            if (to === fromLang) return text;
            // Skip pure numbers / dates / phones
            if (/^[\d\s+\-/.()]+$/.test(value)) return text;
            const from = fromLang || detectScriptLang(value, "en");
            if (from === to) return text;
            try {
                const res = await fetch("/api/translate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        text: value,
                        from,
                        to
                    })
                });
                const data = await res.json();
                const translated = String(data?.translated || "").trim();
                return translated || text;
            } catch  {
                return text;
            }
        }
    }["BiodataForm.useCallback[translateText]"], []);
    const translateFieldList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BiodataForm.useCallback[translateFieldList]": async (list, to, fromLang)=>{
            const next = await Promise.all(list.map({
                "BiodataForm.useCallback[translateFieldList]": async (f)=>{
                    const labeled = applyLangToFields([
                        f
                    ], to)[0];
                    if (SKIP_TRANSLATE_KEYS.has(f.key) || f.type === "date" || f.type === "select") {
                        return labeled;
                    }
                    const v = (f.value || "").trim();
                    if (!v) return labeled;
                    const translated = await translateText(v, to, fromLang);
                    return {
                        ...labeled,
                        value: translated
                    };
                }
            }["BiodataForm.useCallback[translateFieldList]"]));
            return next;
        }
    }["BiodataForm.useCallback[translateFieldList]"], [
        applyLangToFields,
        translateText
    ]);
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BiodataForm.useCallback[setLanguage]": (next)=>{
            const fromLang = data.language || "en";
            if (fromLang === next) return;
            // Labels now + translate VALUES in background
            setPersonalFields({
                "BiodataForm.useCallback[setLanguage]": (prev)=>{
                    void translateFieldList(prev, next, fromLang).then(setPersonalFields);
                    return applyLangToFields(prev, next);
                }
            }["BiodataForm.useCallback[setLanguage]"]);
            setFamilyFields({
                "BiodataForm.useCallback[setLanguage]": (prev)=>{
                    void translateFieldList(prev, next, fromLang).then(setFamilyFields);
                    return applyLangToFields(prev, next);
                }
            }["BiodataForm.useCallback[setLanguage]"]);
            setContactFields({
                "BiodataForm.useCallback[setLanguage]": (prev)=>{
                    void translateFieldList(prev, next, fromLang).then(setContactFields);
                    return applyLangToFields(prev, next);
                }
            }["BiodataForm.useCallback[setLanguage]"]);
            // 3) Title + Mantra
            setData({
                "BiodataForm.useCallback[setLanguage]": (prev)=>{
                    const defaultEnTitle = "Biodata";
                    const defaultEnMantra = "|| Shri Ganeshaya Namah ||";
                    const nextDefaultTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(next, "defaultTitle") || defaultEnTitle;
                    const nextDefaultMantra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(next, "defaultMantra") || defaultEnMantra;
                    const prevDefaultTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(fromLang, "defaultTitle") || defaultEnTitle;
                    const prevDefaultMantra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(fromLang, "defaultMantra") || defaultEnMantra;
                    let title = prev.biodataTitle || defaultEnTitle;
                    let mantra = prev.mantra || defaultEnMantra;
                    const isDefaultTitle = !title.trim() || title.trim() === defaultEnTitle || title.trim() === prevDefaultTitle;
                    const isDefaultMantra = !mantra.trim() || mantra.trim() === defaultEnMantra || mantra.trim() === prevDefaultMantra;
                    if (isDefaultTitle) {
                        title = nextDefaultTitle;
                    } else {
                        void translateText(title, next, fromLang).then({
                            "BiodataForm.useCallback[setLanguage]": (tr)=>{
                                if (tr) setData({
                                    "BiodataForm.useCallback[setLanguage]": (p)=>({
                                            ...p,
                                            biodataTitle: tr
                                        })
                                }["BiodataForm.useCallback[setLanguage]"]);
                            }
                        }["BiodataForm.useCallback[setLanguage]"]);
                    }
                    if (isDefaultMantra) {
                        mantra = nextDefaultMantra;
                    } else {
                        void translateText(mantra, next, fromLang).then({
                            "BiodataForm.useCallback[setLanguage]": (tr)=>{
                                if (tr) setData({
                                    "BiodataForm.useCallback[setLanguage]": (p)=>({
                                            ...p,
                                            mantra: tr
                                        })
                                }["BiodataForm.useCallback[setLanguage]"]);
                            }
                        }["BiodataForm.useCallback[setLanguage]"]);
                    }
                    return {
                        ...prev,
                        language: next,
                        biodataTitle: title,
                        mantra
                    };
                }
            }["BiodataForm.useCallback[setLanguage]"]);
        }
    }["BiodataForm.useCallback[setLanguage]"], [
        applyLangToFields,
        translateFieldList,
        translateText,
        data.language
    ]);
    // Keep labels in sync on first mount for default language
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BiodataForm.useEffect": ()=>{
            setPersonalFields({
                "BiodataForm.useEffect": (prev)=>applyLangToFields(prev, lang)
            }["BiodataForm.useEffect"]);
            setFamilyFields({
                "BiodataForm.useEffect": (prev)=>applyLangToFields(prev, lang)
            }["BiodataForm.useEffect"]);
            setContactFields({
                "BiodataForm.useEffect": (prev)=>applyLangToFields(prev, lang)
            }["BiodataForm.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BiodataForm.useEffect"], []);
    const handlePhoto = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ()=>update("photoDataUrl", reader.result);
        reader.readAsDataURL(file);
    };
    const setFieldsForStep = (section, next)=>{
        if (section === "personal") setPersonalFields(next);
        else if (section === "family") setFamilyFields(next);
        else setContactFields(next);
    };
    const getFields = (section)=>{
        if (section === "personal") return personalFields;
        if (section === "family") return familyFields;
        return contactFields;
    };
    const onFieldChange = (section, id, patch)=>{
        const list = getFields(section);
        const next = list.map((f)=>f.id === id ? {
                ...f,
                ...patch
            } : f);
        setFieldsForStep(section, next);
        const row = next.find((f)=>f.id === id);
        if (row && row.key in initialData) {
            const k = row.key;
            if (k === "gender") {
                update("gender", row.value === "male" || row.value === "female" ? row.value : "");
            } else if (typeof initialData[k] === "string") {
                update(k, row.value);
            }
        }
    };
    const onFieldMove = (section, id, dir)=>{
        const list = [
            ...getFields(section)
        ];
        const i = list.findIndex((f)=>f.id === id);
        const j = i + dir;
        if (i < 0 || j < 0 || j >= list.length) return;
        [list[i], list[j]] = [
            list[j],
            list[i]
        ];
        setFieldsForStep(section, list);
    };
    const onFieldRemove = (section, id)=>{
        setFieldsForStep(section, getFields(section).filter((f)=>f.id !== id));
    };
    const addField = (section, preset)=>{
        const list = getFields(section);
        if (preset && list.some((f)=>f.key === preset.key)) {
            return; // already added
        }
        const key = preset?.key || `custom-${Date.now()}`;
        const row = {
            id: makeId(),
            key,
            label: preset ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldLabel"])(lang, preset.key) || preset.label : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "newField"),
            value: "",
            include: true,
            section,
            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "enterValue")
        };
        setFieldsForStep(section, [
            ...list,
            row
        ]);
    };
    const addChip = (chip)=>{
        // Map known keys to data fields + personal section
        const knownMap = {
            rashi: "rashi",
            nakshatra: "nakshatra",
            manglik: "manglik",
            gotra: "gotra"
        };
        addField("personal", {
            key: chip.key,
            label: chip.label
        });
        if (knownMap[chip.key]) {
        // ensure data key exists
        }
    };
    const buildDataFromFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BiodataForm.useCallback[buildDataFromFields]": ()=>{
            const all = [
                ...personalFields,
                ...familyFields,
                ...contactFields
            ];
            const next = {
                ...data
            };
            const customs = [];
            for (const f of all){
                if (!f.include) continue;
                const known = f.key in initialData && !f.key.startsWith("custom-") && ![
                    "maritalStatus",
                    "gana",
                    "diet",
                    "disability",
                    "complexion",
                    "blood",
                    "salary",
                    "nativePlaceExtra",
                    "hobbies",
                    "expectations"
                ].includes(f.key);
                if (f.key === "rashi" || f.key === "nakshatra" || f.key === "gotra") {
                    next[f.key] = f.value;
                } else if (f.key === "manglik") {
                    next.manglik = f.value || "";
                } else if (known) {
                    const k = f.key;
                    if (k === "gender") {
                        next.gender = f.value === "male" || f.value === "female" ? f.value : "";
                    } else if (typeof next[k] === "string" || next[k] === undefined) {
                        next[k] = f.value;
                    }
                } else if (f.label.trim() && f.value.trim()) {
                    customs.push({
                        id: f.id,
                        label: f.label,
                        value: f.value,
                        include: true
                    });
                }
            }
            next.customFields = customs;
            next.fullName = personalFields.find({
                "BiodataForm.useCallback[buildDataFromFields]": (f)=>f.key === "fullName"
            }["BiodataForm.useCallback[buildDataFromFields]"])?.value || data.fullName;
            return next;
        }
    }["BiodataForm.useCallback[buildDataFromFields]"], [
        data,
        personalFields,
        familyFields,
        contactFields
    ]);
    const next = ()=>{
        setError("");
        // Current step fields that are included must be filled before Next
        const sectionFields = step === 0 ? personalFields : step === 1 ? familyFields : contactFields;
        const missing = sectionFields.filter((f)=>f.include && !(f.value || "").trim());
        if (missing.length > 0) {
            const names = missing.map((f)=>f.label).slice(0, 4).join(", ");
            const more = missing.length > 4 ? ` +${missing.length - 4} more` : "";
            setError(`Please fill all fields before Next Step: ${names}${more}`);
            // Focus first empty included field
            try {
                const key = missing[0]?.key;
                if (key) {
                    const el = document.querySelector(`[data-field-key="${key}"]`);
                    el?.focus();
                }
            } catch  {
            /* ignore */ }
            return;
        }
        // Sync full name into data
        if (step === 0) {
            const name = personalFields.find((f)=>f.key === "fullName")?.value?.trim() || data.fullName;
            if (name) setData((prev)=>({
                    ...prev,
                    fullName: name
                }));
        }
        // Save snapshot into main data, then advance
        setData(buildDataFromFields());
        if (step < 2) {
            setStep(step + 1);
            // Scroll to top of form on step change
            try {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } catch  {
            /* ignore */ }
            return;
        }
        setShowPreview(true);
    };
    const prev = ()=>{
        if (showPreview) {
            setShowPreview(false);
            return;
        }
        if (step > 0) setStep(step - 1);
    };
    const downloadPdf = async ()=>{
        setError("");
        if (!showPreview) {
            setError("Please open Preview first, then Download.");
            return;
        }
        const card = document.getElementById("biodata-preview-card") || document.querySelector("[data-biodata-preview]");
        if (!card) {
            setError("Preview card not found. Open Preview again.");
            return;
        }
        setIsGenerating(true);
        try {
            // Direct PDF download (no print dialog): card -> canvas -> A4 PDF -> save
            const { captureElementToPdf } = await __turbopack_context__.A("[project]/src/lib/capturePreviewPdf.ts [app-client] (ecmascript, async loader)");
            const safe = (data.fullName || data.biodataTitle || "biodata").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase().slice(0, 40);
            await captureElementToPdf(card, `${safe || "biodata"}-marriage-biodata.pdf`);
        } catch (err) {
            console.error(err);
            setError("PDF failed: " + (err instanceof Error ? err.message : "unknown"));
        } finally{
            setIsGenerating(false);
        }
    };
    const currentSection = step === 0 ? "personal" : step === 1 ? "family" : "contact";
    const currentFields = getFields(currentSection);
    const usedChipKeys = new Set(personalFields.map((f)=>f.key));
    const previewData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BiodataForm.useMemo[previewData]": ()=>{
            if (!showPreview) return data;
            // Always keep the user-selected template
            return {
                ...buildDataFromFields(),
                templateId: data.templateId
            };
        }
    }["BiodataForm.useMemo[previewData]"], [
        showPreview,
        data,
        buildDataFromFields
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-5xl min-w-0 px-0 overflow-x-hidden",
        children: [
            !showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex flex-wrap items-center justify-center gap-2 sm:mb-8",
                children: STEP_KEYS.map((key, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setStep(i),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition", step === i ? "bg-stone-900 text-white shadow-md" : step > i ? "bg-[#f0ebe3] text-[#1c1917]" : "bg-stone-100 text-stone-400"),
                        children: [
                            i + 1,
                            ". ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, key)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 854,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataForm.tsx",
                lineNumber: 852,
                columnNumber: 9
            }, this),
            !showPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-full overflow-hidden rounded-xl border border-[#e7e5e4]/80 bg-[#faf8f5] shadow-xl shadow-[#f0ebe3]/40 sm:rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 bg-gradient-to-r from-[#c4a35a] via-[#c4a35a] to-[#c4a35a]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 875,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 sm:p-6 lg:p-8",
                        children: [
                            step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: LANGS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setLanguage(l.id),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-3 py-1.5 text-xs font-medium transition", data.language === l.id ? "bg-[#1c1917] text-[#e8d5a3]" : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"),
                                                children: l.label
                                            }, l.id, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 883,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 881,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 items-end gap-4 sm:grid-cols-[1fr_auto_1fr]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "mb-1.5 block text-xs font-semibold text-stone-600",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "title")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: fieldClass,
                                                        value: data.biodataTitle || "",
                                                        onChange: (e)=>update("biodataTitle", e.target.value),
                                                        placeholder: "Biodata"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 901,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowGodModal(true),
                                                className: "mx-auto flex flex-col items-center gap-1 rounded-xl border border-dashed border-[#c4a35a] bg-[#faf6eb]/50 px-5 py-2.5 transition hover:bg-[#faf6eb]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f0ebe3] to-[#f0ebe3]/30 text-3xl ring-2 ring-[#f0ebe3]",
                                                        children: data.godImage || "🕉️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-[#9a7b3c] underline",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "changeGod")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 918,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 910,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "mb-1.5 block text-xs font-semibold text-stone-600",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "mantra")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: fieldClass,
                                                        value: data.mantra || "",
                                                        onChange: (e)=>update("mantra", e.target.value),
                                                        placeholder: "|| Shri Ganeshaya Namah ||"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 922,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 900,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-dashed border-[#c4a35a]/70 bg-gradient-to-br from-[#f0ebe3]/30/80 to-stone-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-3 text-sm font-semibold text-stone-700",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "choosePhoto")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 935,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-stone-200/80",
                                                        children: data.photoDataUrl ? // eslint-disable-next-line @next/next/no-img-element
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: data.photoDataUrl,
                                                            alt: "Profile",
                                                            className: "h-full w-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BiodataForm.tsx",
                                                            lineNumber: 940,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl text-stone-400",
                                                            children: "👤"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BiodataForm.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: fileRef,
                                                                type: "file",
                                                                accept: "image/*",
                                                                className: "hidden",
                                                                onChange: handlePhoto
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                                lineNumber: 946,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>fileRef.current?.click(),
                                                                className: "rounded-lg bg-[#c4a35a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1c1917]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "upload")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                                lineNumber: 947,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-stone-500",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "photoHint")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                                lineNumber: 954,
                                                                columnNumber: 23
                                                            }, this),
                                                            data.photoDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>update("photoDataUrl", undefined),
                                                                className: "mt-1 text-xs font-medium text-red-600 hover:underline",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "remove")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                                lineNumber: 956,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-[180px] flex-1 rounded-lg border border-[#e7e5e4] bg-white/80 p-3 text-xs text-stone-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-1 font-semibold text-stone-700",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "photoTips")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                                lineNumber: 966,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "list-inside list-disc space-y-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "tip1")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                                        lineNumber: 968,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "tip2")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                                        lineNumber: 969,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "tip3")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                                        lineNumber: 970,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "tip4")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                                        lineNumber: 971,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "tip5")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                                        lineNumber: 972,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                                lineNumber: 967,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 936,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 934,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 879,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold uppercase tracking-wide text-stone-700",
                                        children: step === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "personalDetails") : step === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "familyDetails") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "contactDetails")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 982,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-3 sm:gap-4", currentSection === "contact" ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"),
                                        children: currentFields.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(f.type === "textarea" || f.key === "fullName" ? "md:col-span-2" : ""),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                                    field: f,
                                                    onChange: (id, patch)=>onFieldChange(currentSection, id, patch),
                                                    onMove: (id, dir)=>onFieldMove(currentSection, id, dir),
                                                    onRemove: f.key.startsWith("custom-") || OPTIONAL_CHIPS.some((c)=>c.key === f.key) || ![
                                                        "fullName",
                                                        "phone"
                                                    ].includes(f.key) ? (id)=>onFieldRemove(currentSection, id) : undefined,
                                                    isFirst: idx === 0,
                                                    isLast: idx === currentFields.length - 1,
                                                    includeText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "include"),
                                                    selectText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "select"),
                                                    language: lang,
                                                    onTranslateValue: (id, value)=>onFieldChange(currentSection, id, {
                                                            value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                                    lineNumber: 1005,
                                                    columnNumber: 21
                                                }, this)
                                            }, f.id, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 999,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 990,
                                        columnNumber: 15
                                    }, this),
                                    step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 rounded-xl border border-[#e7e5e4] bg-[#faf6eb]/30 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-3 text-sm font-medium text-stone-600",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "addMore")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 1032,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: OPTIONAL_CHIPS.map((chip)=>{
                                                    const added = usedChipKeys.has(chip.key);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: added,
                                                        onClick: ()=>addChip(chip),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-3 py-1.5 text-xs font-semibold transition", added ? "border-stone-200 bg-stone-100 text-stone-400" : "border-[#c4a35a] bg-white text-[#9a7b3c] hover:bg-[#faf6eb]"),
                                                        children: [
                                                            "+ ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldLabel"])(lang, chip.key)
                                                        ]
                                                    }, chip.key, true, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 1039,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1031,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>addField(currentSection),
                                        className: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#c4a35a] bg-[#faf6eb]/40 py-3 text-sm font-semibold text-[#9a7b3c] transition hover:bg-[#faf6eb]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg leading-none",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 1065,
                                                columnNumber: 17
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "addField")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 981,
                                columnNumber: 13
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "form-template-pick",
                                className: "mt-8 scroll-mt-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplateSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selectedId: data.templateId,
                                    onSelect: (id)=>{
                                        try {
                                            sessionStorage.setItem("fbm-preferred-template", id);
                                        } catch  {
                                        /* ignore */ }
                                        // Validate contact fields before opening preview
                                        const missing = contactFields.filter((f)=>f.include && !(f.value || "").trim());
                                        if (missing.length > 0) {
                                            update("templateId", id);
                                            const names = missing.map((f)=>f.label).slice(0, 4).join(", ");
                                            setError(`Template selected. Please fill: ${names} — then Preview.`);
                                            return;
                                        }
                                        // Apply selected template + open preview with that design
                                        const built = {
                                            ...buildDataFromFields(),
                                            templateId: id
                                        };
                                        setData(built);
                                        setError("");
                                        setShowPreview(true);
                                        try {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });
                                        } catch  {
                                        /* ignore */ }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1071,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: prev,
                                        disabled: step === 0,
                                        className: "order-3 min-h-[44px] w-full rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 touch-manipulation disabled:opacity-40 hover:bg-stone-50 sm:order-1 sm:w-auto",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "goBack")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "order-1 flex w-full flex-col gap-2 sm:order-2 sm:w-auto sm:flex-row sm:flex-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: next,
                                            className: "min-h-[48px] w-full rounded-xl bg-gradient-to-r from-[#c4a35a] to-[#9a7b3c] px-6 py-3 text-sm font-bold text-white shadow-md touch-manipulation hover:from-[#9a7b3c] hover:to-[#c4a35a] sm:w-auto sm:py-2.5",
                                            children: step < 2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "nextStep") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "previewBiodata")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataForm.tsx",
                                            lineNumber: 1123,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 877,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BiodataForm.tsx",
                lineNumber: 874,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BiodataPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: previewData
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 1136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplateCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selectedId: data.templateId,
                        onSelect: (id)=>{
                            try {
                                sessionStorage.setItem("fbm-preferred-template", id);
                            } catch  {
                            /* ignore */ }
                            update("templateId", id);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 1139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: prev,
                                className: "inline-flex items-center gap-2 rounded-xl bg-[#2d3748] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1a202c]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        children: "✎"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1158,
                                        columnNumber: 15
                                    }, this),
                                    " Edit Biodata"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: downloadPdf,
                                disabled: isGenerating,
                                className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f5a623] to-[#e67e22] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:from-[#e67e22] hover:to-[#d35400] disabled:opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        children: "↓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1166,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    isGenerating ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "generating") : "Download Biodata"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 1152,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-red-600",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 1170,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-stone-500",
                        children: [
                            "Having trouble downloading or accessing an older biodata?",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#support",
                                className: "font-semibold text-[#e67e22] underline-offset-2 hover:underline",
                                children: "Click here"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 1172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "support",
                        className: "mx-auto max-w-lg scroll-mt-20 rounded-2xl border border-[#f5d78e] bg-gradient-to-b from-[#fffbf0] to-[#fff8e7] p-6 shadow-sm sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-center text-xl font-bold text-[#1c1917] sm:text-2xl",
                                children: "How can we support you?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-center text-sm text-stone-600",
                                children: "किसी भी सवाल या समस्या के लिए हमसे संपर्क करें।"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:Pankajahir526@gmail.com",
                                        className: "flex items-center gap-4 rounded-xl border border-[#f0e6c8] bg-white px-4 py-3.5 shadow-sm transition hover:border-[#e67e22]/40 hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff3e0] text-xl",
                                                children: "✉️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-stone-500",
                                                        children: "Email Support:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 1203,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-sm font-semibold text-[#e67e22] sm:text-base",
                                                        children: "Pankajahir526@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 1202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/919773424517",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-4 rounded-xl border border-[#f0e6c8] bg-white px-4 py-3.5 shadow-sm transition hover:border-[#25d366]/50 hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef] text-xl",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 1216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-stone-500",
                                                        children: "WhatsApp Support:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 1220,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-[#25d366] sm:text-base",
                                                        children: "+91 9773424517"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BiodataForm.tsx",
                                                lineNumber: 1219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BiodataForm.tsx",
                                        lineNumber: 1210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BiodataForm.tsx",
                        lineNumber: 1183,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BiodataForm.tsx",
                lineNumber: 1135,
                columnNumber: 9
            }, this),
            showGodModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
                onClick: ()=>setShowGodModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[85vh] w-full max-w-lg overflow-auto rounded-2xl bg-white p-5 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-4 text-lg font-bold text-stone-800",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "selectGod")
                        }, void 0, false, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 1240,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-3 sm:grid-cols-6",
                            children: GOD_IMAGES.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        update("godImage", g.emoji);
                                        setShowGodModal(false);
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex aspect-square flex-col items-center justify-center rounded-xl border-2 bg-[#faf6eb]/50 text-3xl transition hover:border-[#c4a35a] hover:bg-[#faf6eb]", data.godImage === g.emoji ? "border-[#c4a35a] ring-2 ring-[#f0ebe3]" : "border-stone-100"),
                                    title: g.label,
                                    children: g.emoji
                                }, g.id, false, {
                                    fileName: "[project]/src/components/BiodataForm.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 1241,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowGodModal(false),
                                className: "rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(lang, "close")
                            }, void 0, false, {
                                fileName: "[project]/src/components/BiodataForm.tsx",
                                lineNumber: 1263,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BiodataForm.tsx",
                            lineNumber: 1262,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BiodataForm.tsx",
                    lineNumber: 1236,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataForm.tsx",
                lineNumber: 1232,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BiodataForm.tsx",
        lineNumber: 850,
        columnNumber: 5
    }, this);
}
_s1(BiodataForm, "VaYkppgUuSbDhLAhMpGf7/cQ9ec=");
_c1 = BiodataForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "FieldRow");
__turbopack_context__.k.register(_c1, "BiodataForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BiodataPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplateArtPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TemplateArtPreview.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Leaf({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "64",
        height: "80",
        viewBox: "0 0 64 80",
        fill: "none",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 8c-2 12-14 22-22 28 10 2 20 2 28-2-2 10-2 20 2 30 8-12 16-24 18-36-10 2-18-4-26-20z",
                fill: "#c4b5a0",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30 12c0 16 8 28 16 36",
                stroke: "#b8a990",
                strokeWidth: "1",
                fill: "none",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BiodataPreview.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Leaf;
function SectionBar({ icon, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2 mt-4 flex items-center gap-2 first:mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#ebe4d8] text-[11px]",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full bg-[#ebe4d8] px-3 py-0.5 text-[10px] font-bold tracking-[0.12em] text-[#3f3a34]",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BiodataPreview.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = SectionBar;
function Line({ label, value }) {
    if (!value || !String(value).trim()) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-[minmax(0,38%)_10px_minmax(0,1fr)] items-start gap-x-1 text-[11px] leading-[1.65] text-[#3f3a34]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#5c564e]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#9a9288]",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0 break-all font-medium [overflow-wrap:anywhere]",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BiodataPreview.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c2 = Line;
const BiodataPreview = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = function BiodataPreview({ data }, ref) {
    const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplate"])(data.templateId);
    const isElegant = template.id === "elegant-profile" || template.id === "pearl-white";
    const isTemple = template.id === "abstract-temple" || template.id === "temple-saffron" || template.id === "heritage-gold" || template.id === "classic-ivory";
    const customRows = (data.customFields || []).filter((f)=>f.label?.trim() && f.value?.trim());
    // ——— ARTWORK TEMPLATES (Orange / Lotus / Red Velvet / Rose / Blue) ———
    // Drawn on top of the real template artwork so the preview matches the selected design.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArtLayout"])(template.id)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplateArtPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: ref,
            data: {
                ...data,
                templateId: template.id
            }
        }, void 0, false, {
            fileName: "[project]/src/components/BiodataPreview.tsx",
            lineNumber: 71,
            columnNumber: 12
        }, this);
    }
    // ——— ELEGANT PROFILE (content-height, no forced empty bottom) ———
    if (isElegant) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            "data-biodata-preview": true,
            id: "biodata-preview-card",
            className: "relative mx-auto w-full max-w-full overflow-hidden rounded-sm border border-[#e7e5e4] bg-[#faf8f5] shadow-lg sm:max-w-[480px]",
            style: {
                fontFamily: "Georgia, 'Times New Roman', serif"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaf, {
                    className: "pointer-events-none absolute left-2 top-2 opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/BiodataPreview.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Leaf, {
                    className: "pointer-events-none absolute bottom-2 right-2 rotate-180 opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/BiodataPreview.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "biodata-print-inner",
                    className: "relative z-[1] flex flex-col p-5 pb-6 sm:p-7 sm:pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0 items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold tracking-tight text-[#2c2825] sm:text-3xl",
                                            children: data.biodataTitle?.trim() || data.fullName || "Biodata"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1.5 flex flex-wrap items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg leading-none",
                                                    "aria-hidden": true,
                                                    children: data.godImage || "🕉️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-medium tracking-wide text-[#78716c] sm:text-[12px]",
                                                    children: data.mantra?.trim() || "|| Shri Ganeshaya Namah ||"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 h-px w-10 bg-[#c4b5a0]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-[100px] w-[84px] shrink-0 flex-col items-center justify-center overflow-hidden rounded border border-[#d6cfc4] bg-[#f0ebe3] sm:h-[110px] sm:w-[92px]",
                                    children: data.photoDataUrl ? // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: data.photoDataUrl,
                                        alt: data.fullName || "Photo",
                                        className: "h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl text-[#c4b5a0]",
                                                children: "👤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataPreview.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 text-[8px] tracking-wider text-[#a39e94]",
                                                children: "PHOTO HERE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BiodataPreview.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BiodataPreview.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 content-start gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                            icon: "👤",
                                            title: "PERSONAL DETAILS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Name",
                                            value: data.fullName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Date of Birth",
                                            value: data.dob
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Gender",
                                            value: data.gender
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Place of Birth",
                                            value: data.nativePlace
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Height",
                                            value: data.height
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Religion",
                                            value: data.religion
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Caste",
                                            value: data.caste
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Rashi",
                                            value: data.rashi
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Nakshatra",
                                            value: data.nakshatra
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Gotra",
                                            value: data.gotra
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Manglik",
                                            value: data.manglik
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                            icon: "🎓",
                                            title: "EDUCATION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Highest Qualification",
                                            value: data.education
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                            icon: "💼",
                                            title: "OCCUPATION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Profession",
                                            value: data.occupation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                            icon: "🏠",
                                            title: "ADDRESS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Present Address",
                                            value: data.address
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                            icon: "👨‍👩‍👧",
                                            title: "FAMILY DETAILS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Father's Name",
                                            value: data.fatherName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Mother's Name",
                                            value: data.motherName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Father's Occupation",
                                            value: data.fatherOccupation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Mother's Occupation",
                                            value: data.motherOccupation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Siblings (Brothers/Sisters)",
                                            value: data.siblings
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Family Background",
                                            value: data.familyDetails
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        data.partnerPreferences?.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                                    icon: "♥",
                                                    title: "EXPECTATIONS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                                    label: "Partner's Preference",
                                                    value: data.partnerPreferences
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        customRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                                    icon: "★",
                                                    title: "HOBBIES & INTERESTS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                customRows.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                                        label: f.label,
                                                        value: f.value
                                                    }, f.id, false, {
                                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBar, {
                                            icon: "💬",
                                            title: "CONTACT DETAILS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Mobile No.",
                                            value: data.phone
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                            label: "Email ID",
                                            value: data.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 pt-2 text-center text-[10px] italic text-[#8a8278] sm:mt-6",
                                            children: "Looking forward to a meaningful journey together…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BiodataPreview.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BiodataPreview.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BiodataPreview.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BiodataPreview.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    // ——— ABSTRACT TEMPLE ———
    if (isTemple) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            "data-biodata-preview": true,
            className: "relative mx-auto w-full max-w-full sm:max-w-[420px]",
            style: {
                fontFamily: "Georgia, 'Times New Roman', serif"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-sm p-[3px]",
                    style: {
                        background: "linear-gradient(135deg, #C4A35A, #8B6914, #C4A35A)",
                        boxShadow: "0 8px 32px rgba(139,69,19,0.18)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative border-[3px] px-5 pb-6 pt-4",
                        style: {
                            background: template.headerBg,
                            borderColor: "#D4AF37"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl text-amber-800",
                                        children: "🕉️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-medium",
                                        style: {
                                            color: template.accent
                                        },
                                        children: data.mantra?.trim() || "|| श्री गणेशाय नमः ||"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1 text-lg font-bold",
                                        style: {
                                            color: "#5c3310"
                                        },
                                        children: data.biodataTitle?.trim() || "Marriage Biodata"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataPreview.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1 space-y-1 text-[12px]",
                                        children: [
                                            [
                                                "Name",
                                                data.fullName
                                            ],
                                            [
                                                "Date of Birth",
                                                data.dob
                                            ],
                                            [
                                                "Height",
                                                data.height
                                            ],
                                            [
                                                "Religion",
                                                data.religion
                                            ],
                                            [
                                                "Caste",
                                                data.caste
                                            ],
                                            [
                                                "Education",
                                                data.education
                                            ],
                                            [
                                                "Occupation",
                                                data.occupation
                                            ],
                                            [
                                                "Father",
                                                data.fatherName
                                            ],
                                            [
                                                "Mother",
                                                data.motherName
                                            ],
                                            [
                                                "Mobile",
                                                data.phone
                                            ],
                                            [
                                                "Email",
                                                data.email
                                            ],
                                            [
                                                "Address",
                                                data.address
                                            ]
                                        ].filter(([, v])=>v && String(v).trim()).map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-[95px_minmax(0,1fr)] items-start gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-stone-700",
                                                        children: l
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 break-all text-stone-800 [overflow-wrap:anywhere]",
                                                        children: [
                                                            ": ",
                                                            v
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, l, true, {
                                                fileName: "[project]/src/components/BiodataPreview.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[120px] w-[96px] shrink-0 overflow-hidden border-2 bg-white",
                                        style: {
                                            borderColor: template.borderColor
                                        },
                                        children: data.photoDataUrl ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: data.photoDataUrl,
                                            alt: "",
                                            className: "h-full w-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full items-center justify-center text-3xl text-stone-300",
                                            children: "👤"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BiodataPreview.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BiodataPreview.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BiodataPreview.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BiodataPreview.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-center text-[11px] text-stone-500",
                    children: template.name
                }, void 0, false, {
                    fileName: "[project]/src/components/BiodataPreview.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BiodataPreview.tsx",
            lineNumber: 197,
            columnNumber: 7
        }, this);
    }
    // ——— Modern fallback ———
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-biodata-preview": true,
        className: "mx-auto w-full max-w-full sm:max-w-[420px] overflow-hidden rounded-xl border-2 bg-white shadow-lg",
        style: {
            borderColor: template.borderColor
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-4 text-center text-white",
                style: {
                    background: template.accent
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs tracking-widest opacity-90",
                        children: "MARRIAGE BIODATA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataPreview.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold",
                        children: data.fullName || "Your Name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataPreview.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 p-5",
                style: {
                    background: template.headerBg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1 space-y-2 text-sm",
                        children: [
                            [
                                "Name",
                                data.fullName
                            ],
                            [
                                "DOB",
                                data.dob
                            ],
                            [
                                "Height",
                                data.height
                            ],
                            [
                                "Education",
                                data.education
                            ],
                            [
                                "Work",
                                data.occupation
                            ],
                            [
                                "Phone",
                                data.phone
                            ],
                            [
                                "Email",
                                data.email
                            ]
                        ].filter(([, v])=>v).map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-24 text-stone-500",
                                        children: l
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BiodataPreview.tsx",
                                        lineNumber: 297,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l, true, {
                                fileName: "[project]/src/components/BiodataPreview.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataPreview.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    data.photoDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-28 w-24 overflow-hidden rounded-lg border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.photoDataUrl,
                            alt: "",
                            className: "h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BiodataPreview.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BiodataPreview.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BiodataPreview.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BiodataPreview.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
});
_c4 = BiodataPreview;
const __TURBOPACK__default__export__ = BiodataPreview;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Leaf");
__turbopack_context__.k.register(_c1, "SectionBar");
__turbopack_context__.k.register(_c2, "Line");
__turbopack_context__.k.register(_c3, "BiodataPreview$forwardRef");
__turbopack_context__.k.register(_c4, "BiodataPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#faf8f5]/95 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-12 w-full max-w-[1400px] items-center justify-between gap-2 px-3 sm:h-14 sm:px-6 lg:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2.5 font-semibold tracking-tight text-[#1c1917]",
                    "aria-label": "FreeBiodataMaker home",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#c4a35a] to-[#9a7b3c] text-[10px] font-bold text-white shadow-sm",
                            children: "BD"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate text-sm sm:text-[15px]",
                            children: [
                                "Free",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#c4a35a]",
                                    children: "Biodata"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 18,
                                    columnNumber: 17
                                }, this),
                                "Maker"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-1 text-sm md:flex",
                    "aria-label": "Main",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#create",
                            className: "rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]",
                            children: "Create"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#templates",
                            className: "rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]",
                            children: "Templates"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#how-to",
                            className: "rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]",
                            children: "How it works"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#faq",
                            className: "rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#create",
                    className: "shrink-0 rounded-full bg-[#1c1917] px-3 py-1.5 text-xs font-semibold text-[#e8d5a3] shadow-sm transition hover:bg-[#0c0a09] sm:px-4 sm:text-sm",
                    children: "Create"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TemplateArtPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/templates.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * Preview for the artwork templates (Orange, Lotus, Red Velvet, Rose, Blue).
 * The page IS the template artwork (text-free copy of the gallery image) with the user's
 * data placed on top at the same positions, so what you pick is what you get.
 * Everything is sized in cqw (container width units) so screen preview, print/PDF and
 * mobile all render the same layout.
 */ const isImageSrc = (v)=>!!v && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/"));
const PAGE_RATIO = 1414 / 1000; // template artwork height / width
const TemplateArtPreview = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function TemplateArtPreview({ data }, ref) {
    _s();
    const L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArtLayout"])(data.templateId);
    const c = L.color;
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const setRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TemplateArtPreview.TemplateArtPreview.useCallback[setRefs]": (node)=>{
            cardRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
        }
    }["TemplateArtPreview.TemplateArtPreview.useCallback[setRefs]"], [
        ref
    ]);
    const customRows = (data.customFields || []).filter((f)=>f.label?.trim() && f.value?.trim());
    const personal = [
        [
            "Full Name",
            data.fullName
        ],
        [
            "Date of Birth",
            data.dob
        ],
        [
            "Height",
            data.height
        ],
        [
            "Place of Birth",
            data.nativePlace
        ],
        [
            "Religion",
            data.religion
        ],
        [
            "Caste",
            data.caste
        ],
        [
            "Zodiac Sign",
            data.rashi
        ],
        [
            "Nakshatra",
            data.nakshatra
        ],
        [
            "Manglik",
            data.manglik
        ],
        [
            "Gotra",
            data.gotra
        ],
        [
            "Higher Education",
            data.education
        ],
        [
            "Occupation",
            data.occupation
        ],
        ...customRows.slice(0, 6).map((f)=>[
                f.label,
                f.value
            ])
    ];
    const family = [
        [
            "Father's Name",
            data.fatherName
        ],
        [
            "Father's Occupation",
            data.fatherOccupation
        ],
        [
            "Mother's Name",
            data.motherName
        ],
        [
            "Mother's Occupation",
            data.motherOccupation
        ],
        [
            "Brothers / Sisters",
            data.siblings
        ],
        [
            "Family Background",
            data.familyDetails
        ]
    ];
    const contact = [
        [
            "Mobile Number",
            data.phone
        ],
        [
            "Email",
            data.email
        ],
        [
            "Address",
            data.address
        ]
    ];
    const has = (rows)=>rows.filter(([, v])=>v && String(v).trim());
    const title = data.biodataTitle?.trim() || L.defaults.title;
    const mantra = data.mantra?.trim() || L.defaults.mantra;
    // If the user filled a lot of fields, shrink the text block so it never runs off the page.
    // Card height is derived from its width (fixed page ratio) so we never measure before the
    // background image has loaded (that made the text shrink to the minimum).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TemplateArtPreview.TemplateArtPreview.useLayoutEffect": ()=>{
            const recalc = {
                "TemplateArtPreview.TemplateArtPreview.useLayoutEffect.recalc": ()=>{
                    const card = cardRef.current;
                    const body = bodyRef.current;
                    if (!card || !body) return;
                    const w = card.getBoundingClientRect().width;
                    if (!w) return;
                    const cardH = w * PAGE_RATIO;
                    const topPx = cardH * L.headY / 100 - (2 * L.headGap - L.pitch) / 2 * (w / 100);
                    const avail = cardH * L.maxY - topPx;
                    const need = body.scrollHeight; // layout height (unaffected by transform)
                    const next = need > avail && need > 0 && avail > 0 ? Math.max(0.55, avail / need) : 1;
                    setScale({
                        "TemplateArtPreview.TemplateArtPreview.useLayoutEffect.recalc": (prev)=>Math.abs(prev - next) < 0.005 ? prev : next
                    }["TemplateArtPreview.TemplateArtPreview.useLayoutEffect.recalc"]);
                }
            }["TemplateArtPreview.TemplateArtPreview.useLayoutEffect.recalc"];
            recalc();
            const card = cardRef.current;
            const ro = typeof ResizeObserver !== "undefined" && card ? new ResizeObserver(recalc) : null;
            if (ro && card) ro.observe(card);
            return ({
                "TemplateArtPreview.TemplateArtPreview.useLayoutEffect": ()=>ro?.disconnect()
            })["TemplateArtPreview.TemplateArtPreview.useLayoutEffect"];
        }
    }["TemplateArtPreview.TemplateArtPreview.useLayoutEffect"], [
        data,
        L.headY,
        L.headGap,
        L.pitch,
        L.maxY
    ]);
    const colW = L.photo.left - L.left - 2; // % width left for text beside the photo
    const section = (heading, rows, first)=>{
        const filled = has(rows);
        if (!filled.length) return null;
        const headLH = 2 * L.headGap - L.pitch;
        const sectionMargin = first ? 0 : L.secGap - L.pitch / 2 - headLH / 2;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginTop: `${sectionMargin}cqw`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: `${L.headFont}cqw`,
                        lineHeight: `${headLH}cqw`,
                        fontWeight: 700,
                        color: c.heading
                    },
                    children: heading
                }, void 0, false, {
                    fileName: "[project]/src/components/TemplateArtPreview.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                filled.map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: `${L.labelW}cqw 1.5cqw minmax(0,1fr)`,
                            fontSize: `${L.rowFont}cqw`,
                            lineHeight: `${L.pitch}cqw`,
                            color: c.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: c.label,
                                    whiteSpace: "nowrap"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: ":"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    overflowWrap: "anywhere"
                                },
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/src/components/TemplateArtPreview.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this))
            ]
        }, heading, true, {
            fileName: "[project]/src/components/TemplateArtPreview.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    };
    const godIcon = (size)=>{
        const g = data.godImage;
        const circle = L.header.circleIcon ? {
            borderRadius: "50%",
            border: `0.35cqw solid ${c.photoBorder}`,
            background: "linear-gradient(#fff8e7,#f5e6c8)",
            overflow: "hidden"
        } : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                width: `${size}cqw`,
                height: `${size}cqw`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: `${size * 0.7}cqw`,
                lineHeight: 1,
                ...circle
            },
            "aria-hidden": true,
            children: isImageSrc(g) ? // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: g,
                alt: "",
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                lineNumber: 177,
                columnNumber: 11
            }, this) : g || "🕉️"
        }, void 0, false, {
            fileName: "[project]/src/components/TemplateArtPreview.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this);
    };
    const titleStyle = {
        fontSize: `${L.header.titleFont}cqw`,
        fontWeight: 700,
        color: c.title,
        whiteSpace: "nowrap",
        lineHeight: 1.2
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setRefs,
        "data-biodata-preview": true,
        id: "biodata-preview-card",
        className: "relative mx-auto w-full max-w-[480px] overflow-hidden shadow-xl",
        style: {
            containerType: "inline-size",
            aspectRatio: "1000 / 1414",
            fontFamily: "var(--font-mukta), 'Noto Sans Devanagari', 'Segoe UI', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: L.bg,
                alt: "",
                draggable: false,
                style: {
                    display: "block",
                    width: "100%",
                    height: "auto"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "biodata-print-inner",
                style: {
                    position: "absolute",
                    inset: 0
                },
                children: [
                    L.header.stacked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: `calc(${L.header.y}% - ${L.header.titleFont * 0.6}cqw)`,
                                    textAlign: "center",
                                    ...titleStyle
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: `calc(${L.header.iconY}% - ${L.header.iconSize / 2}cqw)`,
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: godIcon(L.header.iconSize)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: `calc(${L.header.mantraY}% - ${L.header.titleFont * 0.6}cqw)`,
                                    textAlign: "center",
                                    ...titleStyle
                                },
                                children: mantra
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TemplateArtPreview.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: `calc(${L.header.y}% - ${L.header.iconSize / 2}cqw)`,
                            height: `${L.header.iconSize}cqw`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "3cqw"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: titleStyle,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this),
                            godIcon(L.header.iconSize),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: titleStyle,
                                children: mantra
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TemplateArtPreview.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bodyRef,
                        style: {
                            position: "absolute",
                            left: `${L.left}%`,
                            width: `${colW}%`,
                            top: `calc(${L.headY}% - ${(2 * L.headGap - L.pitch) / 2}cqw)`,
                            transform: scale < 1 ? `scale(${scale})` : undefined,
                            transformOrigin: "top left"
                        },
                        children: (()=>{
                            let first = true;
                            const out = [];
                            for (const [h, rows] of [
                                [
                                    "Personal Details",
                                    personal
                                ],
                                [
                                    "Family Details",
                                    family
                                ],
                                [
                                    "Contact Details",
                                    contact
                                ]
                            ]){
                                const node = section(h, rows, first);
                                if (node) {
                                    out.push(node);
                                    first = false;
                                }
                            }
                            return out;
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/components/TemplateArtPreview.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: `${L.photo.left}%`,
                            top: `${L.photo.top}%`,
                            width: `${L.photo.w}cqw`,
                            height: `${L.photo.h}cqw`,
                            border: `0.4cqw solid ${c.photoBorder}`,
                            borderRadius: "0.6cqw",
                            overflow: "hidden",
                            background: "rgba(128,128,128,0.18)",
                            boxSizing: "border-box"
                        },
                        children: data.photoDataUrl ? // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.photoDataUrl,
                            alt: data.fullName || "Photo",
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/TemplateArtPreview.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                color: c.text,
                                opacity: 0.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "7cqw",
                                        lineHeight: 1
                                    },
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "1.6cqw",
                                        letterSpacing: "0.2em",
                                        marginTop: "1cqw"
                                    },
                                    children: "PHOTO"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TemplateArtPreview.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TemplateArtPreview.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TemplateArtPreview.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TemplateArtPreview.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TemplateArtPreview.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}, "cF0bnQzGspuBkC/OSMcI2lgGGkY=")), "cF0bnQzGspuBkC/OSMcI2lgGGkY=");
_c1 = TemplateArtPreview;
const __TURBOPACK__default__export__ = TemplateArtPreview;
var _c, _c1;
__turbopack_context__.k.register(_c, "TemplateArtPreview$forwardRef");
__turbopack_context__.k.register(_c1, "TemplateArtPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TemplateCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TemplateCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TemplateCarousel({ selectedId, onSelect }) {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Keep the active template visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TemplateCarousel.useEffect": ()=>{
            const el = trackRef.current?.querySelector(`[data-tpl="${selectedId}"]`);
            el?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });
        }
    }["TemplateCarousel.useEffect"], [
        selectedId
    ]);
    const scrollBy = (dir)=>{
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({
            left: dir * track.clientWidth * 0.8,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto w-full max-w-3xl rounded-2xl border border-stone-200 bg-white p-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Previous templates",
                onClick: ()=>scrollBy(-1),
                className: "absolute left-1 top-[42%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5a623] text-xl font-bold text-white shadow-md transition hover:bg-[#e67e22] sm:flex",
                children: "‹"
            }, void 0, false, {
                fileName: "[project]/src/components/TemplateCarousel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: trackRef,
                className: "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEMPLATES"].map((tpl)=>{
                    const active = tpl.id === selectedId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "data-tpl": tpl.id,
                        onClick: ()=>onSelect(tpl.id),
                        "aria-pressed": active,
                        className: "w-[112px] shrink-0 snap-center text-center touch-manipulation sm:w-[128px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-[3/4] w-full overflow-hidden rounded-lg border-2 bg-[#f5f0e8] transition", active ? "border-[#f5a623] shadow-md" : "border-transparent hover:border-stone-300"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateImageSrc"])(tpl.id),
                                    alt: tpl.name,
                                    loading: "lazy",
                                    draggable: false,
                                    className: "h-full w-full object-cover object-top"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TemplateCarousel.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateCarousel.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 line-clamp-2 text-xs font-semibold", active ? "text-[#e67e22]" : "text-stone-600"),
                                children: tpl.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateCarousel.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tpl.id, true, {
                        fileName: "[project]/src/components/TemplateCarousel.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/TemplateCarousel.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Next templates",
                onClick: ()=>scrollBy(1),
                className: "absolute right-1 top-[42%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5a623] text-xl font-bold text-white shadow-md transition hover:bg-[#e67e22] sm:flex",
                children: "›"
            }, void 0, false, {
                fileName: "[project]/src/components/TemplateCarousel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TemplateCarousel.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(TemplateCarousel, "25ZDZIuc2yxXMsah1kdnpaf+Fmo=");
_c = TemplateCarousel;
var _c;
__turbopack_context__.k.register(_c, "TemplateCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TemplateGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PREFERRED_TEMPLATE_KEY",
    ()=>PREFERRED_TEMPLATE_KEY,
    "TEMPLATE_SELECT_EVENT",
    ()=>TEMPLATE_SELECT_EVENT,
    "default",
    ()=>TemplateGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/templates.ts [app-client] (ecmascript)");
"use client";
;
;
const PREFERRED_TEMPLATE_KEY = "fbm-preferred-template";
const TEMPLATE_SELECT_EVENT = "fbm-template-select";
function TemplateGallery() {
    const pick = (id)=>{
        try {
            sessionStorage.setItem(PREFERRED_TEMPLATE_KEY, id);
        } catch  {
        /* ignore */ }
        // Notify form on same page (already mounted)
        try {
            window.dispatchEvent(new CustomEvent(TEMPLATE_SELECT_EVENT, {
                detail: {
                    templateId: id
                }
            }));
        } catch  {
        /* ignore */ }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEMPLATES"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#create",
                onClick: ()=>pick(t.id),
                className: "group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:border-[#c4a35a] hover:shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-[#faf6eb] to-[#f0ebe3]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateImageSrc"])(t.id),
                                alt: t.name,
                                className: "h-full max-h-full w-full object-contain object-center transition duration-300 group-hover:scale-[1.02]",
                                loading: "eager"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateGallery.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            t.id === "elegant-profile" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-3 top-3 rounded-md bg-[#c4a35a] px-2.5 py-1 text-[11px] font-bold text-white shadow",
                                children: "Classic"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateGallery.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-3 top-3 rounded-md bg-[#1c1917]/90 px-2.5 py-1 text-[11px] font-bold text-[#e8d5a3] shadow",
                                children: "Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateGallery.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 pt-12 opacity-0 transition group-hover:opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Select & fill form →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TemplateGallery.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateGallery.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TemplateGallery.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-stone-100 px-4 py-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-stone-900 sm:text-base",
                                children: t.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateGallery.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            t.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 line-clamp-2 text-xs text-stone-500",
                                children: t.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplateGallery.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TemplateGallery.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, t.id, true, {
                fileName: "[project]/src/components/TemplateGallery.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/TemplateGallery.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = TemplateGallery;
var _c;
__turbopack_context__.k.register(_c, "TemplateGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TemplateSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TemplateSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TemplateSelector({ selectedId, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 rounded-2xl border-2 border-[#e8d5a3] bg-gradient-to-b from-[#fffbf0] to-white p-4 shadow-sm sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center sm:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-wider text-[#c4a35a]",
                        children: "Final step"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TemplateSelector.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-1 text-lg font-bold text-stone-900 sm:text-xl",
                        children: "Choose Your Perfect Template"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TemplateSelector.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-stone-500",
                        children: "Form details are saved — pick a design below, then preview your biodata."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TemplateSelector.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TemplateSelector.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEMPLATES"].map((tpl)=>{
                    const active = selectedId === tpl.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSelect(tpl.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative overflow-hidden rounded-2xl border-2 bg-white text-left transition touch-manipulation", active ? "border-[#c4a35a] shadow-lg ring-2 ring-[#c4a35a]/35" : "border-stone-200 hover:border-[#c4a35a]/50 hover:shadow-md"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[3/4] w-full overflow-hidden bg-[#f5f0e8]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateImageSrc"])(tpl.id),
                                        alt: tpl.name,
                                        className: "h-full max-h-full w-full object-contain object-center",
                                        loading: "eager"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplateSelector.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#c4a35a] text-sm font-bold text-white shadow-md",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplateSelector.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, this),
                                    tpl.id !== "elegant-profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-2.5 top-2.5 rounded-md bg-stone-900/80 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-200",
                                        children: "Premium"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplateSelector.tsx",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TemplateSelector.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-stone-100 px-3 py-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-stone-900",
                                        children: tpl.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplateSelector.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    tpl.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 line-clamp-2 text-[11px] text-stone-500",
                                        children: tpl.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplateSelector.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TemplateSelector.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tpl.id, true, {
                        fileName: "[project]/src/components/TemplateSelector.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/TemplateSelector.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TemplateSelector.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = TemplateSelector;
var _c;
__turbopack_context__.k.register(_c, "TemplateSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FIELD_LABEL_KEYS",
    ()=>FIELD_LABEL_KEYS,
    "fieldLabel",
    ()=>fieldLabel,
    "fieldPlaceholder",
    ()=>fieldPlaceholder,
    "t",
    ()=>t
]);
const en = {
    // steps
    stepInfo: "Info",
    stepFamily: "Family",
    stepContact: "Contact",
    // header fields
    title: "Title",
    mantra: "Mantra",
    defaultTitle: "Biodata",
    defaultMantra: "|| Shri Ganeshaya Namah ||",
    changeGod: "Change God Photo",
    selectGod: "Select God Image",
    close: "Close",
    // photo
    choosePhoto: "Choose your photo",
    upload: "Upload",
    remove: "Remove",
    photoHint: "Clear face photo recommended",
    photoTips: "Photo tips",
    tip1: "Clear, recent photo",
    tip2: "Face centered",
    tip3: "No group shots",
    tip4: "Formal attire",
    tip5: "Auto 4:5 crop",
    // sections
    personalDetails: "Personal Details",
    familyDetails: "Family Details",
    contactDetails: "Contact Details",
    addMore: "Add more details (optional)",
    addField: "Add Field",
    customField: "+ Custom Field",
    goBack: "Go Back",
    nextStep: "Next Step →",
    previewBiodata: "Preview Biodata →",
    editForm: "← Edit Form",
    downloadPdf: "↓ Download PDF",
    generating: "Generating…",
    // field labels
    fullName: "Full Name",
    dob: "Date of Birth",
    gender: "Gender",
    height: "Height",
    nativePlace: "Place of Birth",
    religion: "Religion",
    caste: "Caste / Community",
    education: "Highest Qualification",
    occupation: "Profession",
    fatherName: "Father's Name",
    fatherOccupation: "Father's Occupation",
    motherName: "Mother's Name",
    motherOccupation: "Mother's Occupation",
    siblings: "Siblings (Brothers/Sisters)",
    phone: "Mobile No.",
    email: "Email ID",
    address: "Present Address",
    // chips
    maritalStatus: "Marital Status",
    rashi: "Rashi",
    nakshatra: "Nakshatra",
    manglik: "Manglik",
    gotra: "Gotra",
    gana: "Gan",
    diet: "Diet",
    disability: "Disability",
    complexion: "Complexion",
    blood: "Blood Group",
    salary: "Salary",
    nativePlaceExtra: "Native Place",
    hobbies: "Hobbies & Interests",
    expectations: "Expectations",
    newField: "New Field",
    enterValue: "Enter value",
    male: "Male",
    female: "Female",
    select: "Select",
    nameRequired: "Please enter Full Name to continue",
    include: "Include",
    // placeholders
    ph_fullName: "Enter your full name",
    ph_height: "e.g. 5'8\"",
    ph_nativePlace: "e.g. Mumbai, Maharashtra",
    ph_religion: "e.g. Hindu / Muslim / Christian",
    ph_caste: "e.g. your community",
    ph_education: "e.g. B.Tech Computer Science",
    ph_occupation: "e.g. Software Engineer at TCS",
    ph_siblings: "e.g. 1 Brother, 1 Sister",
    ph_phone: "10-digit mobile",
    ph_email: "name@email.com",
    ph_address: "House, area, city, state, PIN",
    ph_fatherName: "Father's full name",
    ph_fatherOccupation: "e.g. Business / Service",
    ph_motherName: "Mother's full name",
    ph_motherOccupation: "e.g. Homemaker"
};
const gu = {
    stepInfo: "માહિતી",
    stepFamily: "પરિવાર",
    stepContact: "સંપર્ક",
    title: "શીર્ષક",
    mantra: "મંત્ર",
    defaultTitle: "બાયોડેટા",
    defaultMantra: "|| શ્રી ગણેશાય નમઃ ||",
    changeGod: "ભગવાનનો ફોટો બદલો",
    selectGod: "ભગવાનની છબી પસંદ કરો",
    close: "બંધ કરો",
    choosePhoto: "તમારો ફોટો પસંદ કરો",
    upload: "અપલોડ",
    remove: "કાઢી નાખો",
    photoHint: "સ્પષ્ટ ચહેરાનો ફોટો ભલામણ",
    photoTips: "ફોટો ટિપ્સ",
    tip1: "સ્પષ્ટ, તાજેતરનો ફોટો",
    tip2: "ચહેરો મધ્યમાં",
    tip3: "ગ્રુપ ફોટો નહીં",
    tip4: "ફોર્મલ પોશાક",
    tip5: "આપમેળે 4:5 ક્રોપ",
    personalDetails: "વ્યક્તિગત વિગતો",
    familyDetails: "પરિવારની વિગતો",
    contactDetails: "સંપર્ક વિગતો",
    addMore: "વધુ વિગતો ઉમેરો (વૈકલ્પિક)",
    addField: "ફીલ્ડ ઉમેરો",
    customField: "+ કસ્ટમ ફીલ્ડ",
    goBack: "પાછા જાઓ",
    nextStep: "આગળનું પગલું →",
    previewBiodata: "બાયોડેટા પ્રીવ્યૂ →",
    editForm: "← ફોર્મ સંપાદિત કરો",
    downloadPdf: "↓ PDF ડાઉનલોડ",
    generating: "બની રહ્યું છે…",
    fullName: "પૂરું નામ",
    dob: "જન્મ તારીખ",
    gender: "લિંગ",
    height: "ઊંચાઈ",
    nativePlace: "જન્મ સ્થળ",
    religion: "ધર્મ",
    caste: "જાતિ / સમુદાય",
    education: "ઉચ્ચ શિક્ષણ",
    occupation: "વ્યવસાય",
    fatherName: "પિતાનું નામ",
    fatherOccupation: "પિતાનો વ્યવસાય",
    motherName: "માતાનું નામ",
    motherOccupation: "માતાનો વ્યવસાય",
    siblings: "ભાઈ-બહેન",
    phone: "મોબાઇલ નંબર",
    email: "ઈમેલ",
    address: "હાલનું સરનામું",
    maritalStatus: "વૈવાહિક સ્થિતિ",
    rashi: "રાશિ",
    nakshatra: "નક્ષત્ર",
    manglik: "માંગલિક",
    gotra: "ગોત્ર",
    gana: "ગણ",
    diet: "આહાર",
    disability: "અપંગતા",
    complexion: "રંગ",
    blood: "બ્લડ ગ્રુપ",
    salary: "પગાર",
    nativePlaceExtra: "મૂળ ગામ",
    hobbies: "શોખ અને રુચિ",
    expectations: "અપેક્ષાઓ",
    newField: "નવું ફીલ્ડ",
    enterValue: "કિંમત લખો",
    male: "પુરુષ",
    female: "સ્ત્રી",
    select: "પસંદ કરો",
    nameRequired: "આગળ વધવા માટે પૂરું નામ લખો",
    include: "સમાવો",
    ph_fullName: "તમારું પૂરું નામ લખો",
    ph_height: "દા.ત. 5'8\"",
    ph_nativePlace: "દા.ત. અમદાવાદ, ગુજરાત",
    ph_religion: "દા.ત. હિન્દુ / મુસ્લિમ / ખ્રિસ્તી",
    ph_caste: "દા.ત. તમારો સમુદાય",
    ph_education: "દા.ત. બી.ટેક કમ્પ્યુટર સાયન્સ",
    ph_occupation: "દા.ત. સોફ્ટવેર એન્જિનિયર",
    ph_siblings: "દા.ત. 1 ભાઈ, 1 બહેન",
    ph_phone: "10 અંકનો મોબાઇલ",
    ph_email: "name@email.com",
    ph_address: "ઘર, વિસ્તાર, શહેર, રાજ્ય, પિન",
    ph_fatherName: "પિતાનું પૂરું નામ",
    ph_fatherOccupation: "દા.ત. વ્યવસાય / નોકરી",
    ph_motherName: "માતાનું પૂરું નામ",
    ph_motherOccupation: "દા.ત. ગૃહિણી"
};
const hi = {
    stepInfo: "जानकारी",
    stepFamily: "परिवार",
    stepContact: "संपर्क",
    title: "शीर्षक",
    mantra: "मंत्र",
    defaultTitle: "बायोडाटा",
    defaultMantra: "|| श्री गणेशाय नमः ||",
    changeGod: "भगवान का फोटो बदलें",
    selectGod: "भगवान की छवि चुनें",
    close: "बंद करें",
    choosePhoto: "अपना फोटो चुनें",
    upload: "अपलोड",
    remove: "हटाएँ",
    photoHint: "स्पष्ट चेहरे वाला फोटो अनुशंसित",
    photoTips: "फोटो टिप्स",
    tip1: "स्पष्ट, हालिया फोटो",
    tip2: "चेहरा बीच में",
    tip3: "ग्रुप फोटो नहीं",
    tip4: "औपचारिक पोशाक",
    tip5: "ऑटो 4:5 क्रॉप",
    personalDetails: "व्यक्तिगत विवरण",
    familyDetails: "पारिवारिक विवरण",
    contactDetails: "संपर्क विवरण",
    addMore: "और विवरण जोड़ें (वैकल्पिक)",
    addField: "फ़ील्ड जोड़ें",
    customField: "+ कस्टम फ़ील्ड",
    goBack: "वापस जाएँ",
    nextStep: "अगला चरण →",
    previewBiodata: "बायोडाटा पूर्वावलोकन →",
    editForm: "← फॉर्म संपादित करें",
    downloadPdf: "↓ PDF डाउनलोड",
    generating: "बन रहा है…",
    fullName: "पूरा नाम",
    dob: "जन्म तिथि",
    gender: "लिंग",
    height: "ऊँचाई",
    nativePlace: "जन्म स्थान",
    religion: "धर्म",
    caste: "जाति / समुदाय",
    education: "उच्च शिक्षा",
    occupation: "व्यवसाय",
    fatherName: "पिता का नाम",
    fatherOccupation: "पिता का व्यवसाय",
    motherName: "माता का नाम",
    motherOccupation: "माता का व्यवसाय",
    siblings: "भाई-बहन",
    phone: "मोबाइल नंबर",
    email: "ईमेल",
    address: "वर्तमान पता",
    maritalStatus: "वैवाहिक स्थिति",
    rashi: "राशि",
    nakshatra: "नक्षत्र",
    manglik: "मांगलिक",
    gotra: "गोत्र",
    gana: "गण",
    diet: "आहार",
    disability: "विकलांगता",
    complexion: "रंग",
    blood: "ब्लड ग्रुप",
    salary: "वेतन",
    nativePlaceExtra: "मूल स्थान",
    hobbies: "शौक और रुचियाँ",
    expectations: "अपेक्षाएँ",
    newField: "नया फ़ील्ड",
    enterValue: "मान लिखें",
    male: "पुरुष",
    female: "महिला",
    select: "चुनें",
    nameRequired: "पूरा नाम आवश्यक है",
    include: "शामिल करें",
    ph_fullName: "अपना पूरा नाम लिखें",
    ph_height: "उदा. 5'8\"",
    ph_nativePlace: "उदा. मुंबई, महाराष्ट्र",
    ph_religion: "उदा. हिंदू / मुस्लिम / ईसाई",
    ph_caste: "उदा. आपका समुदाय",
    ph_education: "उदा. बी.टेक कंप्यूटर साइंस",
    ph_occupation: "उदा. सॉफ्टवेयर इंजीनियर",
    ph_siblings: "उदा. 1 भाई, 1 बहन",
    ph_phone: "10 अंकों का मोबाइल",
    ph_email: "name@email.com",
    ph_address: "घर, क्षेत्र, शहर, राज्य, पिन",
    ph_fatherName: "पिता का पूरा नाम",
    ph_fatherOccupation: "उदा. व्यवसाय / नौकरी",
    ph_motherName: "माता का पूरा नाम",
    ph_motherOccupation: "उदा. गृहिणी"
};
const mr = {
    stepInfo: "माहिती",
    stepFamily: "कुटुंब",
    stepContact: "संपर्क",
    title: "शीर्षक",
    mantra: "मंत्र",
    defaultTitle: "बायोडेटा",
    defaultMantra: "|| श्री गणेशाय नमः ||",
    changeGod: "देवाचा फोटो बदला",
    selectGod: "देवाची प्रतिमा निवडा",
    close: "बंद करा",
    choosePhoto: "तुमचा फोटो निवडा",
    upload: "अपलोड",
    remove: "काढा",
    photoHint: "स्पष्ट चेहऱ्याचा फोटो शिफारस",
    photoTips: "फोटो टिप्स",
    tip1: "स्पष्ट, अलीकडील फोटो",
    tip2: "चेहरा मध्यभागी",
    tip3: "ग्रुप फोटो नको",
    tip4: "औपचारिक पोशाख",
    tip5: "ऑटो 4:5 क्रॉप",
    personalDetails: "वैयक्तिक तपशील",
    familyDetails: "कौटुंबिक तपशील",
    contactDetails: "संपर्क तपशील",
    addMore: "अधिक तपशील जोडा (पर्यायी)",
    addField: "फील्ड जोडा",
    customField: "+ कस्टम फील्ड",
    goBack: "मागे जा",
    nextStep: "पुढील पायरी →",
    previewBiodata: "बायोडेटा पूर्वावलोकन →",
    editForm: "← फॉर्म संपादित करा",
    downloadPdf: "↓ PDF डाउनलोड",
    generating: "तयार होत आहे…",
    fullName: "पूर्ण नाव",
    dob: "जन्मतारीख",
    gender: "लिंग",
    height: "उंची",
    nativePlace: "जन्मस्थान",
    religion: "धर्म",
    caste: "जात / समुदाय",
    education: "उच्च शिक्षण",
    occupation: "व्यवसाय",
    fatherName: "वडिलांचे नाव",
    fatherOccupation: "वडिलांचा व्यवसाय",
    motherName: "आईचे नाव",
    motherOccupation: "आईचा व्यवसाय",
    siblings: "भाऊ-बहिण",
    phone: "मोबाइल नंबर",
    email: "ईमेल",
    address: "सध्याचा पत्ता",
    maritalStatus: "वैवाहिक स्थिती",
    rashi: "राशी",
    nakshatra: "नक्षत्र",
    manglik: "मांगलिक",
    gotra: "गोत्र",
    gana: "गण",
    diet: "आहार",
    disability: "अपंगत्व",
    complexion: "रंग",
    blood: "ब्लड ग्रुप",
    salary: "पगार",
    nativePlaceExtra: "मूळ गाव",
    hobbies: "छंद आणि आवडी",
    expectations: "अपेक्षा",
    newField: "नवीन फील्ड",
    enterValue: "मूल्य लिहा",
    male: "पुरुष",
    female: "स्त्री",
    select: "निवडा",
    nameRequired: "पूर्ण नाव आवश्यक आहे",
    include: "समाविष्ट करा",
    ph_fullName: "तुमचे पूर्ण नाव लिहा",
    ph_height: "उदा. 5'8\"",
    ph_nativePlace: "उदा. मुंबई, महाराष्ट्र",
    ph_religion: "उदा. हिंदू / मुस्लिम / ख्रिश्चन",
    ph_caste: "उदा. तुमचा समुदाय",
    ph_education: "उदा. बी.टेक कॉम्प्युटर सायन्स",
    ph_occupation: "उदा. सॉफ्टवेअर अभियंता",
    ph_siblings: "उदा. 1 भाऊ, 1 बहीण",
    ph_phone: "10 अंकी मोबाइल",
    ph_email: "name@email.com",
    ph_address: "घर, परिसर, शहर, राज्य, पिन",
    ph_fatherName: "वडिलांचे पूर्ण नाव",
    ph_fatherOccupation: "उदा. व्यवसाय / नोकरी",
    ph_motherName: "आईचे पूर्ण नाव",
    ph_motherOccupation: "उदा. गृहिणी"
};
const te = {
    stepInfo: "సమాచారం",
    stepFamily: "కుటుంబం",
    stepContact: "సంప్రదింపు",
    title: "శీర్షిక",
    mantra: "మంత్రం",
    defaultTitle: "బయోడేటా",
    defaultMantra: "|| శ్రీ గణేశాయ నమః ||",
    changeGod: "దేవుని ఫోటో మార్చండి",
    selectGod: "దేవుని చిత్రం ఎంచుకోండి",
    close: "మూసివేయి",
    choosePhoto: "మీ ఫోటో ఎంచుకోండి",
    upload: "అప్‌లోడ్",
    remove: "తొలగించు",
    photoHint: "స్పష్టమైన ముఖ ఫోటో సిఫార్సు",
    photoTips: "ఫోటో చిట్కాలు",
    tip1: "స్పష్టమైన, ఇటీవలి ఫోటో",
    tip2: "ముఖం మధ్యలో",
    tip3: "గ్రూప్ ఫోటోలు కాదు",
    tip4: "ఫార్మల్ దుస్తులు",
    tip5: "ఆటో 4:5 క్రాప్",
    personalDetails: "వ్యక్తిగత వివరాలు",
    familyDetails: "కుటుంబ వివరాలు",
    contactDetails: "సంప్రదింపు వివరాలు",
    addMore: "మరిన్ని వివరాలు జోడించండి (ఐచ్ఛికం)",
    addField: "ఫీల్డ్ జోడించండి",
    customField: "+ కస్టమ్ ఫీల్డ్",
    goBack: "వెనక్కి",
    nextStep: "తదుపరి దశ →",
    previewBiodata: "బయోడేటా ప్రివ్యూ →",
    editForm: "← ఫారమ్ సవరించు",
    downloadPdf: "↓ PDF డౌన్‌లోడ్",
    generating: "సిద్ధమవుతోంది…",
    fullName: "పూర్తి పేరు",
    dob: "పుట్టిన తేదీ",
    gender: "లింగం",
    height: "ఎత్తు",
    nativePlace: "పుట్టిన స్థలం",
    religion: "మతం",
    caste: "కులం / సమాజం",
    education: "ఉన్నత విద్య",
    occupation: "వృత్తి",
    fatherName: "తండ్రి పేరు",
    fatherOccupation: "తండ్రి వృత్తి",
    motherName: "తల్లి పేరు",
    motherOccupation: "తల్లి వృత్తి",
    siblings: "సోదరులు",
    phone: "మొబైల్ నంబర్",
    email: "ఇమెయిల్",
    address: "ప్రస్తుత చిరునామా",
    maritalStatus: "వైవాహిక స్థితి",
    rashi: "రాశి",
    nakshatra: "నక్షత్రం",
    manglik: "మంగళిక్",
    gotra: "గోత్రం",
    gana: "గణం",
    diet: "ఆహారం",
    disability: "వైకల్యం",
    complexion: "వర్ణం",
    blood: "బ్లడ్ గ్రూప్",
    salary: "జీతం",
    nativePlaceExtra: "స్వస్థలం",
    hobbies: "అభిరుచులు",
    expectations: "అంచనాలు",
    newField: "కొత్త ఫీల్డ్",
    enterValue: "విలువ రాయండి",
    male: "పురుషుడు",
    female: "స్త్రీ",
    select: "ఎంచుకోండి",
    nameRequired: "పూర్తి పేరు అవసరం",
    include: "చేర్చు",
    ph_fullName: "మీ పూర్తి పేరు రాయండి",
    ph_height: "ఉదా. 5'8\"",
    ph_nativePlace: "ఉదా. హైదరాబాద్",
    ph_religion: "ఉదా. హిందూ / ముస్లిం / క్రైస్తవ",
    ph_caste: "ఉదా. మీ సమాజం",
    ph_education: "ఉదా. బి.టెక్ కంప్యూటర్ సైన్స్",
    ph_occupation: "ఉదా. సాఫ్ట్‌వేర్ ఇంజనీర్",
    ph_siblings: "ఉదా. 1 సోదరుడు, 1 సోదరి",
    ph_phone: "10 అంకెల మొబైల్",
    ph_email: "name@email.com",
    ph_address: "ఇల్లు, ప్రాంతం, నగరం, రాష్ట్రం, పిన్",
    ph_fatherName: "తండ్రి పూర్తి పేరు",
    ph_fatherOccupation: "ఉదా. వ్యాపారం / ఉద్యోగం",
    ph_motherName: "తల్లి పూర్తి పేరు",
    ph_motherOccupation: "ఉదా. గృహిణి"
};
const bn = {
    stepInfo: "তথ্য",
    stepFamily: "পরিবার",
    stepContact: "যোগাযোগ",
    title: "শিরোনাম",
    mantra: "মন্ত্র",
    defaultTitle: "বায়োডাটা",
    defaultMantra: "|| শ্রী গণেশায় নমঃ ||",
    changeGod: "ভগবানের ছবি বদলান",
    selectGod: "ভগবানের ছবি বেছে নিন",
    close: "বন্ধ করুন",
    choosePhoto: "আপনার ছবি বেছে নিন",
    upload: "আপলোড",
    remove: "সরান",
    photoHint: "স্পষ্ট মুখের ছবি সুপারিশ",
    photoTips: "ছবির টিপস",
    tip1: "স্পষ্ট, সাম্প্রতিক ছবি",
    tip2: "মুখ মাঝখানে",
    tip3: "গ্রুপ ছবি নয়",
    tip4: "আনুষ্ঠানিক পোশাক",
    tip5: "অটো 4:5 ক্রপ",
    personalDetails: "ব্যক্তিগত বিবরণ",
    familyDetails: "পারিবারিক বিবরণ",
    contactDetails: "যোগাযোগের বিবরণ",
    addMore: "আরও বিবরণ যোগ করুন (ঐচ্ছিক)",
    addField: "ফিল্ড যোগ করুন",
    customField: "+ কাস্টম ফিল্ড",
    goBack: "পিছনে যান",
    nextStep: "পরবর্তী ধাপ →",
    previewBiodata: "বায়োডাটা প্রিভিউ →",
    editForm: "← ফর্ম সম্পাদনা",
    downloadPdf: "↓ PDF ডাউনলোড",
    generating: "তৈরি হচ্ছে…",
    fullName: "পূর্ণ নাম",
    dob: "জন্ম তারিখ",
    gender: "লিঙ্গ",
    height: "উচ্চতা",
    nativePlace: "জন্মস্থান",
    religion: "ধর্ম",
    caste: "জাতি / সম্প্রদায়",
    education: "উচ্চ শিক্ষা",
    occupation: "পেশা",
    fatherName: "পিতার নাম",
    fatherOccupation: "পিতার পেশা",
    motherName: "মাতার নাম",
    motherOccupation: "মাতার পেশা",
    siblings: "ভাই-বোন",
    phone: "মোবাইল নম্বর",
    email: "ইমেইল",
    address: "বর্তমান ঠিকানা",
    maritalStatus: "বৈবাহিক অবস্থা",
    rashi: "রাশি",
    nakshatra: "নক্ষত্র",
    manglik: "মাঙ্গলিক",
    gotra: "গোত্র",
    gana: "গণ",
    diet: "খাদ্য",
    disability: "প্রতিবন্ধকতা",
    complexion: "বর্ণ",
    blood: "ব্লাড গ্রুপ",
    salary: "বেতন",
    nativePlaceExtra: "নিজ গ্রাম",
    hobbies: "শখ ও আগ্রহ",
    expectations: "প্রত্যাশা",
    newField: "নতুন ফিল্ড",
    enterValue: "মান লিখুন",
    male: "পুরুষ",
    female: "মহিলা",
    select: "নির্বাচন করুন",
    nameRequired: "পূর্ণ নাম প্রয়োজন",
    include: "অন্তর্ভুক্ত করুন",
    ph_fullName: "আপনার পূর্ণ নাম লিখুন",
    ph_height: "যেমন 5'8\"",
    ph_nativePlace: "যেমন কলকাতা, পশ্চিমবঙ্গ",
    ph_religion: "যেমন হিন্দু / মুসলিম / খ্রিস্টান",
    ph_caste: "যেমন আপনার সম্প্রদায়",
    ph_education: "যেমন বি.টেক কম্পিউটার সায়েন্স",
    ph_occupation: "যেমন সফটওয়্যার ইঞ্জিনিয়ার",
    ph_siblings: "যেমন ১ ভাই, ১ বোন",
    ph_phone: "১০ সংখ্যার মোবাইল",
    ph_email: "name@email.com",
    ph_address: "বাড়ি, এলাকা, শহর, রাজ্য, পিন",
    ph_fatherName: "পিতার পূর্ণ নাম",
    ph_fatherOccupation: "যেমন ব্যবসা / চাকরি",
    ph_motherName: "মাতার পূর্ণ নাম",
    ph_motherOccupation: "যেমন গৃহিণী"
};
const TABLES = {
    en,
    gu,
    hi,
    mr,
    te,
    bn
};
function t(lang, key) {
    return TABLES[lang]?.[key] ?? TABLES.en[key] ?? key;
}
const FIELD_LABEL_KEYS = [
    "fullName",
    "dob",
    "gender",
    "height",
    "nativePlace",
    "religion",
    "caste",
    "education",
    "occupation",
    "fatherName",
    "fatherOccupation",
    "motherName",
    "motherOccupation",
    "siblings",
    "phone",
    "email",
    "address",
    "maritalStatus",
    "rashi",
    "nakshatra",
    "manglik",
    "gotra",
    "gana",
    "diet",
    "disability",
    "complexion",
    "blood",
    "salary",
    "nativePlaceExtra",
    "hobbies",
    "expectations"
];
function fieldLabel(lang, key) {
    return t(lang, key);
}
function fieldPlaceholder(lang, key) {
    const ph = t(lang, `ph_${key}`);
    if (ph && ph !== `ph_${key}`) return ph;
    return t(lang, "enterValue");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/templates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ART_LAYOUTS",
    ()=>ART_LAYOUTS,
    "TEMPLATES",
    ()=>TEMPLATES,
    "getArtLayout",
    ()=>getArtLayout,
    "getClassicTheme",
    ()=>getClassicTheme,
    "getTemplate",
    ()=>getTemplate,
    "templateImageSrc",
    ()=>templateImageSrc
]);
const TEMPLATES = [
    {
        id: "abstract-orange",
        name: "Abstract Orange",
        description: "Floral cream frame, orange headers, photo right",
        accent: "#e67e22",
        headerBg: "#fffaf5",
        borderColor: "#f0c078",
        previewClass: "bg-[#fffaf5] border-[#f0c078]"
    },
    {
        id: "abstract-lotus",
        name: "Abstract Lotus",
        description: "Soft pink lotus corners, burgundy titles, cream page",
        accent: "#9b2c2c",
        headerBg: "#fff5f5",
        borderColor: "#f8b4b4",
        previewClass: "bg-[#fff5f5] border-[#f8b4b4]"
    },
    {
        id: "abstract-red-velvet",
        name: "Abstract Red Velvet",
        description: "Deep red velvet frame, white center, traditional look",
        accent: "#9b1c1c",
        headerBg: "#ffffff",
        borderColor: "#7f1d1d",
        previewClass: "bg-white border-red-800"
    },
    {
        id: "abstract-rose",
        name: "Abstract Rose",
        description: "Rich magenta rose with gold ornaments",
        accent: "#f5d76e",
        headerBg: "#6b0f3a",
        borderColor: "#f5d76e",
        previewClass: "bg-[#6b0f3a] border-[#f5d76e]"
    },
    {
        id: "abstract-blue",
        name: "Abstract Blue",
        description: "Navy blue premium with gold accents",
        accent: "#f5d76e",
        headerBg: "#0a1628",
        borderColor: "#c9a227",
        previewClass: "bg-[#0a1628] border-[#c9a227]"
    },
    {
        id: "elegant-profile",
        name: "Elegant Profile",
        description: "Soft cream two-column personal profile with photo",
        accent: "#3f3a34",
        headerBg: "#faf8f5",
        borderColor: "#d6cfc4",
        previewClass: "bg-[#faf8f5] border-[#d6cfc4]"
    }
];
function templateImageSrc(id) {
    // All previews as PNG so every browser shows full image
    return `/templates/${id}.png`;
}
function getTemplate(id) {
    return TEMPLATES.find((t)=>t.id === id) || TEMPLATES[0];
}
function getClassicTheme(id) {
    const themes = {
        "abstract-orange": {
            pageBg: "linear-gradient(180deg,#fff9f3,#fffefb)",
            panelBg: "transparent",
            titleColor: "#e67e22",
            sectionColor: "#e67e22",
            textColor: "#3d3429",
            labelColor: "#5c5348",
            photoBorder: "#e8b86d",
            frame: "#e8b86d"
        },
        "abstract-lotus": {
            pageBg: "linear-gradient(180deg,#fff8f5,#ffffff)",
            panelBg: "transparent",
            titleColor: "#9b1c1c",
            sectionColor: "#9b1c1c",
            textColor: "#3f3a34",
            labelColor: "#5c5348",
            photoBorder: "#e8a0a0"
        },
        "abstract-red-velvet": {
            pageBg: "linear-gradient(180deg,#5c0a0a,#7f1d1d 30%,#5c0a0a)",
            panelBg: "#ffffff",
            titleColor: "#7f1d1d",
            sectionColor: "#9b1c1c",
            textColor: "#3f3a34",
            labelColor: "#5c5348",
            photoBorder: "#c4a35a",
            frame: "#7f1d1d"
        },
        "abstract-rose": {
            pageBg: "linear-gradient(160deg,#4a0a2a,#6b0f3a 40%,#3d0620)",
            panelBg: "transparent",
            titleColor: "#f5d76e",
            sectionColor: "#f5d76e",
            textColor: "#faf5f0",
            labelColor: "#f0e6d8",
            photoBorder: "#f5d76e",
            dark: true
        },
        "abstract-blue": {
            pageBg: "linear-gradient(160deg,#061018,#0a1628 40%,#050d18)",
            panelBg: "transparent",
            titleColor: "#f5d76e",
            sectionColor: "#f5d76e",
            textColor: "#f1f5f9",
            labelColor: "#cbd5e1",
            photoBorder: "#c9a227",
            dark: true
        }
    };
    return themes[id] || null;
}
const ART_LAYOUTS = {
    "abstract-lotus": {
        bg: "/templates/abstract-lotus.bg.webp",
        left: 8.9,
        labelW: 20.1,
        maxY: 0.85,
        rowFont: 2.25,
        pitch: 3.29,
        headFont: 3.2,
        headY: 20.6,
        headGap: 3.8,
        secGap: 4.9,
        photo: {
            left: 75.3,
            top: 20.4,
            w: 22.7,
            h: 28.6
        },
        header: {
            y: 11.7,
            iconSize: 7.4,
            titleFont: 3.6
        },
        color: {
            title: "#a31c3a",
            heading: "#a31c3a",
            label: "#1f1f1f",
            text: "#1f1f1f",
            photoBorder: "#a31c3a"
        },
        defaults: {
            title: "Biodata",
            mantra: "|| हर हर महादेव ||"
        }
    },
    "abstract-orange": {
        bg: "/templates/abstract-orange.bg.webp",
        left: 12.6,
        labelW: 20.1,
        maxY: 0.84,
        rowFont: 2.15,
        pitch: 3.13,
        headFont: 3.3,
        headY: 17.8,
        headGap: 3.9,
        secGap: 4.8,
        photo: {
            left: 67.6,
            top: 16.9,
            w: 22.8,
            h: 28.4
        },
        header: {
            y: 9.6,
            iconSize: 7.2,
            titleFont: 3.6,
            circleIcon: true
        },
        color: {
            title: "#c0601c",
            heading: "#c0601c",
            label: "#26211c",
            text: "#26211c",
            photoBorder: "#b5651d"
        },
        defaults: {
            title: "Marriage Biodata",
            mantra: "|| Ganeshaya Namah ||"
        }
    },
    "abstract-red-velvet": {
        bg: "/templates/abstract-red-velvet.bg.webp",
        left: 12.6,
        labelW: 20.1,
        maxY: 0.9,
        rowFont: 2.3,
        pitch: 3.38,
        headFont: 3.4,
        headY: 17.2,
        headGap: 3.96,
        secGap: 5.1,
        photo: {
            left: 67.6,
            top: 16.9,
            w: 22.8,
            h: 28.4
        },
        header: {
            y: 9.8,
            iconSize: 7.4,
            titleFont: 3.5,
            circleIcon: true
        },
        color: {
            title: "#9b1c24",
            heading: "#9b1c24",
            label: "#1f1f1f",
            text: "#1f1f1f",
            photoBorder: "#8b1a1a"
        },
        defaults: {
            title: "बायोडाटा",
            mantra: "|| श्री गणेशाय नमः ||"
        }
    },
    "abstract-rose": {
        bg: "/templates/abstract-rose.bg.webp",
        left: 13.9,
        labelW: 20.1,
        maxY: 0.91,
        rowFont: 2.3,
        pitch: 3.36,
        headFont: 3.3,
        headY: 28.8,
        headGap: 3.8,
        secGap: 5.1,
        photo: {
            left: 74.3,
            top: 29.5,
            w: 22.9,
            h: 28.4
        },
        header: {
            y: 10.4,
            stacked: true,
            iconY: 15.5,
            mantraY: 20.5,
            iconSize: 7.6,
            titleFont: 3.6
        },
        color: {
            title: "#f7d56e",
            heading: "#f7d56e",
            label: "#ffffff",
            text: "#ffffff",
            photoBorder: "#f7d56e"
        },
        defaults: {
            title: "Marriage Biodata",
            mantra: "|| श्री गणेशाय नमः ||"
        }
    },
    "abstract-blue": {
        bg: "/templates/abstract-blue.bg.webp",
        left: 8.9,
        labelW: 20.1,
        maxY: 0.9,
        rowFont: 2.25,
        pitch: 3.37,
        headFont: 3.3,
        headY: 19.9,
        headGap: 3.8,
        secGap: 5.1,
        photo: {
            left: 74.3,
            top: 20.2,
            w: 22.6,
            h: 28.0
        },
        header: {
            y: 9.6,
            iconSize: 6.2,
            titleFont: 3.6
        },
        color: {
            title: "#f2ee8c",
            heading: "#f2ee8c",
            label: "#ffffff",
            text: "#ffffff",
            photoBorder: "#e8e07a"
        },
        defaults: {
            title: "Biodata",
            mantra: "|| नमो बुध्दाय ||"
        }
    }
};
function getArtLayout(id) {
    return ART_LAYOUTS[id] || null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_02-sro3._.js.map