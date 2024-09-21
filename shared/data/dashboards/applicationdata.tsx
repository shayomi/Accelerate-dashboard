export const InvestorsList = [
  {
    id: '1',
    name: 'John Doe',
    company: 'Tech Innovators',
    dateApplied: '2024-09-01',
    status: 'Pending',
    actions: [
      { date: '2024-09-02', action: 'Reviewed application' },
      { date: '2024-09-05', action: 'Requested interview' },
    ],
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'Creative Labs',
    dateApplied: '2024-08-28',
    status: 'Approved',
    actions: [
      { date: '2024-08-29', action: 'Approved for next round' },
      { date: '2024-09-02', action: 'Sent welcome email' },
    ],
  },
  {
    id: '3',
    name: 'Michael Brown',
    company: 'NextGen Solutions',
    dateApplied: '2024-07-15',
    status: 'Rejected',
    actions: [
      { date: '2024-07-16', action: 'Initial review completed' },
      { date: '2024-07-18', action: 'Rejected due to qualifications' },
    ],
  },
  {
    id: '4',
    name: 'Emily Davis',
    company: 'SmartTech',
    dateApplied: '2024-09-03',
    status: 'Interview Scheduled',
    actions: [
      { date: '2024-09-04', action: 'Scheduled interview' },
      { date: '2024-09-06', action: 'Interview invitation sent' },
    ],
  },
  {
    id: '5',
    name: 'David Miller',
    company: 'AI Innovate',
    dateApplied: '2024-08-22',
    status: 'Pending',
    actions: [
      { date: '2024-08-23', action: 'Reviewed application' },
      { date: '2024-08-25', action: 'Follow-up request sent' },
    ],
  },
];

export const PartnersList = [
  {
    id: '1',
    name: 'Partner A',
    company: 'Company XYZ',
    partnerType: 'Corporate',
    dateApplied: '2024-08-21',
    status: 'Pending',
    companyDetails:
      'Company XYZ provides financial and technical support to startups.',
    actions: [
      { actionType: 'Applied', date: '2024-08-21' },
      { actionType: 'Review Started', date: '2024-09-01' },
    ],
    supportingDocuments: ['business_plan.pdf', 'company_profile.pdf'],
  },
  {
    id: '2',
    name: 'Partner B',
    company: 'Alpha Corp',
    partnerType: 'Sponsor',
    dateApplied: '2024-07-15',
    status: 'Approved',
    companyDetails:
      'Alpha Corp specializes in sponsoring tech startups with innovative solutions.',
    actions: [
      { actionType: 'Applied', date: '2024-07-15' },
      { actionType: 'Approved', date: '2024-07-22' },
    ],
    supportingDocuments: ['sponsorship_agreement.pdf'],
  },
  {
    id: '3',
    name: 'Partner C',
    company: 'Beta Industries',
    partnerType: 'Service Provider',
    dateApplied: '2024-06-30',
    status: 'Rejected',
    companyDetails:
      'Beta Industries offers cloud computing services to small businesses.',
    actions: [
      { actionType: 'Applied', date: '2024-06-30' },
      { actionType: 'Review Started', date: '2024-07-05' },
      {
        actionType: 'Rejected',
        date: '2024-07-10',
        reason: 'Incomplete documentation',
      },
    ],
    supportingDocuments: ['service_agreement.pdf', 'financial_statement.pdf'],
  },
  {
    id: '4',
    name: 'Partner D',
    company: 'Gamma Solutions',
    partnerType: 'Corporate',
    dateApplied: '2024-09-02',
    status: 'Pending',
    companyDetails:
      'Gamma Solutions provides strategic consultancy to emerging markets.',
    actions: [{ actionType: 'Applied', date: '2024-09-02' }],
    supportingDocuments: ['company_brochure.pdf'],
  },
  {
    id: '5',
    name: 'Partner E',
    company: 'Omega Ventures',
    partnerType: 'Sponsor',
    dateApplied: '2024-08-05',
    status: 'Approved',
    companyDetails:
      'Omega Ventures funds high-growth startups in the healthcare sector.',
    actions: [
      { actionType: 'Applied', date: '2024-08-05' },
      { actionType: 'Approved', date: '2024-08-12' },
    ],
    supportingDocuments: ['investment_proposal.pdf', 'company_pitch.pdf'],
  },
];
