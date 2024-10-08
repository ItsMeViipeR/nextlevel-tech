import { YouTubeEmbed } from "@next/third-parties/google";

export const MdxYouTube = ({
  id,
  description,
}: {
  id: string;
  description?: string;
}) => {
  return (
    <>
      <YouTubeEmbed videoid={id} />
      {description && (
        <span className="text-gray-500 text-sm">{description}</span>
      )}
    </>
  );
};
