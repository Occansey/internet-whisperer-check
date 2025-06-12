
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
};

export const findBySlug = (items: any[], slug: string, titleField: string = 'title') => {
  return items.find(item => generateSlug(item[titleField]) === slug);
};

export const findEventBySlug = (events: any[], slug: string) => {
  return events.find(event => {
    const eventSlug = generateSlug(event.title || event.title?.rendered || '');
    return eventSlug === slug;
  });
};

export const findProjectBySlug = (projects: any[], slug: string) => {
  return projects.find(project => {
    const projectSlug = generateSlug(project.title || project.title?.rendered || '');
    return projectSlug === slug;
  });
};
