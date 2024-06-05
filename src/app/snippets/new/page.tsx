import { redirect } from 'next/navigation';
import { db } from '@/app/db';
import Form from '@/components/form';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    const snippet = await db.snippet.create({ data: { title, code } });

    console.log(snippet);
    redirect('/');
  }

  return <Form action={createSnippet} title="title" code="code" />;
}
