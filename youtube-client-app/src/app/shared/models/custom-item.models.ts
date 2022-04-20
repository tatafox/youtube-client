export interface ICustomItem {
  id: string;
  snippet: ICustomSnippet;
}

export interface ICustomSnippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

export class CustomItem implements ICustomItem {
  public id: string;

  public snippet: ICustomSnippet;

  constructor(
    title: string,
    description: string,
    img: string,
    linkVideo: string,
  ) {
    this.snippet = {
      description,
      publishedAt: new Date().toString(),
      thumbnail: img,
      title,
      link: linkVideo,
    };
    this.id = `${Date.now()}`;
  }
}
