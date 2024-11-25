import Layout from '../../styles/Layout';
import ProjectsPage from '../../components/pages/ProjectsPage';

const ProjectsOther = () => {
	return (
		<Layout 
			pageTitle="Other Projects - Maciej Pajkowski"
			headerText="Other Projects"
		>
			<ProjectsPage tech="other" />
		</Layout>
	)
}

export default ProjectsOther;
