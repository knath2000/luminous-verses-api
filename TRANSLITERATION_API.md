# 🔤 Transliteration API Documentation

## Overview

The Transliteration API endpoint provides access to English transliterations of Quran verses with multiple format options and flexible querying capabilities.

## Endpoint

```
GET /api/v1/get-transliterations
```

## Features

- ✅ **Single Verse Queries** - Get transliteration for a specific verse
- ✅ **Full Surah Queries** - Get all verses in a surah
- ✅ **Verse Range Queries** - Get a range of verses (max 50 per request)
- ✅ **Multiple Format Options** - Raw, clean, formatted HTML, or all formats
- ✅ **Comprehensive Error Handling** - Detailed validation and error messages
- ✅ **Type-Safe Implementation** - Full TypeScript support
- ✅ **CORS Enabled** - Cross-origin requests supported
- ✅ **Performance Optimized** - Efficient database queries with Prisma

## Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `surah` | number | ✅ Yes | Surah number (1-114) | `1` |
| `ayah` | number | ❌ No | Specific verse number | `1` |
| `start` | number | ❌ No | Starting verse for range queries | `1` |
| `end` | number | ❌ No | Ending verse for range queries | `7` |
| `format` | string | ❌ No | Format type: `raw`, `clean`, `formatted`, `all` | `clean` |

## Query Types

### 1. Single Verse Query
Get transliteration for a specific verse:
```
GET /api/v1/get-transliterations?surah=1&ayah=1
```

### 2. Full Surah Query
Get all verses in a surah:
```
GET /api/v1/get-transliterations?surah=1
```

### 3. Verse Range Query
Get a range of verses:
```
GET /api/v1/get-transliterations?surah=2&start=1&end=5
```

## Format Options

| Format | Description | Example |
|--------|-------------|---------|
| `raw` | Original XML markup preserved | `Bismi All<u>a</U>hi a<b>l</B>rra<u>h</U>m<u>a</U>ni` |
| `clean` | All markup removed | `Bismi Allahi alrrahmani alrraheem` |
| `formatted` | HTML-formatted for web display | `Bismi All<u>a</u>hi a<b>l</b>rra<u>h</u>m<u>a</u>ni` |
| `all` | All three formats (default) | Returns object with all formats |

## Response Examples

### Single Verse Response
```json
{
  "success": true,
  "data": {
    "surahId": 1,
    "ayahId": 1,
    "transliteration": {
      "raw": "Bismi All<u>a</U>hi a<b>l</B>rra<u>h</U>m<u>a</U>ni a<b>l</B>rra<u>h</U>eem<b>i</b>",
      "clean": "Bismi Allahi alrrahmani alrraheem",
      "formatted": "Bismi All<u>a</u>hi a<b>l</b>rra<u>h</u>m<u>a</u>ni a<b>l</b>rra<u>h</u>eem<b>i</b>"
    },
    "source": "tanzil.net"
  }
}
```

### Multiple Verses Response
```json
{
  "success": true,
  "data": {
    "surahId": 1,
    "totalVerses": 7,
    "verses": [
      {
        "ayahId": 1,
        "transliteration": {
          "raw": "Bismi All<u>a</U>hi...",
          "clean": "Bismi Allahi...",
          "formatted": "Bismi All<u>a</u>hi..."
        }
      }
    ]
  },
  "pagination": {
    "start": 1,
    "end": 7,
    "total": 7
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Invalid surah number. Must be between 1 and 114",
  "validRanges": {
    "surah": "1-114"
  }
}
```

## Usage Examples

### JavaScript/TypeScript
```javascript
// Single verse
const response = await fetch('/api/v1/get-transliterations?surah=1&ayah=1&format=clean');
const data = await response.json();
console.log(data.data.transliteration.clean);

// Full surah
const surahResponse = await fetch('/api/v1/get-transliterations?surah=1');
const surahData = await surahResponse.json();
surahData.data.verses.forEach(verse => {
  console.log(`Ayah ${verse.ayahId}: ${verse.transliteration.clean}`);
});

// Verse range
const rangeResponse = await fetch('/api/v1/get-transliterations?surah=2&start=1&end=5&format=formatted');
const rangeData = await rangeResponse.json();
```

### React Hook
```jsx
function useTransliterations(surahId, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams({ surah: surahId });
    if (options.ayah) params.append('ayah', options.ayah);
    if (options.format) params.append('format', options.format);
    
    fetch(`/api/v1/get-transliterations?${params}`)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [surahId, options]);

  return { data, loading, error };
}
```

### cURL
```bash
# Single verse
curl "https://your-api-domain.com/api/v1/get-transliterations?surah=1&ayah=1"

# Full surah with clean format
curl "https://your-api-domain.com/api/v1/get-transliterations?surah=1&format=clean"

# Verse range
curl "https://your-api-domain.com/api/v1/get-transliterations?surah=2&start=1&end=5"
```

## Error Handling

The API provides comprehensive error handling with specific error messages:

| Error Code | Description | Example |
|------------|-------------|---------|
| 400 | Bad Request - Invalid parameters | Invalid surah number |
| 404 | Not Found - No transliterations found | Verse doesn't exist |
| 405 | Method Not Allowed - Only GET supported | POST request sent |
| 500 | Internal Server Error | Database connection failed |

## Rate Limits

- **Development**: No rate limits
- **Production**: Standard rate limits apply
- **Recommendation**: Cache responses for static content

## Data Source

- **Source**: Tanzil.net
- **Language**: English Transliteration
- **Coverage**: Complete Quran (114 surahs, 6,236+ verses)
- **Last Updated**: Based on Tanzil.net data (September 6, 2010)

## Testing

Run the test suite to verify functionality:

```bash
npm run test-transliterations
```

This will test:
- Database connectivity
- Single verse queries
- Multiple verse queries
- Range queries
- Data quality
- Performance metrics

## Performance Notes

- **Single verse queries**: ~10-50ms
- **Full surah queries**: ~50-200ms (depending on surah length)
- **Range queries**: ~20-100ms (depending on range size)
- **Caching**: Responses are cacheable (static content)

## Integration Tips

1. **Caching**: Implement client-side caching for better performance
2. **Error Handling**: Always check the `success` field in responses
3. **Format Selection**: Use `clean` format for search/indexing, `formatted` for display
4. **Batch Requests**: For multiple surahs, make separate requests
5. **Validation**: Validate parameters client-side before API calls

## Support

For issues or questions about the Transliteration API:
- Check the error response for detailed information
- Verify parameter ranges and formats
- Test with the provided test script
- Review the comprehensive documentation above