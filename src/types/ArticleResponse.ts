export interface ArticleResponse {
  success: boolean;
  cachedAt: string;
  data: Article;
}

export interface Article {
  id: string;
  title: string;
  description: Description;
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: unknown[];
  topics: Topic[];
  tags: string[];
  imageUrl: string;
  body: BodyBlock[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

export interface Description {
  blocks: DescriptionBlock[];
}

export interface DescriptionBlock {
  type: string;
  model: {
    blocks: ParagraphBlock[];
  };
}

export interface ParagraphBlock {
  type: string;
  model: {
    text: string;
    blocks: FragmentBlock[];
  };
}

export interface FragmentBlock {
  type: string;
  model: {
    text: string;
    attributes: unknown[];
  };
}

export interface Topic {
  id: string;
  name: string;
}

export interface BodyBlock {
  type: "image" | "text" | "subheading";
  url: string;
  width: number;
  height: number;
  caption: string;
  altText: string;
  copyrightHolder: string;
  text: string;
}

