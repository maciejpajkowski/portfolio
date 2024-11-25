const getAdequateText = (usedType) => {
    switch(usedType) {
        case "react":
            return "React.js";
        case "angular":
            return "Angular";
        case "javascript":
            return "Vanilla JS & jQuery";
        case "html":
            return "HTML & CSS";
        case "dotnet":
            return "C# (.NET)";
        case "other":
            return "Other";
    }
}

export default getAdequateText;