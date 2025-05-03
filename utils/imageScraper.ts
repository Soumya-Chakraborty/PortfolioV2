import axios from 'axios';
import * as cheerio from 'cheerio';

interface ScrapedImage {
  url: string;
  alt: string;
}

export const scrapeCompanyLogo = async (companyName: string): Promise<ScrapedImage | null> => {
  try {
    // Construct search URL
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(companyName + ' logo')}&tbm=isch`;
    
    // Make request with proper headers to avoid being blocked
    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      }
    });

    const $ = cheerio.load(response.data);
    
    // Find the first image result
    const firstImage = $('img[src^="https://"]').first();
    
    if (firstImage.length) {
      return {
        url: firstImage.attr('src') || '',
        alt: firstImage.attr('alt') || companyName
      };
    }

    return null;
  } catch (error) {
    console.error(`Error scraping logo for ${companyName}:`, error);
    return null;
  }
}; 