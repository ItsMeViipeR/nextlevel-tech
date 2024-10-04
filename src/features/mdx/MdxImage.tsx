export const MdxImage = ({
  url,
  description,
}: {
  url: string;
  description?: string;
}) => {
  return (
    <>
      <img src={url} alt="Test" />
      {description && (
        <span className="text-gray-500 text-sm">{description}</span>
      )}
    </>
  );
};
