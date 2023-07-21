'use client';

import { toast } from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
import * as z from 'zod';
import { Music } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Heading } from '@/components/heading';
import { Empty } from '@/components/empty';

import { formSchema } from './constants';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/Loader';
import { useProModal } from '@/hooks/use-pro-modal';

const AudioPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [audio, setAudio] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setAudio(undefined);

      const response = await axios.post('/api/audio', values);

      setAudio(response.data.audio);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error('Something went wrong!');
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title='Audio Generation'
        description='Turn your prompt into 5 seconds audio.'
        icon={Music}
        iconColor='text-emerald-500'
        bgColor='bg-emerald-500/10'
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='Piano solo'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 lg:col-span-2 w-full'
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
              <Loader />
            </div>
          )}
          {!audio && !isLoading && <Empty label='No audio generated.' />}
          {audio && (
            <audio controls className='w-full mt-8'>
              <source src={audio} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPage;
