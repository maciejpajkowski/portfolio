import Layout from '../../styles/Layout';
import ProjectsPage from '../../components/pages/ProjectsPage';

const ProjectsDotnet = () => {
	return (
		<Layout 
			pageTitle="C# (.NET) Projects - Maciej Pajkowski"
			headerText="C# (.NET) Projects"
		>
			<ProjectsPage tech="dotnet" />
		</Layout>
	)
}

export default ProjectsDotnet;
