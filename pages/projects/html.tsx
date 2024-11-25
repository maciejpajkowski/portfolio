import Layout from '../../styles/Layout';
import ProjectsPage from '../../components/pages/ProjectsPage';

const ProjectsHtml = () => {
	return (
		<Layout 
			pageTitle="HTML & CSS - Maciej Pajkowski"
			headerText="HTML & CSS Projects"
		>
			<ProjectsPage tech="html" />
		</Layout>
	)
}

export default ProjectsHtml;
