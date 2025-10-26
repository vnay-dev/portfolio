'use client';

import React from 'react';

export default function WhatsAppCaseStudy() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="container-padding pb-16 md:pb-20" style={{ paddingTop: 'clamp(11rem, 15vw, 16rem)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[2rem] md:text-[3rem] xl:text-[3.75rem] font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto" style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
            Smart voice notes: Keep the chat flowing
          </h1>

          {/* Hero GIF */}
          <div className="w-full max-w-[952px] mx-auto" style={{ marginBottom: 'clamp(2rem, 3vw, 2.5rem)' }}>
            <img 
              src="https://framerusercontent.com/images/a9bWVGtcSNxqsigw9QiKdhFMQ.gif"
              alt="WhatsApp voice notes feature demonstration"
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: '2.26' }}
            />
          </div>
          
          {/* WhatsApp Release Note Banner */}
          <div className="relative mb-20 md:mb-28">
            {/* Container with pseudo-element border */}
            <div 
              className="relative rounded-2xl flex flex-row items-center"
              style={{
                isolation: 'isolate',
                padding: '18px 24px',
                gap: '24px'
              }}
            >
              {/* Green border via pseudo-element */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: '2px solid rgb(0, 0, 0)',
                  zIndex: 1
                }}
              />
              
              {/* Rocket Image */}
              <div className="flex-shrink-0 relative z-10">
                <img 
                  src="https://framerusercontent.com/images/7WDxEqLJlcBUhbCa5cKTYRTTw0.png"
                  alt="Rocket emoji"
                  className="w-9 h-auto"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex-1 text-black text-sm md:text-base leading-relaxed relative z-10 text-left">
                <strong className="font-semibold">Looks like WhatsApp and I were on the same page!</strong>{' '}
                They just released &ldquo;Transcripts&rdquo;, which is pretty similar to what I visualized in this case study. Check out their blog post{' '}
                <a 
                  href="https://blog.whatsapp.com/introducing-voice-message-transcripts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#3b82f6] underline hover:text-[#60a5fa] transition-colors"
                >
                  here
                </a>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement 1 */}
      <section className="container-padding pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl md:text-2xl font-normal leading-relaxed max-w-4xl mb-12 md:mb-16">
            Ever been stuck in a situation where someone important sends you a bunch of voice notes but you just can&apos;t listen or reply right away?
          </p>

          {/* Phone Mockup */}
          <div className="flex justify-center mb-16 md:mb-20">
            <div className="relative w-full max-w-[360px]">
              <div className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner" style={{ aspectRatio: '9/19.5' }}>
                  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-[#25d366] rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l4-4H8z"/>
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-900">Dad</p>
                        <p className="text-xs text-gray-500">recording audio...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#25d366] rounded-full px-5 py-2 shadow-lg">
                <p className="text-white text-sm font-semibold">9:30</p>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600 max-w-3xl mx-auto">
            Imagine you&apos;re in an important meeting and your parents send a bunch of voice notes. You can&apos;t check them and not knowing what they&apos;re about keeps you distracted.
          </p>
        </div>
      </section>

      {/* Problem Statement 2 */}
      <section className="container-padding py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-[1.2] mb-6 text-balance">
                Scrolling through a long list of voice notes..
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                ...means playing each one separately. If they&apos;re all over the place or mixed with other messages, it&apos;s tough to make sense of them, especially when the conversation&apos;s old.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] rounded-[2.5rem] p-16 flex items-center justify-center min-h-[400px] shadow-xl">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-[#25d366]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <p className="text-gray-900 text-lg font-semibold">Scrolling animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="container-padding py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:mb-20">
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.2] mb-8 text-balance">
              Validating my hypothesis
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl">
              To get a clearer picture of the problem, I talked to my colleagues and friends; some who loved using the feature, some who barely touched it and others who only used it when they had to.
            </p>
          </div>

          {/* User Interview Card with Carousel */}
          <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] p-10 md:p-14 shadow-xl">
            <h3 className="text-[1.75rem] md:text-[2.25rem] font-bold mb-12 text-center text-balance">
              User interviews questions and objectives
            </h3>
            
            {/* Carousel Indicator */}
            <div className="flex justify-center gap-2.5 mb-10">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all ${
                    i === 4 ? 'w-8 bg-[#25d366]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Current Question Display */}
            <div className="max-w-2xl mx-auto space-y-8">
              <div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-900">
                  How do you feel when someone continues to send you only audio messages in a conversation?
                </p>
                <div className="bg-[#dcf8c6]/30 rounded-2xl p-6 border-l-4 border-[#25d366]">
                  <p className="text-sm font-bold text-[#25d366] mb-2 uppercase tracking-wide">Objective</p>
                  <p className="text-gray-700 leading-relaxed">
                    To understand user tolerance levels and when the feature becomes frustrating
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-12">
              <button className="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button className="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="container-padding py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.2] mb-16 md:mb-20">
            Insights from user interviews
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "👥",
                title: "Personal comfort",
                description: "People feel most comfortable sending voice notes to friends and family they&apos;re close to."
              },
              {
                icon: "⏩",
                title: "Fast-forward usage",
                description: "Users who are in a hurry often speed up audio, usually to 1.5x speed, to save time."
              },
              {
                icon: "🔍",
                title: "Difficulty locating messages",
                description: "Users often struggle to find specific voice notes in a busy chat history. Many mentioned how tough it is to grasp the context and how time-consuming the whole process can be."
              },
              {
                icon: "🔒",
                title: "Privacy concerns",
                description: "Users are often hesitant to listen to audio messages in public places due to privacy concerns, preferring headphones or private settings."
              },
              {
                icon: "💬",
                title: "Expressive communication",
                description: "People use voice notes to express emotions beyond emojis, avoid typing, mix languages or communicate on the go."
              }
            ].map((insight, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] p-8 border-2 border-gray-200 hover:border-[#25d366] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-5">{insight.icon}</div>
                <h3 className="text-xl font-bold mb-4">{insight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defining Problem Section */}
      <section className="container-padding py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.2] mb-8">
            Defining the problem
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-16 md:mb-20 max-w-3xl">
            After analyzing the research and understanding the key insights, I was able to validate my initial hypothesis and define the problem statement(s) as user jobs:
          </p>

          {/* User Jobs */}
          <div className="space-y-12 md:space-y-16">
            {/* Job 1 */}
            <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-center">
              <div className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] rounded-[2.5rem] p-8 shadow-xl" style={{ aspectRatio: '9/16' }}>
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl">💼</span>
                    </div>
                    <p className="text-gray-900 text-sm font-semibold">Meeting scenario</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-lg">
                <p className="text-lg md:text-xl leading-relaxed italic text-gray-700">
                  &ldquo;When I receive a long audio message, I want to read a gist of it so that I can quickly understand the context.&rdquo;
                </p>
              </div>
            </div>

            {/* Job 2 */}
            <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-center">
              <div className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] rounded-[2.5rem] p-8 shadow-xl" style={{ aspectRatio: '9/16' }}>
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl">🔍</span>
                    </div>
                    <p className="text-gray-900 text-sm font-semibold">Search scenario</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-lg">
                <p className="text-lg md:text-xl leading-relaxed italic text-gray-700">
                  &ldquo;I want to search for keywords within voice notes to quickly find what I need in a chat history.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Constraints Section */}
      <section className="container-padding py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:mb-20">
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.2] mb-8 text-balance">
              Tech constraints that may affect the UX
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              The summaries can be generated either locally on your device or in the cloud, depending on how it&apos;s set up.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Local Processing */}
            <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                Processing locally on device
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-green-600 text-lg font-bold mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Advantages
                  </h4>
                  <div className="space-y-4">
                    {[
                      { title: "Privacy", desc: "Users might feel more secure knowing their data isn&apos;t being sent to external servers." },
                      { title: "Immediate Feedback", desc: "Faster response times since there&apos;s no need to wait for server processing." },
                      { title: "Offline Capability", desc: "Users can access the feature even without an active internet connection." }
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-red-600 text-lg font-bold mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                    </svg>
                    Disadvantages
                  </h4>
                  <div className="space-y-4">
                    {[
                      { title: "Resource Intensive", desc: "Requires significant computational power and storage, which might not be available on all devices." },
                      { title: "Updates and Maintenance", desc: "Updating algorithms or adding new languages might be more challenging, requiring app updates." }
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Processing */}
            <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                Processing on the server side
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-green-600 text-lg font-bold mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Advantages
                  </h4>
                  <div className="space-y-4">
                    {[
                      { title: "Performance", desc: "Offloading processing to powerful servers can handle complex tasks more efficiently." },
                      { title: "Scalability", desc: "Easier to scale and update translation and summarization models without app updates." },
                      { title: "Reusability", desc: "The system can be built as a plugin that can be used across many products within the organization." },
                      { title: "Consistency", desc: "Ensures a consistent experience across devices by removing hardware processing limitations." }
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-red-600 text-lg font-bold mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                    </svg>
                    Disadvantages
                  </h4>
                  <div className="space-y-4">
                    {[
                      { title: "Privacy Concerns", desc: "Users might be concerned about their voice notes being sent to and processed on external servers." },
                      { title: "Latency", desc: "Cloud processing may cause delays, especially with slow or unstable network connections." },
                      { title: "Data Usage", desc: "Users need a stable internet connection, and it could use up data bandwidth." }
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hybrid Approach */}
          <div className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] rounded-[2.5rem] p-10 md:p-12 shadow-xl">
            <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-6">
              After analyzing these two approaches, I decided to combine them into a <strong>hybrid approach:</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Performing the initial processing locally to minimize data transfer, and more complex tasks or updates are handled on the server. For instance:
            </p>
            <ol className="space-y-4 text-gray-900">
              <li className="flex gap-4">
                <span className="font-bold text-xl">1.</span>
                <div>
                  <strong>Initial transcription locally:</strong> Convert voice to text on the device.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-xl">2.</span>
                <div>
                  <strong>Translation and summarization on server:</strong> Send the transcribed text to the server for translation and summarization.
                </div>
              </li>
            </ol>
            <p className="text-gray-700 mt-6 leading-relaxed">
              This approach balances privacy with performance and allows for flexibility in managing updates.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="container-padding py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.2] mb-16">
            Challenges
          </h2>
          <ol className="space-y-8">
            <li className="text-lg leading-relaxed text-gray-600 flex gap-4">
              <strong className="text-gray-900 text-xl">1.</strong>
              <span>Making sure the feature works well for users who speak multiple languages or dialects, or who mix languages (even in informal or imperfect ways) in their audio recordings.</span>
            </li>
            <li className="text-lg leading-relaxed text-gray-600 flex gap-4">
              <strong className="text-gray-900 text-xl">2.</strong>
              <span>Preserving the emotional tone and urgency in voice messages during transcription, especially for messages that convey excitement or urgency to make sure the intended mood and context come through clearly.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Solution Section - User Job 1 */}
      <section className="container-padding py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-6">
              User job 1 :
            </h2>
            <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed">
              &ldquo;When I receive a long audio message, I want to read a gist of it so that I can quickly understand the context&rdquo;
            </p>
          </div>

          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            I figured that WhatsApp could use an AI model, which I&apos;m calling Meta AI, to summarize voice notes. I knew the first version wouldn&apos;t be perfect, given how AI is still evolving.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 mb-20">
            So, here&apos;s my final solution, designed to tackle the challenges of understanding voice notes in context.
          </p>

          {/* Feature Showcase */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-[2.25rem] md:text-[3rem] font-bold mb-4">
                Read quick summaries
              </h3>
              <p className="text-[1.75rem] md:text-[2.25rem] text-gray-600">
                of your voice notes
              </p>
            </div>
            
            {/* Video Placeholder */}
            <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Video: Summary for voice notes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Iterations */}
          <div className="space-y-20">
            <p className="text-lg text-gray-600 leading-relaxed">
              Now, let me take you through the different iterations I went through before landing on this final version.
            </p>

            {/* Iteration 1 */}
            <div>
              <h4 className="text-2xl font-bold mb-10">
                Iteration 1 - Using a bottom sheet
              </h4>
              <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
                <div className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] rounded-[2.5rem] p-8 shadow-xl" style={{ aspectRatio: '9/16' }}>
                  <div className="h-full flex flex-col justify-between">
                    <div className="text-center pt-10">
                      <div className="w-14 h-14 mx-auto bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-3xl">📱</span>
                      </div>
                    </div>
                    <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-lg">
                      <p className="text-gray-900 text-sm font-semibold text-center">Bottom sheet UI</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-4 text-[#25d366]">
                    Bottom sheet<br />to show summary of voice notes
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    This iteration disrupted the chat flow. Displaying the AI summary in a bottom sheet would interrupt the ongoing conversation, leading to a poor user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Iteration 1.5 */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-[2rem] p-8 md:p-10">
              <p className="text-gray-900 leading-relaxed mb-4">
                <strong className="text-lg">Iteration 1.5 - transcript or summary?</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                This iteration refines the copy. To save time, I opted for summarizing audio instead of transcribing it, as full transcriptions are not practical for long messages.
              </p>
            </div>

            {/* Iteration 2 */}
            <div>
              <h4 className="text-2xl font-bold mb-10">
                Iteration 2 - Expanding the voice notes UI element
              </h4>
              <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
                <div className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] rounded-[2.5rem] p-8 shadow-xl" style={{ aspectRatio: '9/16' }}>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-14 h-14 mx-auto bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-3xl">✨</span>
                      </div>
                      <p className="text-gray-900 text-xs font-medium">Expanded UI</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-4 text-[#25d366]">
                    Vertical expansion of<br />the voice note UI element
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    The problem with this iteration was that users wouldn&apos;t know what the AI summary button (the sparkle button) does. There&apos;s no clear indication of what to expect when they tap it.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Issues */}
            <div className="bg-red-50 border-2 border-red-200 rounded-[2rem] p-8 md:p-10">
              <p className="text-lg font-semibold text-gray-900 mb-6">
                Some common issues with the previous iterations (1 and 2):
              </p>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">
                    1. The AI summary button which the user taps on to see the summary:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Contextual placement:</strong> The AI summary button was misplaced outside the voice note UI, which felt counterintuitive since the summary remains within the chat context.</li>
                    <li>• <strong>Confusion with forward button:</strong> The AI summary button&apos;s position, typically used for forwarding in text messages, could confuse users.</li>
                  </ul>
                </div>
                <p>
                  <strong className="text-gray-900">2. Lack of loading feedback:</strong> Users aren&apos;t told how long it takes to generate the summary, which could lead to uncertainty and frustration.
                </p>
                <p>
                  <strong className="text-gray-900">3. Uncertainty about accuracy:</strong> The evolving AI technology might produce imperfect results. Users may assume complete accuracy due to the lack of information on its reliability and limitations.
                </p>
                <p>
                  <strong className="text-gray-900">4. Unclear purpose:</strong> The lack of information about the generated text&apos;s nature can confuse users, as they may be unsure if it&apos;s a translation, transcript, or summary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Job 2 - Search */}
      <section className="container-padding py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-6">
              User job 2 :
            </h2>
            <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed">
              &ldquo;I want to search for keywords within voice notes to quickly find what I need in a chat history&rdquo;
            </p>
          </div>

          <p className="text-lg leading-relaxed text-gray-600 mb-20">
            Taking all these issues into account, I developed the third iteration, which ultimately became the final solution showcased in the first prototype.
          </p>

          {/* Redesigning Search Flow */}
          <div className="mb-20">
            <h3 className="text-[2rem] font-bold mb-12 text-center">
              Redesigning the search flow
            </h3>
            
            {/* Video Placeholder */}
            <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Video: Search in voice notes</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 text-center leading-relaxed">
              This iteration automatically shows you the summary and highlights the part that matches your search. So, no more scrolling through everything!
            </p>
          </div>

          {/* Initial Iteration Issues */}
          <div>
            <h3 className="text-2xl font-bold mb-10">
              Initial iteration of the search flow
            </h3>
            
            <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-lg">
              <p className="text-gray-700 mb-8 font-medium">Now, let&apos;s break down the issues with this user flow.</p>
              <ul className="space-y-6 text-gray-700">
                <li>
                  • <strong className="text-gray-900">Search results prioritization:</strong> On the search results screen, the audio summary takes priority over the actual audio files, which means the voice notes themselves aren&apos;t showing up in the results.
                </li>
                <li>
                  • <strong className="text-gray-900">Visual clarity:</strong> It&apos;s visually difficult for users to tell that these are audio summaries linked to voice notes from different chats.
                </li>
              </ul>
              <p className="text-gray-700 mt-8 font-medium">
                The final solution was created by considering all these loopholes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thanks Section */}
      <section className="container-padding py-24 md:py-32 bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[2.75rem] md:text-[4rem] font-bold mb-10">
            Thanks for sticking around!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            Thank you for taking the time to check out my case study! If you found it interesting, feel free to check out my article where I dive deeper into everything.
          </p>
          <a
            href="https://medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25d366] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#128c7e] transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform"
          >
            Read the full case study on Medium
          </a>
        </div>
      </section>
    </main>
  );
}
