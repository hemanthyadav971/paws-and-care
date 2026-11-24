import React, { useState } from 'react';
import { tipsData } from '../data/petData';
import { Search, BookOpen, Clock, Tag, X, ArrowRight } from 'lucide-react';

export default function PetCareTips() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingArticle, setReadingArticle] = useState(null);

  const categories = [
    'All',
    'Feeding & Nutrition',
    'Vaccination & Health',
    'Grooming & Hygiene',
    'Exercise & Activity',
    'Dental Care',
    'Seasonal Care',
    'Puppy & Kitten'
  ];

  const filteredTips = tipsData.filter((tip) => {
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesSearch =
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-pastelGreen-700 bg-pastelGreen-100 px-3.5 py-1 rounded-full">
            Knowledge Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-display">
            Pet Care Tips & Wellness Guides
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Expert veterinary advice, nutritional best practices, and training insights to support your companion through every age and season.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, keyword, health condition, or life stage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-warmCream-50 border border-warmCream-200 rounded-2xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastelGreen-500 focus:bg-white transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-pastelGreen-600 text-white shadow-md'
                    : 'bg-warmCream-100 text-gray-700 hover:bg-pastelGreen-50 hover:text-pastelGreen-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Articles Grid */}
        {filteredTips.length === 0 ? (
          <div className="text-center py-16 bg-warmCream-50 rounded-3xl border border-warmCream-200">
            <span className="text-4xl">🔍</span>
            <h4 className="text-lg font-bold text-gray-800 mt-2 font-display">No articles found</h4>
            <p className="text-sm text-gray-500 mt-1">Try another search term or switch categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-pastelGreen-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map((tip) => (
              <article
                key={tip.id}
                className="bg-warmCream-50/60 rounded-3xl overflow-hidden border border-warmCream-200 shadow-sm hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-pastelGreen-800 shadow-sm flex items-center gap-1">
                      <Tag className="w-3 h-3 text-pastelGreen-600" />
                      <span>{tip.category}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{tip.readTime}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-pastelGreen-700 transition-colors line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                      {tip.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setReadingArticle(tip)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-pastelGreen-300 text-pastelGreen-700 hover:bg-pastelGreen-600 hover:text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3 h-3 ml-auto" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Reading Article Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-warmCream-200 relative animate-scaleUp">
            
            <button
              onClick={() => setReadingArticle(null)}
              className="sticky top-4 float-right mr-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={readingArticle.image}
              alt={readingArticle.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3 text-xs font-bold text-pastelGreen-700 mb-2">
                <span className="bg-pastelGreen-100 px-3 py-1 rounded-full">{readingArticle.category}</span>
                <span>•</span>
                <span className="text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {readingArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-display mt-2">
                {readingArticle.title}
              </h2>

              <p className="text-sm font-semibold text-gray-500 mt-2 border-b border-warmCream-200 pb-4">
                Written by Paws & Care Veterinary Medical Editorial Board
              </p>

              <div className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{readingArticle.content}</p>
                <div className="bg-warmCream-50 border-l-4 border-pastelGreen-500 p-4 rounded-r-xl my-6">
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">
                    💡 Pro Tip from Dr. Jenkins: Always keep your veterinarian informed of changes in your pet’s hydration, energy, or stool consistency before initiating supplements.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-warmCream-200 flex justify-end">
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-pastelGreen-600 hover:bg-pastelGreen-700 text-white font-bold text-xs"
                >
                  Done Reading
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
