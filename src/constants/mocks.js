import { LoremIpsum } from 'lorem-ipsum';
import getRandomImageUrl from '../helpers/getRandomImageUrl';
import getNumberFromRange from '../helpers/getNumberFromRange';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const DIVIDER = "<div style='height: 30px'></div>";

const getLoremWithSpaces = sentences => {
  return lorem.generateParagraphs(sentences).replaceAll('\n', DIVIDER);
};

const MOCK_CONTENT = `
  ${getLoremWithSpaces(3)}
  <img src='${getRandomImageUrl()}' />
  ${getLoremWithSpaces(5)}
  <img src='${getRandomImageUrl()}' />
  ${getLoremWithSpaces(2)}
`;

export const MOCK_ARTICLE = {
  title: lorem.generateWords(getNumberFromRange(4, 12)),
  content: MOCK_CONTENT,
};
