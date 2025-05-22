import React from 'react'
import Container from './ui/container'
import { Button } from './ui/button'
import Link from 'next/link'
import { generalMessages } from '@/lib/messages'

const CollectionNotFound = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">{generalMessages.emptyCollectionTitle}</h1>
      <p className="text-muted-foreground mb-8">
        {generalMessages.emptyCollectionDescription}
      </p>
      <Button asChild>
        <Link href="/collections">Back to Collections</Link>
      </Button>
    </Container>
  );
}

export default CollectionNotFound