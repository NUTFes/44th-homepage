'use client';
import Image from 'next/image';

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
      <div className="w-full max-w-md text-base">
        <div className="flex justify-center">
          <Image
            src="/logo/tag_modal.png"
            alt="タグ検索"
            width={236}
            height={139}
          />
        </div>

        <div className="text-center pt-2 pb-4 ">
          <p className="text-body2 text-base">※タグは複数選択ができます</p>
        </div>
        <div className="pb-6">
          <div className="border rounded-full border-base" />
        </div>

        <div className="space-y-4 mb-10">
          {allTags.map((tag) => (
            <label key={tag} className="flex items-center text-2xl">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => onTagChange(tag)}
                className="peer absolute opacity-0 w-0 h-0"
              />
              <Image
                src="/icon/tag_modal/checkbox_off.png"
                alt="□"
                width={28}
                height={28}
                className="w-8 h-8 mr-4 peer-checked:hidden"
              />
              <Image
                src="/icon/tag_modal/checkbox_on.png"
                alt="■"
                width={28}
                height={28}
                className="w-8 h-8 mr-4 hidden peer-checked:block"
              />
              <p className="text-base text-body1">
                <span>{tag}</span>
              </p>
            </label>
          ))}
        </div>
        <div className="flex justify-between items-center px-4">
          <button onClick={onClose} className="text-body1">
            戻る
          </button>
          <button
            onClick={onClose}
            className="px-12 py-3 bg-base text-[#654321] text-body1 font-bold rounded-lg"
          >
            検索
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagModal;
