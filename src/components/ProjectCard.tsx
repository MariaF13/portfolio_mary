import { Col, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 
interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, githubUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="button-group">
            {githubUrl && (
              <Button href={githubUrl} target="_blank" variant="link">
                <FaGithub />
              </Button>
            )}
            {liveUrl && (
              <Button href={liveUrl} target="_blank" variant="link">
                <FaExternalLinkAlt />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
