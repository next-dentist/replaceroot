import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const CaseStudiesPage = () => {
	const caseStudies = [
		{
			name: 'Dr. Arjun Mehta',
			location: 'Mumbai, India',
			specialty: 'Full Mouth Rehabilitation',
			beforeLeads: 18,
			afterLeads: 85,
			growthPercent: 372,
			durationMonths: 6,
			quote:
				'Replace Roots helped us scale implant inquiries rapidly while keeping lead quality consistently high.',
			stats: ['+67 Qualified Leads/mo', '4.7/5 Patient Rating', '12% Conversion Rate'],
		},
		{
			name: 'Dr. Neha Kapoor',
			location: 'Delhi, India',
			specialty: 'All-on-4 / All-on-6',
			beforeLeads: 25,
			afterLeads: 110,
			growthPercent: 340,
			durationMonths: 5,
			quote:
				"The team’s verification process ensured every inquiry was relevant. Our calendar stays full.",
			stats: ['+85 Qualified Leads/mo', '5+ Cities Covered', 'Dedicated Manager'],
		},
		{
			name: 'Dr. Rohan Iyer',
			location: 'Bengaluru, India',
			specialty: 'Guided Digital Implant Surgery',
			beforeLeads: 12,
			afterLeads: 60,
			growthPercent: 400,
			durationMonths: 4,
			quote:
				'Replace Roots brought predictability to our implant pipeline with trackable, high-intent patients.',
			stats: ['+48 Qualified Leads/mo', 'API Integration', 'Advanced Analytics'],
		},
	];

	const testimonials = [
		{
			name: 'Dr. Kavita Shah',
			location: 'Pune, India',
			quote:
				'Consistent quality and measurable ROI. Our implant cases have doubled within a quarter.',
			rating: 5,
		},
		{
			name: 'Dr. Imtiaz Ali',
			location: 'Hyderabad, India',
			quote:
				'Excellent lead screening. We spend time only on cases that match our criteria.',
			rating: 5,
		},
		{
			name: 'Dr. Sneha Nair',
			location: 'Kochi, India',
			quote:
				'Transparent reporting and supportive team. We scaled multi-location without losing quality.',
			rating: 5,
		},
	];

	const detailedStudies = [
		{
			dentist: 'Dr. Arjun Mehta',
			clinic: 'SmileWorks Implant Centre, Mumbai',
			objective: 'Scale full mouth implant cases while maintaining case quality and calendar utilization.',
			challenges: [
				'Inconsistent monthly inquiry volume',
				'High time spent on low-intent inquiries',
				'Limited tracking for marketing ROI'
			],
			approach: [
				'Implemented Replace Roots verification + lead scoring',
				'Enabled advanced filtering (budget, urgency, case type)',
				'Weekly performance reviews with dedicated manager'
			],
			results: {
				beforeLeads: 18,
				afterLeads: 85,
				conversionRate: '12%',
				avgCaseValue: '₹1.8L+',
				timeToAppointment: '48 hours',
			},
		},
		{
			dentist: 'Dr. Neha Kapoor',
			clinic: 'Prime Dental Implants, Delhi',
			objective: 'Expand All-on-4/All-on-6 segment across multiple city clusters.',
			challenges: [
				'Expansion into new micro-markets',
				'Need for predictable case pipeline',
				'Complex pre-qualification for premium cases'
			],
			approach: [
				'Custom lead criteria for All-on-X candidates',
				'Multi-city routing with capacity-based allocation',
				'Creative assets + landing optimization via RR team'
			],
			results: {
				beforeLeads: 25,
				afterLeads: 110,
				conversionRate: '11.5%',
				avgCaseValue: '₹2.4L+',
				timeToAppointment: '36 hours',
			},
		},
		{
			dentist: 'Dr. Rohan Iyer',
			clinic: 'Digitally Guided Implants, Bengaluru',
			objective: 'Grow guided surgery cases and reduce no-shows.',
			challenges: [
				'Low awareness for guided surgery benefits',
				'Higher information needs pre-consultation',
				'Appointment adherence issues'
			],
			approach: [
				'Education-first ad sequences and nurturing',
				'Pre-visit virtual screening + document checklist',
				'Automated confirmations and reminders'
			],
			results: {
				beforeLeads: 12,
				afterLeads: 60,
				conversionRate: '13.2%',
				avgCaseValue: '₹1.6L+',
				timeToAppointment: '24 hours',
			},
		},
	];

	const averageGrowth = Math.round(
		caseStudies.reduce((sum, c) => sum + c.growthPercent, 0) / caseStudies.length
	);
	const totalBefore = caseStudies.reduce((sum, c) => sum + c.beforeLeads, 0);
	const totalAfter = caseStudies.reduce((sum, c) => sum + c.afterLeads, 0);

	return (
		<Layout
			title="Case Studies - Dental Implant Success Stories | ReplaceRoot"
			description="Discover real success stories from dental implant specialists who grew their practices with ReplaceRoot. See data-backed results and verified patient lead growth."
			keywords={['dental implant case studies', 'implant practice growth', 'success stories', 'patient leads', 'dental practice growth', 'implant specialists', 'ReplaceRoot']}
			canonical="/case-studies"
			og={{
				title: "Case Studies - Dental Implant Success Stories",
				description: "Discover real success stories from dental implant specialists who grew their practices with ReplaceRoot. See data-backed results and verified patient lead growth.",
				type: 'website',
				image: "https://replaceroot.com/images/case-studies-hero.jpg",
				site_name: "ReplaceRoot"
			}}
			twitter={{ card: 'summary_large_image' }}
			jsonLd={{
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				name: 'Case Studies - Dental Implant Success Stories',
				description: 'Discover real success stories from dental implant specialists who grew their practices with ReplaceRoot. See data-backed results and verified patient lead growth.',
				url: 'https://replaceroot.com/case-studies',
				mainEntity: {
					'@type': 'Service',
					name: 'Dental Implant Lead Generation Case Studies',
					provider: {
						'@type': 'Organization',
						name: 'ReplaceRoot'
					},
					description: 'Real success stories from dental implant specialists'
				}
			}}
		>
		<div className="bg-gray-50 min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="relative pt-40 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
				<div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
							<i className="fa-solid fa-trophy mr-2"></i>
							Case Studies / Success Stories
						</div>
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
							Real Dentists Who Grew With
							<span className="ml-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Replace Roots</span>
						</h1>
						<p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
							Data-backed growth stories from implant specialists who scaled their practices with high-intent, verified patient leads.
						</p>
					</div>
				</div>
			</section>

			{/* Growth Snapshot */}
			<section className="py-8 sm:py-12 bg-white">
				<div className="container mx-auto px-4">
					<div className="flex flex-row gap-2 sm:gap-4 md:gap-6 text-center">
						<div className="flex-1 bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-sm">
							<div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800">{averageGrowth}%</div>
							<div className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">Average Lead Growth</div>
						</div>
						<div className="flex-1 bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-sm">
							<div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800">{totalBefore} → {totalAfter}</div>
							<div className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">Monthly Leads (Before vs After)</div>
						</div>
						<div className="flex-1 bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-sm">
							<div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800">100%</div>
							<div className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">Verified, High-Intent Leads</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section id="studies" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
							Featured <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Success Stories</span>
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
							Before-and-after results from real practices. Transparent metrics, consistent outcomes.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
						{caseStudies.map((c, idx) => {
							const total = Math.max(c.beforeLeads, c.afterLeads);
							const beforePct = Math.round((c.beforeLeads / total) * 100);
							const afterPct = Math.round((c.afterLeads / total) * 100);
							return (
								<div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100">
									<div className="flex items-start justify-between mb-3 sm:mb-4">
										<div>
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{c.name}</h3>
											<div className="text-cyan-600 font-medium text-sm sm:text-base">{c.specialty}</div>
											<div className="text-gray-500 text-xs sm:text-sm">{c.location}</div>
										</div>
										<div className="text-right">
											<div className="text-2xl sm:text-3xl font-extrabold text-gray-800">{c.growthPercent}%</div>
											<div className="text-gray-500 text-xs sm:text-sm">Growth in {c.durationMonths} mo</div>
										</div>
									</div>

									<p className="text-gray-600 italic mb-6">“{c.quote}”</p>

									{/* Before/After Bar */}
									<div className="space-y-2 mb-4">
										<div className="flex justify-between text-sm text-gray-600">
											<span>Before: {c.beforeLeads}/mo</span>
											<span>After: {c.afterLeads}/mo</span>
										</div>
										<div className="h-3 bg-gray-100 rounded-full overflow-hidden">
											<div className="h-full bg-gray-300" style={{ width: `${beforePct}%` }}></div>
										</div>
										<div className="h-3 bg-gray-100 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: `${afterPct}%` }}></div>
										</div>
									</div>

									{/* Stats Chips */}
									<div className="flex flex-wrap gap-2">
										{c.stats.map((s, i) => (
											<span key={i} className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 text-sm font-medium">
												{s}
											</span>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Detailed Case Studies */}
			<section className="py-12 sm:py-16 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
							In-Depth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Case Studies</span>
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
							Detailed breakdowns of objectives, challenges, approach, and results
						</p>
					</div>

					<div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
						{detailedStudies.map((cs, idx) => (
							<div key={idx} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
								{/* Header */}
								<div className="border-b border-gray-100 p-4 sm:p-6 md:p-8">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
										<div>
											<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{cs.dentist}</h3>
											<p className="text-cyan-600 font-medium text-sm sm:text-base">{cs.clinic}</p>
										</div>
										<div className="flex gap-4 sm:gap-6 md:gap-8">
											<div className="text-center">
												<div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{cs.results.beforeLeads}</div>
												<div className="text-gray-500 text-xs sm:text-sm">Before</div>
											</div>
											<div className="text-center">
												<div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-600">{cs.results.afterLeads}</div>
												<div className="text-gray-500 text-xs sm:text-sm">After</div>
											</div>
											<div className="text-center">
												<div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{cs.results.conversionRate}</div>
												<div className="text-gray-500 text-xs sm:text-sm">Conversion</div>
											</div>
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="p-4 sm:p-6 md:p-8">
									<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
										<div>
											<h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
												<i className="fa-solid fa-bullseye text-cyan-500 mr-2"></i>
												Objective
											</h4>
											<p className="text-gray-600 leading-relaxed text-sm sm:text-base">{cs.objective}</p>
										</div>
										<div>
											<h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
												<i className="fa-solid fa-exclamation-triangle text-gray-500 mr-2"></i>
												Challenges
											</h4>
											<ul className="text-gray-600 space-y-1 sm:space-y-2">
												{cs.challenges.map((c, i) => (
													<li key={i} className="flex items-start text-sm sm:text-base">
														<span className="text-cyan-500 mr-2">•</span>
														<span>{c}</span>
													</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
												<i className="fa-solid fa-lightbulb text-teal-500 mr-2"></i>
												Approach
											</h4>
											<ul className="text-gray-600 space-y-1 sm:space-y-2">
												{cs.approach.map((a, i) => (
													<li key={i} className="flex items-start text-sm sm:text-base">
														<span className="text-teal-500 mr-2">•</span>
														<span>{a}</span>
													</li>
												))}
											</ul>
										</div>
									</div>


								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-12 sm:py-16 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
							What Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dentists Say</span>
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
							Real feedback from implant specialists growing with Replace Roots
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
						{testimonials.map((t, idx) => (
							<div key={idx} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
								<div className="flex items-center mb-3 sm:mb-4">
									{[...Array(t.rating)].map((_, i) => (
										<i key={i} className="fa-solid fa-star text-yellow-400"></i>
									))}
								</div>
								<p className="text-gray-600 mb-6 italic">“{t.quote}”</p>
								<div>
									<div className="font-bold text-gray-800 text-sm sm:text-base">{t.name}</div>
									<div className="text-gray-500 text-xs sm:text-sm">{t.location}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	</Layout>
);
};

export default CaseStudiesPage;
