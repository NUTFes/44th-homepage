'use client';

type TagProps = {
  selectedTags: string[];
  onSearchClick: () => void;
  onResetClick: () => void;
};

const Tag = ({ selectedTags, onSearchClick, onResetClick }: TagProps) => {
  const hasSelectedTags = selectedTags.length > 0;

  return (
    <div className="text-center mb-8">
      {hasSelectedTags ? (
        <div>
          <button
            onClick={onResetClick}
            className="inline-flex items-center justify-center h-[49px] px-[54px] py-2 text-white bg-accent rounded-sm text-body2 shadow_button text-center mb-4"
          >
            × タグをリセット
          </button>
          <div className="flex justify-center gap-2 flex-wrap">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="border border-accent text-accent px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : (
        
        <button
          onClick={onSearchClick}
          className="inline-flex items-center justify-center h-[49px] px-[54px] py-2 text-accent bg-base border-2 border-accent rounded-sm text-body2 text-center shadow_button"
        >
          タグ検索
        </button>
        
      )}
    </div>
  );
};

export default Tag;
