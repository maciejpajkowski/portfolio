const getAdequateText = (usedType) => {
    switch(usedType) {
        case "react":
            return "React.js";
        case "javascript":
            return "Vanilla JS or jQuery";
        case "html":
            return "HTML & CSS";
        case "dotnet":
            return "C# (.NET)";
        case "other":
            return "Other";
    }
}

export default getAdequateText;