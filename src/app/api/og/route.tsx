import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') || 'Jim Deola'
  const category = searchParams.get('category')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          backgroundColor: '#0A0A0B',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 4,
            background: 'linear-gradient(90deg, #6366F1, #22D3EE)',
          }}
        />

        {/* Category badge */}
        {category && (
          <div
            style={{
              fontSize: 20,
              color: '#6366F1',
              marginBottom: 24,
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 40 ? 48 : 64,
            fontWeight: 700,
            color: '#F5F5F7',
            lineHeight: 1.2,
            maxWidth: '90%',
          }}
        >
          {title}
        </div>

        {/* Branding */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            left: 80,
            fontSize: 24,
            color: '#A1A1AA',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#6366F1',
            }}
          />
          jimdeola.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, immutable, max-age=31536000',
      },
    }
  )
}
