# @searchmindai/sdk

SearchMind AI SDK - A powerful JavaScript/TypeScript SDK for integrating AI-powered search capabilities with advanced filtering, result processing, and search optimization features.

## Features

- 🔍 **Smart Search Filters** - Advanced filtering for search results with customizable criteria
- 🧠 **AI-Powered Results** - Intelligent result ranking and relevance scoring
- ⚡ **Fast Performance** - Optimized for speed and efficiency
- 🔧 **Easy Integration** - Simple API with comprehensive TypeScript support
- 📊 **Analytics** - Built-in search analytics and insights
- 🎯 **Customizable** - Flexible configuration options for different use cases

## Installation

```bash
npm install @searchmindai/sdk
```

## Quick Start

```javascript
import { SearchMindSDK } from '@searchmindai/sdk';

// Initialize the SDK
const searchMind = new SearchMindSDK({
  apiKey: 'your-api-key',
  endpoint: 'https://api.searchmind.ai'
});

// Perform a search with filters
const results = await searchMind.search({
  query: 'your search query',
  filters: {
    category: ['technology', 'science'],
    dateRange: {
      from: '2024-01-01',
      to: '2024-12-31'
    },
    relevanceThreshold: 0.8
  },
  limit: 20
});

console.log(results);
```

## API Reference

### SearchMindSDK

#### Constructor

```typescript
new SearchMindSDK(config: SearchMindConfig)
```

**Parameters:**

- `config.apiKey` (string) - Your SearchMind AI API key
- `config.endpoint` (string) - API endpoint URL
- `config.timeout?` (number) - Request timeout in milliseconds (default: 10000)

#### Methods

##### search(options: SearchOptions)

Performs a search with the specified options and filters.

```typescript
interface SearchOptions {
  query: string;
  filters?: SearchFilters;
  limit?: number;
  offset?: number;
  sortBy?: 'relevance' | 'date' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

interface SearchFilters {
  category?: string[];
  tags?: string[];
  dateRange?: {
    from: string;
    to: string;
  };
  relevanceThreshold?: number;
  contentType?: 'text' | 'image' | 'video' | 'document';
  language?: string;
  domain?: string[];
}
```

**Returns:** `Promise<SearchResults>`

```typescript
interface SearchResults {
  results: SearchResult[];
  totalCount: number;
  searchTime: number;
  suggestions?: string[];
  filters: AppliedFilters;
}

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url?: string;
  relevanceScore: number;
  category: string;
  tags: string[];
  publishedDate: string;
  metadata: Record<string, any>;
}
```

##### getFilters()

Retrieve available filter options for the current dataset.

**Returns:** `Promise<AvailableFilters>`

##### getSuggestions(query: string)

Get search suggestions based on a partial query.

**Returns:** `Promise<string[]>`

## Examples

### Basic Search

```javascript
const results = await searchMind.search({
  query: 'machine learning algorithms'
});
```

### Advanced Filtering

```javascript
const results = await searchMind.search({
  query: 'artificial intelligence',
  filters: {
    category: ['research', 'tutorials'],
    dateRange: {
      from: '2023-01-01',
      to: '2024-12-31'
    },
    relevanceThreshold: 0.7,
    contentType: 'text',
    language: 'en'
  },
  limit: 50,
  sortBy: 'relevance'
});
```

### Getting Available Filters

```javascript
const availableFilters = await searchMind.getFilters();
console.log('Available categories:', availableFilters.categories);
console.log('Available tags:', availableFilters.tags);
```

### Search Suggestions

```javascript
const suggestions = await searchMind.getSuggestions('machine learn');
console.log('Suggestions:', suggestions);
// Output: ['machine learning', 'machine learning algorithms', 'machine learning models']
```

## TypeScript Support

This SDK is written in TypeScript and provides full type definitions. All interfaces and types are exported for use in your TypeScript projects.

```typescript
import { SearchMindSDK, SearchOptions, SearchResults } from '@searchmindai/sdk';
```

## Error Handling

```javascript
try {
  const results = await searchMind.search({ query: 'test' });
} catch (error) {
  if (error.code === 'INVALID_API_KEY') {
    console.error('Invalid API key provided');
  } else if (error.code === 'RATE_LIMIT_EXCEEDED') {
    console.error('Rate limit exceeded');
  } else {
    console.error('Search failed:', error.message);
  }
}
```

## Configuration

### Environment Variables

You can also configure the SDK using environment variables:

```bash
SEARCHMIND_API_KEY=your-api-key
SEARCHMIND_ENDPOINT=https://api.searchmind.ai
```

```javascript
// SDK will automatically use environment variables if no config is provided
const searchMind = new SearchMindSDK();
```

## License

MIT
