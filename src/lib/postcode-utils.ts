// UK Postcode validation & area coverage utilities

const UK_POSTCODE_REGEX = /^([A-Z]{1,2}\d[A-Z\d]?)\s*(\d[A-Z]{2})$/i

// London postcode districts → friendly area names
const LONDON_AREAS: Record<string, string> = {
    // Central London
    EC1: "Clerkenwell", EC2: "Moorgate", EC3: "Fenchurch", EC4: "Fleet Street",
    WC1: "Bloomsbury", WC2: "Covent Garden",
    W1: "Mayfair", W2: "Paddington", W3: "Acton", W4: "Chiswick",
    W5: "Ealing", W6: "Hammersmith", W7: "Hanwell", W8: "Kensington",
    W9: "Maida Vale", W10: "Ladbroke Grove", W11: "Notting Hill",
    W12: "Shepherds Bush", W13: "West Ealing", W14: "West Kensington",
    SW1: "Westminster", SW2: "Brixton", SW3: "Chelsea", SW4: "Clapham",
    SW5: "Earl's Court", SW6: "Fulham", SW7: "South Kensington",
    SW8: "South Lambeth", SW9: "Stockwell", SW10: "West Brompton",
    SW11: "Battersea", SW12: "Balham", SW13: "Barnes", SW14: "Mortlake",
    SW15: "Putney", SW16: "Streatham", SW17: "Tooting", SW18: "Wandsworth",
    SW19: "Wimbledon", SW20: "Raynes Park",
    SE1: "Southwark", SE2: "Abbey Wood", SE3: "Blackheath", SE4: "Brockley",
    SE5: "Camberwell", SE6: "Catford", SE7: "Charlton", SE8: "Deptford",
    SE9: "Eltham", SE10: "Greenwich", SE11: "Kennington", SE12: "Lee",
    SE13: "Lewisham", SE14: "New Cross", SE15: "Peckham", SE16: "Rotherhithe",
    SE17: "Walworth", SE18: "Woolwich", SE19: "Crystal Palace",
    SE20: "Anerley", SE21: "Dulwich", SE22: "East Dulwich",
    SE23: "Forest Hill", SE24: "Herne Hill", SE25: "South Norwood",
    SE26: "Sydenham", SE27: "West Norwood", SE28: "Thamesmead",
    N1: "Islington", N2: "East Finchley", N3: "Finchley", N4: "Finsbury Park",
    N5: "Highbury", N6: "Highgate", N7: "Holloway", N8: "Hornsey",
    N9: "Edmonton", N10: "Muswell Hill", N11: "New Southgate",
    N12: "North Finchley", N13: "Palmers Green", N14: "Southgate",
    N15: "South Tottenham", N16: "Stoke Newington", N17: "Tottenham",
    N18: "Upper Edmonton", N19: "Upper Holloway", N20: "Whetstone",
    N21: "Winchmore Hill", N22: "Wood Green",
    NW1: "Camden Town", NW2: "Cricklewood", NW3: "Hampstead",
    NW4: "Hendon", NW5: "Kentish Town", NW6: "Kilburn",
    NW7: "Mill Hill", NW8: "St John's Wood", NW9: "The Hyde",
    NW10: "Willesden", NW11: "Golders Green",
    E1: "Whitechapel", E2: "Bethnal Green", E3: "Bow", E4: "Chingford",
    E5: "Clapton", E6: "East Ham", E7: "Forest Gate", E8: "Hackney",
    E9: "Homerton", E10: "Leyton", E11: "Leytonstone", E12: "Manor Park",
    E13: "Plaistow", E14: "Canary Wharf", E15: "Stratford", E16: "Victoria Dock",
    E17: "Walthamstow", E18: "South Woodford", E20: "Olympic Park",
    // Greater London
    BR1: "Bromley", BR2: "Keston", BR3: "Beckenham", BR4: "West Wickham",
    BR5: "St Paul's Cray", BR6: "Orpington", BR7: "Chislehurst",
    CR0: "Croydon", CR2: "South Croydon", CR3: "Caterham",
    CR4: "Mitcham", CR5: "Coulsdon", CR6: "Warlingham",
    CR7: "Thornton Heath", CR8: "Purley",
    DA1: "Dartford", DA5: "Bexley", DA6: "Bexleyheath",
    DA7: "Upper Belvedere", DA8: "Erith", DA14: "Sidcup",
    DA15: "Blackfen", DA16: "Welling", DA17: "Belvedere", DA18: "Erith",
    EN1: "Enfield", EN2: "Enfield Chase", EN3: "Enfield Highway",
    EN4: "Barnet", EN5: "New Barnet",
    HA0: "Wembley", HA1: "Harrow", HA2: "Harrow", HA3: "Kenton",
    HA4: "Ruislip", HA5: "Pinner", HA6: "Northwood",
    HA7: "Stanmore", HA8: "Edgware", HA9: "Wembley",
    IG1: "Ilford", IG2: "Gants Hill", IG3: "Seven Kings",
    IG4: "Redbridge", IG5: "Clayhall", IG6: "Barkingside",
    IG7: "Chigwell", IG8: "Woodford Green", IG11: "Barking",
    KT1: "Kingston", KT2: "Kingston", KT3: "New Malden",
    KT4: "Worcester Park", KT5: "Surbiton", KT6: "Surbiton",
    RM1: "Romford", RM2: "Gidea Park", RM3: "Harold Hill",
    RM5: "Collier Row", RM6: "Chadwell Heath", RM7: "Rush Green",
    RM8: "Dagenham", RM9: "Dagenham", RM10: "Dagenham",
    SM1: "Sutton", SM2: "Belmont", SM3: "Cheam",
    SM4: "Morden", SM5: "Carshalton", SM6: "Wallington",
    TW1: "Twickenham", TW2: "Twickenham", TW3: "Hounslow",
    TW4: "Hounslow", TW5: "Heston", TW7: "Isleworth",
    TW8: "Brentford", TW9: "Richmond", TW10: "Richmond",
    TW11: "Teddington", TW12: "Hampton", TW13: "Feltham", TW14: "Feltham",
    UB1: "Southall", UB2: "Southall", UB3: "Hayes",
    UB4: "Hayes", UB5: "Northolt", UB6: "Greenford",
    UB7: "West Drayton", UB8: "Uxbridge", UB9: "Denham", UB10: "Hillingdon",
}

export type PostcodeStatus =
    | { type: "empty" }
    | { type: "invalid" }        // not a UK postcode at all
    | { type: "served"; area: string }   // London — we serve here
    | { type: "not-served"; area: string } // UK but not London

// Extract the district (outward code) from a postcode, e.g. "SW1A 1AA" → "SW1"
function extractDistrict(outward: string): string {
    // outward is e.g. "SW1A", "EC2M", "W1", "N1"
    // strip trailing alpha to get the district: SW1A → SW1, EC2M → EC2, W1 → W1
    return outward.replace(/[A-Z]$/i, "")
}

export function validatePostcode(value: string): PostcodeStatus {
    const trimmed = value.trim()
    if (!trimmed) return { type: "empty" }

    const match = trimmed.match(UK_POSTCODE_REGEX)
    if (!match) return { type: "invalid" }

    const outward = match[1].toUpperCase()
    const district = extractDistrict(outward)

    const areaName = LONDON_AREAS[outward] ?? LONDON_AREAS[district]
    if (areaName) {
        return { type: "served", area: areaName }
    }

    // It's a valid UK postcode but not a London one
    return { type: "not-served", area: district }
}
