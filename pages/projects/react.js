import Layout from '../../styles/Layout';
import ProjectsPage from '../../components/pages/ProjectsPage';

const ProjectsReact = () => {
	return (
		<Layout 
			pageTitle="React Projects - Maciej Pajkowski"
			headerText="React Projects"
		>
			<ProjectsPage tech="react" />
		</Layout>
	)
}

export default ProjectsReact;
