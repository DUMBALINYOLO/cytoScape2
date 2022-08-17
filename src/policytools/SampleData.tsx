export const sample_data = {
  aggregations: {
    access_right: {
      buckets: [
        {
          doc_count: 1022,
          key: "open"
        }
      ],
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0
    },
    file_type: {
      buckets: [
        {
          doc_count: 1022,
          key: "pdf"
        }
      ],
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0
    },
    keywords: {
      buckets: [
        {
          doc_count: 506,
          key: "Military Forces and Organizations"
        },
        {
          doc_count: 386,
          key: "Personnel Management and Labor Relations"
        },
        {
          doc_count: 269,
          key: "Government and Political Science"
        },
        {
          doc_count: 235,
          key: "Administration and Management"
        },
        {
          doc_count: 174,
          key: "Economics and Cost Analysis"
        },
        {
          doc_count: 100,
          key: "Humanities and History"
        },
        {
          doc_count: 95,
          key: "Sociology and Law"
        },
        {
          doc_count: 76,
          key: "Information Science"
        },
        {
          doc_count: 52,
          key: "Psychology"
        },
        {
          doc_count: 50,
          key: "Unconventional Warfare"
        }
      ],
      doc_count_error_upper_bound: 1,
      sum_other_doc_count: 482
    },
    locations: {
      buckets: [
        {
          doc_count: 285,
          key: "United States of America"
        },
        {
          doc_count: 75,
          key: "China"
        },
        {
          doc_count: 57,
          key: "Russia"
        },
        {
          doc_count: 22,
          key: "Afghanistan"
        },
        {
          doc_count: 21,
          key: "Iraq"
        },
        {
          doc_count: 17,
          key: "India"
        },
        {
          doc_count: 17,
          key: "Japan"
        },
        {
          doc_count: 17,
          key: "Vietnam"
        },
        {
          doc_count: 16,
          key: "Pakistan"
        },
        {
          doc_count: 14,
          key: "Iran"
        }
      ],
      doc_count_error_upper_bound: 1,
      sum_other_doc_count: 234
    },
    subjects: {
      buckets: [
        {
          doc_count: 852,
          key: "Behavioral and Social Sciences"
        },
        {
          doc_count: 567,
          key: "Military Sciences"
        },
        {
          doc_count: 224,
          key: "Earth Sciences and Oceanography"
        },
        {
          doc_count: 76,
          key: "Mathematical and Computer Sciences"
        },
        {
          doc_count: 74,
          key: "Biological and Medical Sciences"
        },
        {
          doc_count: 71,
          key: "Mechanical, Industrial, Civil and Marine Engineering"
        },
        {
          doc_count: 21,
          key: "Aviation Technology"
        },
        {
          doc_count: 16,
          key: "Test Equipment, Research Facilities and Reprography"
        },
        {
          doc_count: 11,
          key: "Ordnance"
        },
        {
          doc_count: 9,
          key: "Atmospheric Sciences"
        }
      ],
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 44
    },
    type: {
      buckets: [
        {
          doc_count: 1022,
          key: "publication",
          subtype: {
            buckets: [
              {
                doc_count: 884,
                key: "article"
              },
              {
                doc_count: 86,
                key: "policy"
              },
              {
                doc_count: 49,
                key: "thesis"
              },
              {
                doc_count: 3,
                key: "report"
              }
            ],
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0
          }
        }
      ],
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0
    }
  },
  hits: {
    hits: [
      {
        conceptdoi: "10.5072/zenodo.2069",
        conceptrecid: "2069",
        created: "2020-11-19T14:46:52.557349+00:00",
        doi: "10.5072/zenodo.2070",
        files: [
          {
            bucket: "9b463b34-4473-4722-9d59-9ef7cd168651",
            checksum: "md5:c693e4a9cbe5e358f26370fe1ed1ca48",
            key: "5ccafc16cc6697257862c3ef.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/9b463b34-4473-4722-9d59-9ef7cd168651/5ccafc16cc6697257862c3ef.pdf"
            },
            size: 6930020,
            type: "pdf"
          }
        ],
        id: 2070,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2070.svg",
          bucket:
            "https://www.apac-dev.com/api/files/9b463b34-4473-4722-9d59-9ef7cd168651",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2069.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2069",
          doi: "https://doi.org/10.5072/zenodo.2070",
          html: "https://www.apac-dev.com/record/2070",
          latest: "https://www.apac-dev.com/api/records/2070",
          latest_html: "https://www.apac-dev.com/record/2070",
          self: "https://apac-dev.com/api/records/2070"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "nps"
            }
          ],
          creators: [
            {
              affiliation: "Naval Postgraduate School",
              name: "Carius, Robert Wilhelm."
            }
          ],
          description:
            "s 1959 Neutron diffusion in a subcritical assembly with sinusoidal source oscillation. As reactor technology progressed the assembly came to be used more and more as a test unit for proposed reactor designs and materials, and the majority of these test investigations have been conducted in the steady or equili- brium state.",
          doi: "10.5072/zenodo.2070",
          keywords: [
            "Lasers and Masers",
            "Particle Accelerators",
            "Electricity and Magnetism"
          ],
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "1959-01-01",
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2069",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2070"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2069"
                }
              }
            ]
          },
          resource_type: {
            subtype: "thesis",
            title: "Thesis",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/20physics/",
              scheme: "url",
              term: "Physics"
            }
          ],
          thesis: {
            supervisors: [],
            university: "Naval Postgraduate School"
          },
          title:
            "Neutron Diffusion In A Subcritical Assembly With Sinusoidal Source Oscillation."
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-11-19T14:46:52.607840+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.1573",
        conceptrecid: "1573",
        created: "2020-11-05T17:16:06.549674+00:00",
        doi: "10.5072/zenodo.2065",
        files: [
          {
            bucket: "445129d1-3d24-4255-8db8-2543d109a5ec",
            checksum: "md5:ff86d6a7f6642ddddae6ded956b10088",
            key: "5f337a5ef04abcffc3e72050.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/445129d1-3d24-4255-8db8-2543d109a5ec/5f337a5ef04abcffc3e72050.pdf"
            },
            size: 3063446,
            type: "pdf"
          },
          {
            bucket: "445129d1-3d24-4255-8db8-2543d109a5ec",
            checksum: "md5:9c15d31d364fbb889115f1752de7d279",
            key: "5f45ef5ff26f48a1bc969532.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/445129d1-3d24-4255-8db8-2543d109a5ec/5f45ef5ff26f48a1bc969532.pdf"
            },
            size: 3056117,
            type: "pdf"
          }
        ],
        id: 2065,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2065.svg",
          bucket:
            "https://www.apac-dev.com/api/files/445129d1-3d24-4255-8db8-2543d109a5ec",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.1573.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.1573",
          doi: "https://doi.org/10.5072/zenodo.2065",
          html: "https://www.apac-dev.com/record/2065",
          latest: "https://www.apac-dev.com/api/records/2065",
          latest_html: "https://www.apac-dev.com/record/2065",
          self: "https://apac-dev.com/api/records/2065"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "cna"
            }
          ],
          creators: [
            {
              affiliation: "Center for Naval Analyses",
              name: "Bachman, Elizabeth"
            }
          ],
          description:
            "<p>Over the last 15 years, the Chinese Communist Party (CCP) has conducted an ambitious campaign to increase the efficacy of its external propaganda. Drawing from primary Chinese languages sources, this study identifies and traces the origins of the overarching objectives of these efforts. In addition, it outlines the concrete steps that Beijing has taken to date to strengthen Chinese foreign-directed media. Using translated professional journals, the study also analyzes how Chinese subject matter experts in their own words assess Beijing&#39;s successes and shortcomings in improving the reach and resonance of China&#39;s external propaganda. This research was conducted on behalf of the US Indo-Pacific Command&#39;s China &ndash; Strategic Focus Group in support of USINDOPACOM requirements.</p>",
          doi: "10.5072/zenodo.2065",
          keywords: [
            "Government and Political Science",
            "Radio Communications",
            "Information Science"
          ],
          language: "eng",
          license: {
            id: "cc-by"
          },
          locations: [
            {
              lat: 35.0,
              lon: 105.0,
              place: "China"
            }
          ],
          publication_date: "2020-08-05",
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.1573",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 2,
                index: 1,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2065"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "1573"
                }
              }
            ]
          },
          resource_type: {
            subtype: "article",
            title: "Journal article",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/05behavioral/",
              scheme: "url",
              term: "Behavioral and Social Sciences"
            },
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/08earthsciences/",
              scheme: "url",
              term: "Earth Sciences and Oceanography"
            }
          ],
          title:
            "Black and White and Red All Over: China's Improving Foreign-Directed Media"
        },
        owners: [1],
        revision: 2,
        stats: {},
        updated: "2020-11-05T18:52:26.160271+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2063",
        conceptrecid: "2063",
        created: "2020-11-05T14:19:00.416128+00:00",
        doi: "10.5072/zenodo.2064",
        files: [
          {
            bucket: "92e301c7-148a-46d8-9be7-64c7486a8fd3",
            checksum: "md5:9e5578b6bc7c2d62757fcfb77b10eb31",
            key: "5daef66049781fda86686a9f.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/92e301c7-148a-46d8-9be7-64c7486a8fd3/5daef66049781fda86686a9f.pdf"
            },
            size: 365518,
            type: "pdf"
          }
        ],
        id: 2064,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2064.svg",
          bucket:
            "https://www.apac-dev.com/api/files/92e301c7-148a-46d8-9be7-64c7486a8fd3",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2063.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2063",
          doi: "https://doi.org/10.5072/zenodo.2064",
          html: "https://www.apac-dev.com/record/2064",
          latest: "https://www.apac-dev.com/api/records/2064",
          latest_html: "https://www.apac-dev.com/record/2064",
          self: "https://apac-dev.com/api/records/2064"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "naval_policies"
            }
          ],
          creators: [
            {
              affiliation: "United States Navy",
              name: "United States Navy"
            }
          ],
          description:
            "<p>To publish revised Navy policy and guidance for determining suitability of Navy servicemembers and family members for overseas or remote duty assignments per references (a) and (b) and implemented by references (c) and (d) . This instruction is a complete revision and should be reviewed in its entirety. 2</p>",
          doi: "10.5072/zenodo.2064",
          keywords: [
            "Personnel Management and Labor Relations",
            "Information Science",
            "Military Forces and Organizations"
          ],
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "2007-04-09",
          references: [
            "lilly",
            "DOD Instruction 1315.19 of 20 Dec 05",
            "MILPERSMAN Articles 1300-300 through 316",
            "BUMEDINST 1300.2A",
            "OPNAVINST 1740.4B",
            "SECNAVINST 1000.10A",
            "OPNAVINST 1754.2C",
            "OPNAVINST 6000.1B"
          ],
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2063",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2064"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2063"
                }
              }
            ]
          },
          resource_type: {
            subtype: "policy",
            title: "Policy",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/05behavioral/",
              scheme: "url",
              term: "Behavioral and Social Sciences"
            }
          ],
          title:
            "OPNAVINST 1300.14D - Suitability Screening For Overseas And Remote Duty Assignment"
        },
        owners: [1],
        revision: 2,
        stats: {},
        updated: "2020-11-05T14:24:20.075205+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2061",
        conceptrecid: "2061",
        created: "2020-11-05T14:18:56.673409+00:00",
        doi: "10.5072/zenodo.2062",
        files: [
          {
            bucket: "10facff5-426b-4a43-8b4a-771aa54cad1b",
            checksum: "md5:7710e72f0eecede3b0955251c9485d04",
            key: "5daeff9149781fda86686c68.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/10facff5-426b-4a43-8b4a-771aa54cad1b/5daeff9149781fda86686c68.pdf"
            },
            size: 394857,
            type: "pdf"
          }
        ],
        id: 2062,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2062.svg",
          bucket:
            "https://www.apac-dev.com/api/files/10facff5-426b-4a43-8b4a-771aa54cad1b",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2061.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2061",
          doi: "https://doi.org/10.5072/zenodo.2062",
          html: "https://www.apac-dev.com/record/2062",
          latest: "https://www.apac-dev.com/api/records/2062",
          latest_html: "https://www.apac-dev.com/record/2062",
          self: "https://apac-dev.com/api/records/2062"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "naval_policies"
            }
          ],
          creators: [
            {
              affiliation: "United States Navy",
              name: "United States Navy"
            }
          ],
          description:
            "To publish objectives and policies for inspection  of\n organizations and functions within the Department of the Navy  (DON) conducted by any inspection authority; to assign  responsibility for the direction, conduct and oversight of the  DON Inspection Program (DONIP). This is a complete revision and  should be read in its entirety. \n2",
          doi: "10.5072/zenodo.2062",
          keywords: [
            "Administration and Management",
            "Environmental Health and Safety",
            "Personnel Management and Labor Relations"
          ],
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "2000-07-13",
          references: [
            "SECNAVINST 5400.14A",
            "U.S. Navy Regulations, 1990",
            "SECNAVINST 5430.57F",
            "OPNAVINST 5430.48D",
            "10 U.S.C. \u00a75020",
            "10 U.S.C. \u00a77304",
            "OPNAVINST 5420.70E",
            "SECNAVINST 7510.7E",
            "OPNAVINST 3500.39",
            "SECNAVINST 5740.26A",
            "SECNAVINST 5740.25C"
          ],
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2061",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2062"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2061"
                }
              }
            ]
          },
          resource_type: {
            subtype: "policy",
            title: "Policy",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/05behavioral/",
              scheme: "url",
              term: "Behavioral and Social Sciences"
            },
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/15milsciences/",
              scheme: "url",
              term: "Military Sciences"
            }
          ],
          title:
            "SECNAVINST 5040.3A - Inspections Within The Department Of The Navy"
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-11-05T14:18:56.724804+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2059",
        conceptrecid: "2059",
        created: "2020-11-05T12:30:19.460582+00:00",
        doi: "10.5072/zenodo.2060",
        files: [
          {
            bucket: "eea4a04f-51d6-4e74-8ff4-5d67d64d9acc",
            checksum: "md5:ba231e9b300e5c1f7855d1befca90857",
            key: "5daef6a749781fda86686abe.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/eea4a04f-51d6-4e74-8ff4-5d67d64d9acc/5daef6a749781fda86686abe.pdf"
            },
            size: 181003,
            type: "pdf"
          }
        ],
        id: 2060,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2060.svg",
          bucket:
            "https://www.apac-dev.com/api/files/eea4a04f-51d6-4e74-8ff4-5d67d64d9acc",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2059.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2059",
          doi: "https://doi.org/10.5072/zenodo.2060",
          html: "https://www.apac-dev.com/record/2060",
          latest: "https://www.apac-dev.com/api/records/2060",
          latest_html: "https://www.apac-dev.com/record/2060",
          self: "https://apac-dev.com/api/records/2060"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "naval_policies"
            }
          ],
          creators: [
            {
              name: "United States Navy"
            }
          ],
          description:
            "<p>To issue the requirements for qualification, or requalification and designation of enlisted personnel as Fleet Marine Force (FMF) enlisted warfare specialists, as directed by reference (a). The significant changes to this revision include: a. Updates to Command Master Chief, Marine Forces Command (MARFORCOM) responsibility; and b. Updates to failure to qualify guidance. This instruction is a substantial revision and should be reviewed in its entirety.</p>",
          doi: "10.5072/zenodo.2060",
          keywords: [
            "Personnel Management and Labor Relations",
            "Military Forces and Organizations",
            "Administration and Management"
          ],
          license: {
            id: "cc-by"
          },
          publication_date: "2019-01-23",
          references: [
            "OPNAVINST 1414.9A",
            "SECNAVINST 1650.1H",
            "NAVPERS 155600D",
            "OPNAVINST 6110.1J",
            "SECNAVINST 1412.10"
          ],
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2059",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2060"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2059"
                }
              }
            ]
          },
          resource_type: {
            subtype: "policy",
            title: "Policy",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/15milsciences/",
              scheme: "url",
              term: "Military Sciences"
            }
          ],
          title:
            "1414.4D - Navy Enlisted Fleet Marine Force Warfare Specialist Qualification Program"
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-11-05T12:30:19.511611+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2057",
        conceptrecid: "2057",
        created: "2020-10-13T23:17:53.431638+00:00",
        doi: "10.5072/zenodo.2058",
        files: [
          {
            bucket: "a2dc3433-6840-410f-8e0a-a6b81f38eeb7",
            checksum: "md5:ab8efdd6431d1c58a49de0282b09596e",
            key: "5cc859f9cc669737acf1c1d6.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/a2dc3433-6840-410f-8e0a-a6b81f38eeb7/5cc859f9cc669737acf1c1d6.pdf"
            },
            size: 3325175,
            type: "pdf"
          }
        ],
        id: 2058,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2058.svg",
          bucket:
            "https://www.apac-dev.com/api/files/a2dc3433-6840-410f-8e0a-a6b81f38eeb7",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2057.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2057",
          doi: "https://doi.org/10.5072/zenodo.2058",
          html: "https://www.apac-dev.com/record/2058",
          latest: "https://www.apac-dev.com/api/records/2058",
          latest_html: "https://www.apac-dev.com/record/2058",
          self: "https://apac-dev.com/api/records/2058"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "nps"
            }
          ],
          creators: [
            {
              affiliation: "Naval Postgraduate School",
              name: "Antonio, Dennis D."
            }
          ],
          description:
            "A computer model of the launch and flyout of a shipboard surface\nto air missile toward an attacking aircraft or anti-ship missile has\nbeen developed for the Interactive Simulation of Engagements at Sea\n(ISEAS) program. The model, written in the C language, is based upon\nthe MICE II Fortran program. The flyout model can be used to assess\nmissile system performance against an air target. A complete description\nof the missile model, with flow charts and a C program listing,\nis included.",
          doi: "10.5072/zenodo.2058",
          keywords: [
            "Computer Programming and Software",
            "Guided Missiles",
            "Surface-Launched Guided Missiles"
          ],
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "1986-12-01",
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2057",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2058"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2057"
                }
              }
            ]
          },
          resource_type: {
            subtype: "thesis",
            title: "Thesis",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/12mathematical/",
              scheme: "url",
              term: "Mathematical and Computer Sciences"
            },
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/16guided/",
              scheme: "url",
              term: "Guided Missile Technology"
            }
          ],
          thesis: {
            supervisors: [],
            university: "Naval Postgraduate School"
          },
          title: "A Missile Flyout Model For Iseas"
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-10-13T23:17:53.479786+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2055",
        conceptrecid: "2055",
        created: "2020-10-13T23:17:43.566503+00:00",
        doi: "10.5072/zenodo.2056",
        files: [
          {
            bucket: "8db2d48b-a9d9-4996-8244-332872bcc65e",
            checksum: "md5:3de654b10e84e571bcefaf05047b125f",
            key: "5cc3040ecc669720fc7ecfe2.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/8db2d48b-a9d9-4996-8244-332872bcc65e/5cc3040ecc669720fc7ecfe2.pdf"
            },
            size: 2476062,
            type: "pdf"
          }
        ],
        id: 2056,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2056.svg",
          bucket:
            "https://www.apac-dev.com/api/files/8db2d48b-a9d9-4996-8244-332872bcc65e",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2055.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2055",
          doi: "https://doi.org/10.5072/zenodo.2056",
          html: "https://www.apac-dev.com/record/2056",
          latest: "https://www.apac-dev.com/api/records/2056",
          latest_html: "https://www.apac-dev.com/record/2056",
          self: "https://apac-dev.com/api/records/2056"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "nps"
            }
          ],
          creators: [
            {
              affiliation: "Naval Postgraduate School",
              name: "Johnson, Donald C."
            }
          ],
          description:
            "Human resource management is gaining recognition as being one of the core attributes of effective software project management. With the great dependency the Department of Defense (DoD) has on systems software, the development of an optimal staffing policy that minimizes overall software project costs will be very valuable. This research aims at developing such a system using a dynamic simulation model that incorporates data collected during an actual software development project. A genetic algorithm is used to arrive at a solution to this nonlinear optimization problem. The simulation model accepts varying staffing schemes supplied from the genetic algorithm allowing for the examination of the effects of the staffing schemes on total project cost. The results indicate that the system was able to obtain a solution reducing overall project costs, but at the cost of additional workdays.",
          doi: "10.5072/zenodo.2056",
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "1994-12-01",
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2055",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2056"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2055"
                }
              }
            ]
          },
          resource_type: {
            subtype: "thesis",
            title: "Thesis",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/12mathematical/",
              scheme: "url",
              term: "Mathematical and Computer Sciences"
            },
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/05behavioral/",
              scheme: "url",
              term: "Behavioral and Social Sciences"
            }
          ],
          thesis: {
            supervisors: [],
            university: "Naval Postgraduate School"
          },
          title:
            "Application Of A Genetic Algorithm To Optimize Staffing Levels In Software Development"
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-10-13T23:17:43.640315+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2053",
        conceptrecid: "2053",
        created: "2020-10-13T23:17:35.363674+00:00",
        doi: "10.5072/zenodo.2054",
        files: [
          {
            bucket: "2c404f6c-c723-494c-9438-78e18cd86f66",
            checksum: "md5:a686b051dcdd95cb39a63e852c5a256d",
            key: "5cc878b5cc669737acf1c8dc.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/2c404f6c-c723-494c-9438-78e18cd86f66/5cc878b5cc669737acf1c8dc.pdf"
            },
            size: 7201166,
            type: "pdf"
          }
        ],
        id: 2054,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2054.svg",
          bucket:
            "https://www.apac-dev.com/api/files/2c404f6c-c723-494c-9438-78e18cd86f66",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2053.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2053",
          doi: "https://doi.org/10.5072/zenodo.2054",
          html: "https://www.apac-dev.com/record/2054",
          latest: "https://www.apac-dev.com/api/records/2054",
          latest_html: "https://www.apac-dev.com/record/2054",
          self: "https://apac-dev.com/api/records/2054"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "nps"
            }
          ],
          creators: [
            {
              affiliation: "Naval Postgraduate School",
              name: "Walsh, Thomas H."
            }
          ],
          description:
            "s 1983 Variable area ejector-diffuser model tests. 80 404NAB, Pressure Distributions, Effect of 5% Secondary Mass (#14) TF30AB, Comparison of Constant vs. Variable Area Diffusers 81 82 9 46.",
          doi: "10.5072/zenodo.2054",
          keywords: [
            "Computer Programming and Software",
            "Statistics and Probability",
            "Numerical Mathematics"
          ],
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "1983-01-01",
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2053",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2054"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2053"
                }
              }
            ]
          },
          resource_type: {
            subtype: "thesis",
            title: "Thesis",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/14test/",
              scheme: "url",
              term: "Test Equipment, Research Facilities and Reprography"
            }
          ],
          thesis: {
            supervisors: [],
            university: "Naval Postgraduate School"
          },
          title: "Variable Area Ejector-Diffuser Model Tests."
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-10-13T23:17:35.418283+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2051",
        conceptrecid: "2051",
        created: "2020-10-13T23:17:16.853051+00:00",
        doi: "10.5072/zenodo.2052",
        files: [
          {
            bucket: "5d12c568-eafb-4ed0-a30a-cfe16725a718",
            checksum: "md5:ce8723417c78feab702ec984fdac49e0",
            key: "5cc999d6cc66974280fa821f.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/5d12c568-eafb-4ed0-a30a-cfe16725a718/5cc999d6cc66974280fa821f.pdf"
            },
            size: 4877619,
            type: "pdf"
          }
        ],
        id: 2052,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2052.svg",
          bucket:
            "https://www.apac-dev.com/api/files/5d12c568-eafb-4ed0-a30a-cfe16725a718",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2051.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2051",
          doi: "https://doi.org/10.5072/zenodo.2052",
          html: "https://www.apac-dev.com/record/2052",
          latest: "https://www.apac-dev.com/api/records/2052",
          latest_html: "https://www.apac-dev.com/record/2052",
          self: "https://apac-dev.com/api/records/2052"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "nps"
            }
          ],
          creators: [
            {
              affiliation: "Naval Postgraduate School",
              name: "Macias, Valente Jr."
            }
          ],
          description:
            "Mean humidity, temperature, wind data and fluctuating temperature and velocities data obtained from the R/V Acania were interpreted on the basis of empirically derived expressions describing the temperature structure parameter, C(T)\u00b2, and the dissipation rate of turbulent kinetic energy e.",
          doi: "10.5072/zenodo.2052",
          keywords: ["Optics", "Meteorology", "Electricity and Magnetism"],
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "1977-06-01",
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2051",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2052"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2051"
                }
              }
            ]
          },
          resource_type: {
            subtype: "thesis",
            title: "Thesis",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/04atmospheric/",
              scheme: "url",
              term: "Atmospheric Sciences"
            },
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/20physics/",
              scheme: "url",
              term: "Physics"
            }
          ],
          thesis: {
            supervisors: [],
            university: "Naval Postgraduate School"
          },
          title: "An Investigation Of Electro-Optical Turbulence Parameters."
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-10-13T23:17:16.911207+00:00"
      },
      {
        conceptdoi: "10.5072/zenodo.2049",
        conceptrecid: "2049",
        created: "2020-10-13T23:17:04.078064+00:00",
        doi: "10.5072/zenodo.2050",
        files: [
          {
            bucket: "1402b06e-bbb1-4adc-9716-f68eb93b42f8",
            checksum: "md5:9fe1ad214b29f1b0cc7f31461fef109d",
            key: "5cc08c16cc669739841592fb.pdf",
            links: {
              self:
                "https://www.apac-dev.com/api/files/1402b06e-bbb1-4adc-9716-f68eb93b42f8/5cc08c16cc669739841592fb.pdf"
            },
            size: 317321,
            type: "pdf"
          }
        ],
        id: 2050,
        links: {
          badge: "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2050.svg",
          bucket:
            "https://www.apac-dev.com/api/files/1402b06e-bbb1-4adc-9716-f68eb93b42f8",
          conceptbadge:
            "https://www.apac-dev.com/badge/doi/10.5072/zenodo.2049.svg",
          conceptdoi: "https://doi.org/10.5072/zenodo.2049",
          doi: "https://doi.org/10.5072/zenodo.2050",
          html: "https://www.apac-dev.com/record/2050",
          latest: "https://www.apac-dev.com/api/records/2050",
          latest_html: "https://www.apac-dev.com/record/2050",
          self: "https://apac-dev.com/api/records/2050"
        },
        metadata: {
          access_right: "open",
          access_right_category: "success",
          communities: [
            {
              id: "nps"
            }
          ],
          creators: [
            {
              affiliation: "Naval Postgraduate School",
              name: "Black, Alan"
            }
          ],
          description:
            "Despite enhancements to aviation security since September 11, 2001, there remain vulnerabilities from employees at airports. This threat results from airline/airport employees that have access to sensitive and restricted areas during the normal course of their required duties. This thesis evaluates the threat and the measures in place to prevent attacks from aviation insiders. In addition, it evaluates a measure commonly referred to as 100 percent employee screening. Finally, the thesis derives recommendations to enhance the current methods to reduce the vulnerability, as well as proposes additional measures to further reduce the threat from aviation insiders.",
          doi: "10.5072/zenodo.2050",
          keywords: [
            "Personnel Management and Labor Relations",
            "Military Aircraft Operations",
            "Commercial and General Aviation"
          ],
          language: "eng",
          license: {
            id: "cc-by"
          },
          publication_date: "2010-12-01",
          related_identifiers: [
            {
              identifier: "10.5072/zenodo.2049",
              relation: "isVersionOf",
              scheme: "doi"
            }
          ],
          relations: {
            version: [
              {
                count: 1,
                index: 0,
                is_last: true,
                last_child: {
                  pid_type: "recid",
                  pid_value: "2050"
                },
                parent: {
                  pid_type: "recid",
                  pid_value: "2049"
                }
              }
            ]
          },
          resource_type: {
            subtype: "thesis",
            title: "Thesis",
            type: "publication"
          },
          subjects: [
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/05behavioral/",
              scheme: "url",
              term: "Behavioral and Social Sciences"
            },
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/15milsciences/",
              scheme: "url",
              term: "Military Sciences"
            },
            {
              identifier:
                "https://discover.dtic.mil/thesaurus/subject-categories/01aviationtech/",
              scheme: "url",
              term: "Aviation Technology"
            }
          ],
          thesis: {
            supervisors: [],
            university: "Naval Postgraduate School"
          },
          title: "Managing The Aviation Insider Threat"
        },
        owners: [1],
        revision: 1,
        stats: {},
        updated: "2020-10-13T23:17:04.132185+00:00"
      }
    ],
    total: 1022
  },
  links: {
    next: "https://apac-dev.com/api/records/?sort=mostrecent&page=2&size=10",
    self: "https://apac-dev.com/api/records/?sort=mostrecent&page=1&size=10"
  }
};
