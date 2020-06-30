import Layout from '../../styles/Layout';
import ProjectsPage from '../../components/pages/ProjectsPage';

const ProjectsJavascript = () => {
	return (
		<Layout 
			pageTitle="Vanilla JS & jQuery Projects - Maciej Pajkowski"
			headerText="Vanilla JS & jQuery Projects"
		>
			<ProjectsPage tech="javascript" />
		</Layout>
	)
}

export default ProjectsJavascript;
