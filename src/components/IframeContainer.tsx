import './IframeContainer.css';

interface IframeProps {
  src: string;
  title?: string;
  width: string;
  height: string;
}

const IframeContainer: React.FC<IframeProps> = ({ src, title, width, height }) => {
  return (
    <div id="container">
      <iframe
        src={src}
        title={title || 'Embedded Content'}
        allowFullScreen
        width={width}
        height={height}
      />
    </div>
  );
};

export default IframeContainer;
