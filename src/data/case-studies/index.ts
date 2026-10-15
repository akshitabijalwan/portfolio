import type { CaseStudy } from '../../types/case-study';
import { synxStore } from './synx-store';
import { activewearAdAnalysis } from './activewear-ad-analysis';
import { motherSparsh } from './mother-sparsh';
import { socialMediaCommunications } from './social-media-communications';
import { synxStoreDetails } from './synx-store-details';
import { referMe } from './referme';
import { activewearAdSetAnalysis } from './activewear-ad-set';
import { activewearCampaignPerformance } from './activewear-campaign-performance';

/**
 * All case studies, indexed by slug.
 * To add a new case study:
 * 1. Create a new file in this directory
 * 2. Import it here
 * 3. Add it to the caseStudies object below
 */
export const caseStudies: Record<string, CaseStudy> = {
  'synx-store': synxStore,
  'synx-store-details': synxStoreDetails,
  referme: referMe,
  'activewear-ad-analysis': activewearAdAnalysis,
  'activewear-ad-set': activewearAdSetAnalysis,
  'activewear-campaign-performance': activewearCampaignPerformance,
  'mother-sparsh': motherSparsh,
  'social-media-communications': socialMediaCommunications,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
