import { notFound } from 'next/navigation';
import { db } from '@/app/db';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage({ params }: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) }
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
