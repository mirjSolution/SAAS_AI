'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'John Smith',
    avatar: 'J',
    title: 'Software Engineer',
    description:
      'This AI application is incredible! The video, chat, audio, and code features work seamlessly. It has revolutionized the way I work and collaborate. Highly recommended!',
  },
  {
    name: 'Emily Johnson',
    avatar: 'E',
    title: 'Graphic Designer',
    description:
      'Impressed with this AI application! The video, chat, audio, and code functionalities are top-notch. It has transformed how I present ideas and work on projects. Highly recommended!',
  },
  {
    name: 'Michael Lee',
    avatar: 'M',
    title: 'Entrepreneur',
    description:
      'This AI application is a game-changer! The video, chat, audio, and code capabilities have boosted our business productivity. Highly recommended!',
  },
  {
    name: 'Sophia Chen',
    avatar: 'S',
    title: 'Student',
    description:
      'A lifesaver for my studies! The video, chat, audio, and code features have made learning and collaborating a breeze. Highly recommended!',
  },
  //   {
  //     name: 'David Rodriguez',
  //     avatar: 'D',
  //     title: 'Freelancer',
  //     description:
  //       'An essential tool for freelancers! The video, chat, audio, and code functionalities have improved my work efficiency. Highly recommended!',
  //   },
];

export const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className='bg-[#192339] border-none text-white'
          >
            <CardHeader>
              <CardTitle className='flrx items-center gap-x-2 '>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-zinc-400 text-sm'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
