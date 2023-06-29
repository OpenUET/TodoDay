import httpStatus from 'http-status';
import { catchAsync } from '#utils/catchAsync.js';

export const getAllUsers = catchAsync((req, res) => {
  res.status(httpStatus.OK).json({
    users: [
      {
        name: 'trantuananh',
        avatar: 'https://www.linkpicture.com/q/340920909_903735680891461_3182682436424991510_n.jpg',
        github: 'https://github.com/Niichan1403',
      },
      {
        name: 'lethanhbinh',
        avatar: 'https://avatars.githubusercontent.com/u/24197774?v=4',
        github: 'https://github.com/lethanksbinh',
      },
      {
        name: 'levietdat',
        avatar: 'https://avatars.githubusercontent.com/u/69759053?v=4',
        github: 'https://github.com/datleviet',
      },
      {
        name: 'nguyennhatminh',
        avatar: 'https://avatars.githubusercontent.com/u/63915841?v=4',
        github: 'https://github.com/Minhnhat0408',
      },
    ],
  });
});
