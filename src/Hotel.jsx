"use client"






import { useState, useEffect, useRef } from "react"
import Navbar from "./navbar"

// GuestSelector Component (Included in the same file)
const GuestSelector = ({ isHotel, initialCount, onChange, onClose }) => {
  const [guestCounts, setGuestCounts] = useState({
    adults: initialCount.adults || 1,
    children: initialCount.children || 0,
    infants: initialCount.infants || 0,
    pets: initialCount.pets || 0,
  })

  useEffect(() => {
    // If initialCount is an object, use it directly
    if (typeof initialCount === "object") {
      setGuestCounts(initialCount)
    }
  }, [initialCount])

  const handleIncrement = (type) => {
    const maxLimits = {
      adults: 16,
      children: 8,
      infants: 5,
      pets: 5,
    }

    if (guestCounts[type] < maxLimits[type]) {
      const newCounts = {
        ...guestCounts,
        [type]: guestCounts[type] + 1,
      }
      setGuestCounts(newCounts)
      onChange(newCounts)
    }
  }

  const handleDecrement = (type) => {
    // Ensure at least 1 adult
    if (type === "adults" && guestCounts.adults <= 1) return

    if (guestCounts[type] > 0) {
      const newCounts = {
        ...guestCounts,
        [type]: guestCounts[type] - 1,
      }
      setGuestCounts(newCounts)
      onChange(newCounts)
    }
  }

  return (
    




    <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl z-50 w-80 p-4">
      {/* Adults */}
      <div className="flex items-center justify-between py-3 border-b">
        <div>
          <h3 className="text-base font-medium">Adults</h3>
          <p className="text-sm text-gray-500">Ages 13 or above</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDecrement("adults")}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guestCounts.adults <= 1
                ? "border-gray-200 text-gray-300"
                : "border-gray-400 text-gray-600 hover:border-gray-800"
            }`}
            disabled={guestCounts.adults <= 1}
          >
            <span className="text-xl">-</span>
          </button>
          <span className="w-5 text-center">{guestCounts.adults}</span>
          <button
            onClick={() => handleIncrement("adults")}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 flex items-center justify-center hover:border-gray-800"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="flex items-center justify-between py-3 border-b">
        <div>
          <h3 className="text-base font-medium">Children</h3>
          <p className="text-sm text-gray-500">Ages 2-12</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDecrement("children")}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guestCounts.children <= 0
                ? "border-gray-200 text-gray-300"
                : "border-gray-400 text-gray-600 hover:border-gray-800"
            }`}
            disabled={guestCounts.children <= 0}
          >
            <span className="text-xl">-</span>
          </button>
          <span className="w-5 text-center">{guestCounts.children}</span>
          <button
            onClick={() => handleIncrement("children")}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 flex items-center justify-center hover:border-gray-800"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      {/* Infants */}
      <div className="flex items-center justify-between py-3 border-b">
        <div>
          <h3 className="text-base font-medium">Infants</h3>
          <p className="text-sm text-gray-500">Under 2</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDecrement("infants")}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guestCounts.infants <= 0
                ? "border-gray-200 text-gray-300"
                : "border-gray-400 text-gray-600 hover:border-gray-800"
            }`}
            disabled={guestCounts.infants <= 0}
          >
            <span className="text-xl">-</span>
          </button>
          <span className="w-5 text-center">{guestCounts.infants}</span>
          <button
            onClick={() => handleIncrement("infants")}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 flex items-center justify-center hover:border-gray-800"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      {/* Pets */}
      <div className="flex items-center justify-between py-3">
        <div>
          <h3 className="text-base font-medium">Pets</h3>
          <p className="text-sm text-gray-500">Bringing a service animal?</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDecrement("pets")}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guestCounts.pets <= 0
                ? "border-gray-200 text-gray-300"
                : "border-gray-400 text-gray-600 hover:border-gray-800"
            }`}
            disabled={guestCounts.pets <= 0}
          >
            <span className="text-xl">-</span>
          </button>
          <span className="w-5 text-center">{guestCounts.pets}</span>
          <button
            onClick={() => handleIncrement("pets")}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 flex items-center justify-center hover:border-gray-800"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  )
}

// Main Hotel Component
const Hotel = () => {
  const [favorites, setFavorites] = useState({})
  const [currentPhotoIndices, setCurrentPhotoIndices] = useState({})
  const [showGuestSelector, setShowGuestSelector] = useState(false)
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  })
  const [visibleHotels, setVisibleHotels] = useState(8)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef(null)

  // All hotels data
  const allHotels = [
    {
      name: "Sheraton Hotel",
      location: "Constantine",
      price: "8000dzd/night",
    },
    {
      name: "Marriott Hotel",
      location: "Constantine",
      price: "12000dzd/night",
    },
    {
      name: "Hilton Hotel",
      location: "Constantine",
      price: "15000dzd/night",
    },
    {
      name: "Protea Hotel",
      location: "Constantine",
      price: "6000dzd/night",
    },
    {
      name: "AZ Hotel",
      location: "Constantine",
      price: "5000dzd/night",
    },
    {
      name: "Novotel Hotel",
      location: "Constantine",
      price: "7000dzd/night",
    },
    {
      name: "Constantine Hotel",
      location: "Constantine",
      price: "4500dzd/night",
    },
    {
      name: "Ibis Hotel",
      location: "Constantine",
      price: "5500dzd/night",
    },
    {
      name: "Oran Hotel",
      location: "Oran",
      price: "9000dzd/night",
    },
    {
      name: "Royal Hotel",
      location: "Algiers",
      price: "15000dzd/night",
    },
    {
      name: "Setif Hotel",
      location: "Setif",
      price: "8000dzd/night",
    },
    {
      name: "Annaba Hotel",
      location: "Annaba",
      price: "7500dzd/night",
    },
    {
      name: "Beach Resort",
      location: "Oran",
      price: "18000dzd/night",
    },
    {
      name: "Mountain View Hotel",
      location: "Setif",
      price: "10000dzd/night",
    },
    {
      name: "Luxury Suite",
      location: "Algiers",
      price: "20000dzd/night",
    },
    {
      name: "Business Hotel",
      location: "Constantine",
      price: "9500dzd/night",
    },
  ]

  // Sample photos array for navigation
  const photoSets = {
    Constantine: ["/vv.jpg", "/bousla.jpg", "/belli.jpg"],
    Algiers: ["/elbey.jpg", "/bayazid.jpg", "/ibis.jpg"],
    Oran: ["/exterior.jpg", "/oran.jpg", "/setif.avif"],
    Setif: ["/ibis.jpg", "/vv.jpg", "/bayazid.jpg"],
    Annaba: ["/oran.jpg", "/belli.jpg", "/exterior.jpg"],
  }

  // Function to load more hotels when scrolling
  const loadMoreHotels = () => {
    if (visibleHotels >= allHotels.length) return

    setLoading(true)
    setTimeout(() => {
      setVisibleHotels((prev) => Math.min(prev + 4, allHotels.length))
      setLoading(false)
    }, 500)
  }

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && visibleHotels < allHotels.length) {
          loadMoreHotels()
        }
      },
      { threshold: 1 },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [loading, visibleHotels])

  const nextPhoto = (index) => {
    setCurrentPhotoIndices((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) + 1) % 3,
    }))
  }

  const prevPhoto = (index) => {
    setCurrentPhotoIndices((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) - 1 + 3) % 3,
    }))
  }

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const getTotalGuestCount = () => {
    return guests.adults + guests.children + guests.infants + guests.pets
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F5F5F5] p-6">
        {/* Search Bar Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg flex items-center justify-between">
            <div className="flex-1 flex items-center space-x-4">
              {/* Location */}
              <div className="flex-1 px-4">
                <label className="block text-xs text-gray-500">Location</label>
                <input type="text" placeholder="Where to?" className="w-full outline-none text-sm" />
              </div>

              {/* Check-in */}
              <div className="flex-1 px-4 border-l border-gray-200">
                <label className="block text-xs text-gray-500">Check-in</label>
                <input type="date" className="w-full outline-none text-sm" />
              </div>

              {/* Check-out */}
              <div className="flex-1 px-4 border-l border-gray-200">
                <label className="block text-xs text-gray-500">Check-out</label>
                <input type="date" className="w-full outline-none text-sm" />
              </div>

              {/* Guests */}
              <div className="flex-1 px-4 border-l border-gray-200 relative">
                <label className="block text-xs text-gray-500">Guests</label>
                <button
                  onClick={() => setShowGuestSelector(!showGuestSelector)}
                  className="w-full text-left outline-none text-sm py-1"
                >
                  {getTotalGuestCount() > 0
                    ? `${getTotalGuestCount()} ${getTotalGuestCount() === 1 ? "guest" : "guests"}`
                    : "Add guests"}
                </button>
                {showGuestSelector && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowGuestSelector(false)}></div>
                    <GuestSelector
                      isHotel={true}
                      initialCount={guests}
                      onChange={(newGuests) => {
                        setGuests(newGuests)
                      }}
                      onClose={() => setShowGuestSelector(false)}
                    />
                  </>
                )}
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-[#FF385C] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allHotels.slice(0, visibleHotels).map((hotel, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-[280px] rounded-[20px] bg-white overflow-hidden">
                  {/* Image Container */}
                  <div className="w-full h-[180px] bg-[#2A1717] relative group">
                    <img
                      src={photoSets[hotel.location][currentPhotoIndices[index] || 0]}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Navigation Buttons */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevPhoto(index)
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextPhoto(index)
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>

                    {/* Photo Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {[0, 1, 2].map((photoIndex) => (
                        <div
                          key={photoIndex}
                          className={`w-1.5 h-1.5 rounded-full ${
                            photoIndex === (currentPhotoIndices[index] || 0) ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Bookmark Icon */}
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(index)
                        }}
                        className="p-1 hover:scale-110 transition-transform duration-200"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill={favorites[index] ? "#FF385C" : "none"}
                          stroke="#FF385C"
                          strokeWidth="1.5"
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-4">
                    {/* Hotel Name and Rating */}
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[15px] font-medium text-black m-0">{hotel.name}</h3>
                      <div className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF385C" stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span className="text-[13px] text-[#FF385C]">4.8</span>
                      </div>
                    </div>

                    {/* Location & Availability */}
                    <p className="text-[13px] text-gray-500 m-0">{hotel.location}</p>
                    <p className="text-[13px] text-gray-500 m-0 mb-1">Available now</p>

                    {/* Price */}
                    <p className="text-[15px] font-medium text-black m-0">From {hotel.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loading indicator */}
          {visibleHotels < allHotels.length && (
            <div ref={loaderRef} className="flex justify-center items-center my-8">
              {loading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF385C]"></div>
              ) : (
                <button
                  onClick={loadMoreHotels}
                  className="px-4 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Hotel
