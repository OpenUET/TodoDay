import httpStatus from 'http-status';
import { catchAsync } from '#utils/catchAsync.js';

export const getAllUsers = catchAsync((req, res) => {
  res.status(httpStatus.OK).json({
    users: [
      {
        name: 'trantuananh',
        avatar:
          'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/340920909_903735680891461_3182682436424991510_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MUSJbL7U1qoAX9eRYat&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCobANVIuuJuZmLt2BhOmg_UvlWM2H7ZbfcvVzZRgHrzw&oe=649A89D5',
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
