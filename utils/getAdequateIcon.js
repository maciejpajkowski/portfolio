import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faHtml5, faMicrosoft, faAngular } from '@fortawesome/free-brands-svg-icons';

const getAdequateIcon = (usedType) => {
    switch(usedType) {
        case "react":
            return faReact;
        case "angular":
            return faAngular;
        case "javascript":
            return faJs;
        case "html":
            return faHtml5;
        case "dotnet":
            return faMicrosoft;
        case "other":
            return faCode;
    }
}

export default getAdequateIcon;