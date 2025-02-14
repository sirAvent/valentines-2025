interface PhotoProps {
  src: string;
  text?: string;
}

const Photo = ({ src, text }: PhotoProps) => {
  return (
    <div
      className="pt-8 px-6 bg-white flex flex-col items-center justify-center rounded mx-6"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <img src={src} alt="photo" className="w-80 h-96 object-cover" />
      <p className="pt-4 p-8 text-2xl text-center max-w-80">{text}</p>
    </div>
  );
};

export default Photo;
