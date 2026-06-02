import portraitPhoto from '../assets/photo-portrait.png';
import skyPhoto from '../assets/photo-sky.png';

const mockPosts = [
  createPost(1, '2026-06-02', '2026-06-02', 'Image upload', portraitPhoto, 128, 31, 67, 22),
  createPost(2, '2026-06-02', '2026-06-01', 'Image upload', skyPhoto, 128, 22, 67, 22),
  createPost(3, '2026-06-01', '2026-06-01', 'Image upload', portraitPhoto, 128, 31, 97, 22),
  createPost(4, '2026-06-01', '2026-05-31', 'Image upload', skyPhoto, 198, 31, 67, 22),
  createPost(5, '2026-05-31', '2026-05-31', 'Image upload', portraitPhoto, 128, 31, 67, 22),
  createPost(6, '2026-05-30', '2026-05-30', 'Image upload', skyPhoto, 128, 31, 67, 22),
  createPost(7, '2026-05-29', '2026-05-29', 'Image upload', portraitPhoto, 128, 31, 67, 22),
  createPost(8, '2026-05-28', '2026-05-28', 'Image upload', skyPhoto, 128, 22, 67, 22),
  createPost(9, '2026-05-27', '2026-05-27', 'Image upload', portraitPhoto, 141, 18, 72, 14),
  createPost(10, '2026-05-25', '2026-05-25', 'Image upload', skyPhoto, 167, 26, 84, 19),
  createPost(11, '2026-05-23', '2026-05-23', 'Image upload', portraitPhoto, 112, 16, 55, 11),
  createPost(12, '2026-05-21', '2026-05-21', 'Image upload', skyPhoto, 203, 42, 91, 27),
  createPost(13, '2026-05-18', '2026-05-18', 'Image upload', portraitPhoto, 98, 13, 49, 8),
  createPost(14, '2026-05-15', '2026-05-15', 'Image upload', skyPhoto, 176, 24, 76, 17),
  createPost(15, '2026-05-12', '2026-05-12', 'Image upload', portraitPhoto, 154, 21, 69, 15),
  createPost(16, '2026-05-08', '2026-05-08', 'Image upload', skyPhoto, 121, 19, 62, 12),
  createPost(17, '2026-05-04', '2026-05-04', 'Image upload', portraitPhoto, 187, 35, 88, 24),
  createPost(18, '2026-05-01', '2026-05-01', 'Image upload', skyPhoto, 133, 20, 58, 13),
  createPost(19, '2026-05-31', '2026-05-30', 'Image upload', skyPhoto, 214, 37, 104, 31),
  createPost(20, '2026-05-30', '2026-05-29', 'Image upload', portraitPhoto, 92, 11, 44, 9),
  createPost(21, '2026-05-26', '2026-05-26', 'Image upload', portraitPhoto, 188, 29, 86, 21),
  createPost(22, '2026-05-24', '2026-05-24', 'Image upload', skyPhoto, 119, 17, 52, 10),
  createPost(23, '2026-05-22', '2026-05-22', 'Image upload', portraitPhoto, 231, 48, 112, 34),
  createPost(24, '2026-05-20', '2026-05-20', 'Image upload', skyPhoto, 145, 23, 71, 16),
  createPost(25, '2026-05-19', '2026-05-19', 'Image upload', portraitPhoto, 164, 27, 74, 18),
  createPost(26, '2026-05-17', '2026-05-17', 'Image upload', skyPhoto, 109, 14, 47, 7),
  createPost(27, '2026-05-16', '2026-05-16', 'Image upload', portraitPhoto, 197, 33, 96, 25),
  createPost(28, '2026-05-14', '2026-05-14', 'Image upload', skyPhoto, 83, 9, 39, 6),
  createPost(29, '2026-05-11', '2026-05-11', 'Image upload', portraitPhoto, 172, 28, 81, 20),
  createPost(30, '2026-05-10', '2026-05-10', 'Image upload', skyPhoto, 126, 18, 59, 12),
  createPost(31, '2026-05-07', '2026-05-07', 'Image upload', portraitPhoto, 208, 40, 101, 29),
  createPost(32, '2026-05-06', '2026-05-06', 'Image upload', skyPhoto, 137, 20, 65, 14),
  createPost(33, '2026-05-03', '2026-05-03', 'Image upload', portraitPhoto, 156, 24, 73, 17),
  createPost(34, '2026-05-02', '2026-05-02', 'Image upload', skyPhoto, 101, 12, 46, 8),
  createPost(35, '2026-04-30', '2026-04-30', 'Image upload', portraitPhoto, 144, 22, 68, 15),
  createPost(36, '2026-04-28', '2026-04-28', 'Image upload', skyPhoto, 118, 16, 53, 11),
  createPost(37, '2026-04-25', '2026-04-25', 'Image upload', portraitPhoto, 193, 31, 90, 23),
  createPost(38, '2026-04-22', '2026-04-22', 'Image upload', skyPhoto, 107, 13, 50, 9),
];

export function getPosts({ from, to } = {}) {
  return mockPosts.filter((post) => {
    if (from && post.publishDateValue < startOfDay(from)) return false;
    if (to && post.publishDateValue > endOfDay(to)) return false;
    return true;
  });
}

function createPost(
  id,
  publishDate,
  uploadDate,
  uploads,
  photo,
  likes,
  comments,
  views,
  secondaryComments,
) {
  return {
    id,
    likes,
    comments,
    views,
    secondaryComments,
    uploads,
    uploadDate: formatDashedDate(parseIsoDate(uploadDate)),
    uploadDateValue: parseIsoDate(uploadDate),
    publishDate: formatDashedDate(parseIsoDate(publishDate)),
    publishDateValue: parseIsoDate(publishDate),
    photo,
  };
}

function parseIsoDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDashedDate(date) {
  return `${date.getDate()}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function endOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}
