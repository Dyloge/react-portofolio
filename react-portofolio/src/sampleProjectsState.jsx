//Import Images
import FirstGif from '../image/FirstGif.gif';
import SecondGif from '../image/SecondGif.gif';
import ThirdGif from '../image/ThirdGif.gif';
import ForthGif from '../image/ForthGif.gif';
import FirstGif2 from '../image/FirstGif2.gif';
import SecondGif2 from '../image/SecondGif2.gif';
import ThirdGif2 from '../image/ThirdGif2.gif';
import ForthGif2 from '../image/ForthGif2.gif';

export const sampleProjectsState = () => {
  return [
    {
      title: 'Project 1',
      mainImg: FirstGif,
      secondaryImg: FirstGif2,
      url: '/sample/1',
      technologies: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Project 2',
      mainImg: SecondGif,
      url: '/sample/2',
      secondaryImg: SecondGif2,
      technologies: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Project 3',
      mainImg: ThirdGif,
      url: '/sample/3',
      secondaryImg: ThirdGif2,
      technologies: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Project 4',
      mainImg: ForthGif,
      url: '/sample/4',
      secondaryImg: ForthGif2,
      technologies: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};