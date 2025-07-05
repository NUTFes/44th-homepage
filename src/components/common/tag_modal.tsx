'use client';

type TagModalProps = {
  isOpen: boolean;
  onClose: () => void;
  allTags: string[];
  selectedTags: string[];
  onTagChange: (tag: string) => void;
};

const TagModal = ({
  isOpen,
  onClose,
  allTags,
  selectedTags,
  onTagChange,
}: TagModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#654321] flex flex-col items-center justify-center z-50 p-8"
      style={{
        backgroundColor: 'rgba(76, 42, 0, 0.9)',
        backdropFilter: 'blur(6px)', // 背景ぼかし
        WebkitBackdropFilter: 'blur(8px)', // Safari対応
      }}
    >
      <div className="w-full max-w-md text-[#F8F5E9]">
        <h2 className="text-3xl font-bold mb-8 text-center">タグ検索</h2>
        <div className="space-y-4 mb-10">
          {allTags.map((tag) => (
            <label key={tag} className="flex items-center text-2xl">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => onTagChange(tag)}
                className="appearance-none h-8 w-8 border-2 border-[#F8F5E9] rounded-sm bg-transparent checked:bg-[#F8F5E9] checked:border-transparent mr-4"
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button onClick={onClose} className="text-2xl">
            戻る
          </button>
          <button
            onClick={onClose}
            className="px-12 py-3 bg-[#F8F5E9] text-[#654321] text-2xl font-bold rounded-lg"
          >
            検索
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagModal;
