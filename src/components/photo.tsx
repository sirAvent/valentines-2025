
interface PhotoProps {
    src: string;
}

const Photo = ({ src }: PhotoProps) => {
    return (
        <div className="h-96 w-96 bg-white">
            <img src={src} alt="photo" />
        </div>);
};

export default Photo;