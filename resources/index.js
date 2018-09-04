import author from './author';
import book from './book';
import review from './review';
import user from './users';

const resources = {
  author,
  book,
  review,
  user
};

export default function serialize(type, model) {
  const resource = resources[type];
  let data;
  
  if (Array.isArray(model)) {
    data = model.map(resource);
  } else {
    data = resource(model); 
  }

  return { data };
}

serialize('book', {});