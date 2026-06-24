import {useLocale} from 'next-intl';
import {
  education,
  educationEN,
  experience,
  experienceEN,
  languages,
  languagesEN,
  personalInfo,
  skills,
  skillsEN,
  stats,
  statsEN,
} from './data';

export function useData() {
  const locale = useLocale();
  const isEN = locale === 'en';

  return {
    personalInfo: {
      ...personalInfo,
      location: isEN ? personalInfo.locationEN : personalInfo.location,
      title: isEN ? personalInfo.titleEN : personalInfo.title,
    },
    skills: isEN ? skillsEN : skills,
    experience: isEN ? experienceEN : experience,
    education: isEN ? educationEN : education,
    languages: isEN ? languagesEN : languages,
    stats: isEN ? statsEN : stats,
  };
}
