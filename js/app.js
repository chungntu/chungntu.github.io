/**
 * TRUONG THANH CHUNG - ACADEMIC PORTFOLIO JS LOGIC
 * Standalone, robust, works both on GitHub Pages and local file:// protocol
 */

const publicationsData = [
  // ================= INTERNATIONAL JOURNALS =================
  {
    id: "pub-int-1",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2023,
    title: "Passive infrared thermography technique for concrete structures health investigation case studies",
    authors: ["Tran QH", "Dang QM", "Pham XT", "Truong TC", "Nguyen TX", "Huh J"],
    venue: "Asian Journal of Civil Engineering, Vol. 24(5), pp. 1323–1331",
    doi: "https://doi.org/10.1007/s42107-023-00571-y",
    pdf: "pdf/2023_passive_infrared_thermography_concrete_health.pdf",
    bibtex: `@article{tran2023passive,
  title={Passive infrared thermography technique for concrete structures health investigation case studies},
  author={Tran, Q. H. and Dang, Q. M. and Pham, X. T. and Truong, T. C. and Nguyen, T. X. and Huh, J.},
  journal={Asian Journal of Civil Engineering},
  volume={24},
  number={5},
  pages={1323--1331},
  year={2023},
  publisher={Springer},
  doi={10.1007/s42107-023-00571-y}
}`
  },
  {
    id: "pub-int-2",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2020,
    title: "Parametric optimization of pulse-echo laser ultrasonic system for inspection of thick polymer matrix composites",
    authors: ["Ayalsew DA", "Truong TC", "Lee JR", "JB Ihn"],
    venue: "Structural Health Monitoring, Vol. 19(2), pp. 443-453",
    doi: "https://doi.org/10.1177/1475921719852891",
    pdf: "pdf/2020_parametric_optimization_pulse_echo_laser_ultrasonic.pdf",
    bibtex: `@article{ayalsew2020parametric,
  title={Parametric optimization of pulse-echo laser ultrasonic system for inspection of thick polymer matrix composites},
  author={Ayalsew, D. A. and Truong, T. C. and Lee, J. R. and Ihn, J. B.},
  journal={Structural Health Monitoring},
  volume={19},
  number={2},
  pages={443--453},
  year={2020},
  publisher={SAGE Publications},
  doi={10.1177/1475921719852891}
}`
  },
  {
    id: "pub-int-3",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2018,
    title: "Thermo-elastic model of epicenter displacement by laser pulse irradiated on metallic surfaces",
    authors: ["Truong TC", "Ayalsew DA", "Lee JR", "JB Ihn"],
    venue: "Journal of Nondestructive Evaluation, Diagnostics and Prognostics of Engineering Systems, Vol. 1(2), 021001-021006",
    doi: "https://doi.org/10.1115/1.4038030",
    pdf: "pdf/2018_thermo_elastic_model_epicenter_displacement.pdf",
    bibtex: `@article{truong2018thermo,
  title={Thermo-elastic model of epicenter displacement by laser pulse irradiated on metallic surfaces},
  author={Truong, T. C. and Ayalsew, D. A. and Lee, J. R. and Ihn, J. B.},
  journal={Journal of Nondestructive Evaluation, Diagnostics and Prognostics of Engineering Systems},
  volume={1},
  number={2},
  pages={021001--021006},
  year={2018},
  publisher={ASME},
  doi={10.1115/1.4038030}
}`
  },
  {
    id: "pub-int-4",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2018,
    title: "Thickness reconstruction of nuclear power plant pipes with flow-accelerated corrosion damage using laser ultrasonic wavenumber imaging",
    authors: ["Truong TC", "Lee JR"],
    venue: "Structural Health Monitoring, Vol. 17(2), pp. 255-265",
    doi: "https://doi.org/10.1177/1475921716689733",
    pdf: "pdf/2018_thickness_reconstruction_nuclear_pipes_wavenumber_imaging.pdf",
    bibtex: `@article{truong2018thickness,
  title={Thickness reconstruction of nuclear power plant pipes with flow-accelerated corrosion damage using laser ultrasonic wavenumber imaging},
  author={Truong, T. C. and Lee, J. R.},
  journal={Structural Health Monitoring},
  volume={17},
  number={2},
  pages={255--265},
  year={2018},
  publisher={SAGE Publications},
  doi={10.1177/1475921716689733}
}`
  },
  {
    id: "pub-int-5",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2017,
    title: "FPGA-based ultrasonic energy mapping with source removal method for damage visualization in composite structures",
    authors: ["Abbas SH", "Truong TC", "Lee JR"],
    venue: "Advanced Composite Materials, Vol. 26(sup1), pp. 3-13",
    doi: "https://doi.org/10.1080/09243046.2017.1313573",
    pdf: "pdf/2017_fpga_ultrasonic_energy_mapping_damage_visualization.pdf",
    bibtex: `@article{abbas2017fpga,
  title={FPGA-based ultrasonic energy mapping with source removal method for damage visualization in composite structures},
  author={Abbas, S. H. and Truong, T. C. and Lee, J. R.},
  journal={Advanced Composite Materials},
  volume={26},
  number={sup1},
  pages={3--13},
  year={2017},
  publisher={Taylor & Francis},
  doi={10.1080/09243046.2017.1313573}
}`
  },
  {
    id: "pub-int-6",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2016,
    title: "SNR enhancement for composite application using multiple Doppler vibrometers based laser ultrasonic propagation imager",
    authors: ["Truong TC", "Lee JR"],
    venue: "Optics and Lasers in Engineering, Vol. 84, pp. 82-88",
    doi: "https://doi.org/10.1016/j.optlaseng.2016.03.029",
    pdf: "pdf/2016_snr_enhancement_laser_ultrasonic_propagation_imager.pdf",
    bibtex: `@article{truong2016snr,
  title={SNR enhancement for composite application using multiple Doppler vibrometers based laser ultrasonic propagation imager},
  author={Truong, T. C. and Lee, J. R.},
  journal={Optics and Lasers in Engineering},
  volume={84},
  pages={82--88},
  year={2016},
  publisher={Elsevier},
  doi={10.1016/j.optlaseng.2016.03.029}
}`
  },
  {
    id: "pub-int-7",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2015,
    title: "Comparative study of laser Doppler vibrometer and capacitive air-coupled transducer for ultrasonic propagation imager and the new development of an efficient ultrasonic wavenumber imaging algorithm",
    authors: ["Truong TC", "Kang DH", "Lee JR", "Farrar CR"],
    venue: "Strain, Vol. 51(4), pp. 332-342",
    doi: "https://doi.org/10.1111/str.12144",
    pdf: "pdf/2015_comparative_study_ldv_cact_ultrasonic_propagation_imager.pdf",
    bibtex: `@article{truong2015comparative,
  title={Comparative study of laser Doppler vibrometer and capacitive air-coupled transducer for ultrasonic propagation imager and the new development of an efficient ultrasonic wavenumber imaging algorithm},
  author={Truong, T. C. and Kang, D. H. and Lee, J. R. and Farrar, C. R.},
  journal={Strain},
  volume={51},
  number={4},
  pages={332--342},
  year={2015},
  publisher={Wiley},
  doi={10.1111/str.12144}
}`
  },
  {
    id: "pub-int-8",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2015,
    title: "Spar disbond visualization in in-service composite UAV with ultrasonic propagation imager",
    authors: ["Lee JR", "Cho CM", "Park CY", "Truong TC", "Shin HJ", "Jeong HM", "Flynn EB"],
    venue: "Aerospace Science and Technology, Vol. 45, pp. 180-185",
    doi: "https://doi.org/10.1016/j.ast.2015.05.010",
    pdf: "pdf/2015_spar_disbond_visualization_composite_uav.pdf",
    bibtex: `@article{lee2015spar,
  title={Spar disbond visualization in in-service composite UAV with ultrasonic propagation imager},
  author={Lee, J. R. and Cho, C. M. and Park, C. Y. and Truong, T. C. and Shin, H. J. and Jeong, H. M. and Flynn, E. B.},
  journal={Aerospace Science and Technology},
  volume={45},
  pages={180--185},
  year={2015},
  publisher={Elsevier},
  doi={10.1016/j.ast.2015.05.010}
}`
  },
  {
    id: "pub-int-9",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2015,
    title: "Damage visualization of filament wound composite hydrogen fuel tank using ultrasonic propagation imager",
    authors: ["Lee JR", "Jeong HM", "Truong TC", "Shin HJ", "Park JY"],
    venue: "Composites Research, Vol. 28(4), pp. 143-147",
    doi: "https://doi.org/10.7234/composres.2015.28.4.143",
    pdf: "pdf/2013_damage_visualization_composite_hydrogen_tank.pdf",
    bibtex: `@article{lee2015damage,
  title={Damage visualization of filament wound composite hydrogen fuel tank using ultrasonic propagation imager},
  author={Lee, J. R. and Jeong, H. M. and Truong, T. C. and Shin, H. J. and Park, J. Y.},
  journal={Composites Research},
  volume={28},
  number={4},
  pages={143--147},
  year={2015},
  doi={10.7234/composres.2015.28.4.143}
}`
  },
  {
    id: "pub-int-10",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2013,
    title: "Laser ultrasonic imaging and damage detection for a rotating structure",
    authors: ["Park B", "Sohn H", "Yeum CM", "Truong TC"],
    venue: "Structural Health Monitoring, Vol. 12(5-6), pp. 494-506",
    doi: "https://doi.org/10.1177/1475921713507100",
    pdf: "pdf/2013_laser_ultrasonic_imaging_rotating_structure.pdf",
    bibtex: `@article{park2013laser,
  title={Laser ultrasonic imaging and damage detection for a rotating structure},
  author={Park, B. and Sohn, H. and Yeum, C. M. and Truong, T. C.},
  journal={Structural Health Monitoring},
  volume={12},
  number={5-6},
  pages={494--506},
  year={2013},
  publisher={SAGE Publications},
  doi={10.1177/1475921713507100}
}`
  },
  {
    id: "pub-int-11",
    category: "journal",
    type: "International Journal",
    badgeClass: "badge-journal",
    year: 2012,
    title: "Finite element model updating of Canton Tower using regularization technique",
    authors: ["Truong TC", "Cho S", "Yun CB", "Sohn H"],
    venue: "Smart Structures and Systems, Vol. 10(4-5), pp. 459-470",
    doi: "https://doi.org/10.12989/sss.2012.10.4_5.459",
    pdf: "pdf/2012_fem_updating_canton_tower_regularization.pdf",
    bibtex: `@article{truong2012finite,
  title={Finite element model updating of Canton Tower using regularization technique},
  author={Truong, T. C. and Cho, S. and Yun, C. B. and Sohn, H.},
  journal={Smart Structures and Systems},
  volume={10},
  number={4-5},
  pages={459--470},
  year={2012},
  doi={10.12989/sss.2012.10.4_5.459}
}`
  },

  // ================= NATIONAL JOURNALS =================
  {
    id: "pub-nat-1",
    category: "national",
    type: "National Journal",
    badgeClass: "badge-national",
    year: 2025,
    title: "Dual Laser-Aided UAV Motion Compensation for Vision-Based Displacement Measurement of High-Speed Railway Bridge",
    authors: ["Truong TC", "Tran QH", "Dang QM", "Tran NH", "Bui TT", "Guido De Roeck"],
    venue: "Journal of Transportation Science and Technology - Ho Chi Minh City University of Transport, Vol. 14(6), pp. 64-70",
    doi: "https://www.doi.org/10.55228/JTST140606",
    pdf: "pdf/2025_dual_laser_uav_motion_compensation_displacement.pdf",
    bibtex: `@article{truong2025dual,
  title={Dual Laser-Aided UAV Motion Compensation for Vision-Based Displacement Measurement of High-Speed Railway Bridge},
  author={Truong, T. C. and Tran, Q. H. and Dang, Q. M. and Tran, N. H. and Bui, T. T. and De Roeck, Guido},
  journal={Journal of Transportation Science and Technology},
  volume={14},
  number={6},
  pages={64--70},
  year={2025},
  doi={10.55228/JTST140606}
}`
  },
  {
    id: "pub-nat-2",
    category: "national",
    type: "National Journal",
    badgeClass: "badge-national",
    year: 2025,
    title: "Nghiên cứu ứng dụng kỹ thuật phân tích hình ảnh để đo biến dạng chuyển vị của tấm kết cấu hàng hải khi chịu tải va đập",
    authors: ["Truong DD", "Duong VQ", "Vo TL", "Tran NMT", "Truong TC"],
    venue: "Tạp chí Khoa học và Công nghệ, Đại học Đà Nẵng, Vol. 23(9A), pp. 36-41",
    doi: "https://doi.org/10.31130/ud-jst.2025.23(9A).116",
    pdf: "pdf/2025_phan_tich_hinh_anh_bien_dang_chuyen_vi_tam_ket_cau_hang_hai.pdf",
    bibtex: `@article{truong2025nghiencuu,
  title={Nghiên cứu ứng dụng kỹ thuật phân tích hình ảnh để đo biến dạng chuyển vị của tấm kết cấu hàng hải khi chịu tải va đập},
  author={Trương, Đ. D. and Dương, V. Q. and Võ, T. L. and Trần, N. M. T. and Trương, T. C.},
  journal={Tạp chí Khoa học và Công nghệ, Đại học Đà Nẵng},
  volume={23},
  number={9A},
  pages={36--41},
  year={2025},
  doi={10.31130/ud-jst.2025.23(9A).116}
}`
  },
  {
    id: "pub-nat-3",
    category: "national",
    type: "National Journal",
    badgeClass: "badge-national",
    year: 2025,
    title: "Đánh giá độ tin cậy chuyển vị đỉnh khung thép không gian dưới tác dụng của tải trọng gió",
    authors: ["Tung PX", "Tran QH", "Dang QM", "Truong TC"],
    venue: "Tạp chí điện tử Khoa học và Công nghệ Giao thông, Vol. 4(4), pp. 67–75",
    doi: "https://doi.org/10.58845/jstt.utt.2024.vn.4.4.67-75",
    pdf: "pdf/2025_danh_gia_do_tin_cay_chuyen_vi_dinh_khung_thep.pdf",
    bibtex: `@article{tung2025danhgia,
  title={Đánh giá độ tin cậy chuyển vị đỉnh khung thép không gian dưới tác dụng của tải trọng gió},
  author={Phan, X. T. and Trần, Q. H. and Đặng, Q. M. and Trương, T. C.},
  journal={Tạp chí điện tử Khoa học và Công nghệ Giao thông},
  volume={4},
  number={4},
  pages={67--75},
  year={2025},
  doi={10.58845/jstt.utt.2024.vn.4.4.67-75}
}`
  },
  {
    id: "pub-nat-4",
    category: "national",
    type: "National Journal",
    badgeClass: "badge-national",
    year: 2024,
    title: "Đánh giá độ tin cậy của phương pháp nhiệt hồng ngoại qua khảo sát vị trí và chiều sâu khuyết tật tách lớp bê tông bảo vệ cốt thép",
    authors: ["Tran QH", "Truong TC", "Tung PX", "Dang QM", "Toan NV"],
    venue: "Tạp chí Cầu đường Việt Nam, Số 11",
    doi: null,
    pdf: "pdf/2024_danh_gia_do_tin_cay_nhiet_hong_ngoai_be_tong.pdf",
    bibtex: `@article{tran2024danhgianhiet,
  title={Đánh giá độ tin cậy của phương pháp nhiệt hồng ngoại qua khảo sát vị trí và chiều sâu khuyết tật tách lớp bê tông bảo vệ cốt thép},
  author={Trần, Q. H. and Trương, T. C. and Phan, X. T. and Đặng, Q. M. and Nguyễn, V. T.},
  journal={Tạp chí Cầu đường Việt Nam},
  number={11},
  year={2024}
}`
  },
  {
    id: "pub-nat-5",
    category: "national",
    type: "National Journal",
    badgeClass: "badge-national",
    year: 2024,
    title: "Ứng dụng máy bay không người lái và mạng nơ-ron tích chập để phát hiện vết nứt trên bề mặt công trình",
    authors: ["Dang QM", "Truong TC", "Tung PX", "Tran QH"],
    venue: "Tạp chí Cầu đường Việt Nam, Số 5",
    doi: null,
    pdf: "pdf/2024_uav_cnn_phat_hien_vet_nut_be_mat_cong_trinh.pdf",
    bibtex: `@article{dang2024ungdungdrone,
  title={Ứng dụng máy bay không người lái và mạng nơ-ron tích chập để phát hiện vết nứt trên bề mặt công trình},
  author={Đặng, Q. M. and Trương, T. C. and Phan, X. T. and Trần, Q. H.},
  journal={Tạp chí Cầu đường Việt Nam},
  number={5},
  year={2024}
}`
  },

  // ================= CONFERENCES =================
  {
    id: "pub-conf-1",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2025,
    title: "Damage Classification of Steel Frames Using Long Short-Term Memory and Fully Convolutional Network Models",
    authors: ["Truong TC", "Tran TS", "Le VV", "Nguyen LD", "Tran NH"],
    venue: "SHM&ES, Nha Trang, Vietnam, 7-8 August 2025",
    doi: null,
    pdf: "pdf/2025_damage_classification_steel_frames_lstm.pdf",
    bibtex: `@inproceedings{truong2025damage,
  title={Damage Classification of Steel Frames Using Long Short-Term Memory and Fully Convolutional Network Models},
  author={Truong, T. C. and Tran, T. S. and Le, V. V. and Nguyen, L. D. and Tran, N. H.},
  booktitle={Structural Health Monitoring and Engineering Structures (SHM&ES)},
  year={2025},
  address={Nha Trang, Vietnam}
}`
  },
  {
    id: "pub-conf-2",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2025,
    title: "Automated UAV-Based Crack Detection for Concrete Bridges",
    authors: ["Truong TC", "Dang QM", "Pham XT", "Tran QH"],
    venue: "ICIIR, Fukuoka, Japan, 9-11 January 2025",
    doi: null,
    pdf: null,
    bibtex: `@inproceedings{truong2025automated,
  title={Automated UAV-Based Crack Detection for Concrete Bridges},
  author={Truong, T. C. and Dang, Q. M. and Pham, X. T. and Tran, Q. H.},
  booktitle={ICIIR},
  year={2025},
  address={Fukuoka, Japan}
}`
  },
  {
    id: "pub-conf-3",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2024,
    title: "Real-Time Application of Computer Vision for Displacement Monitoring of Industrial Steel Frame Structure",
    authors: ["Truong TC", "Ho CH", "Dang QM", "Pham XT", "Tran QH"],
    venue: "ICSCE, Ha Noi, Vietnam, 23-25 October 2024",
    doi: "https://doi.org/10.1007/978-981-95-1072-6_25",
    pdf: "pdf/2024_realtime_computer_vision_displacement_steel_frame.pdf",
    bibtex: `@inproceedings{truong2024realtime,
  title={Real-Time Application of Computer Vision for Displacement Monitoring of Industrial Steel Frame Structure},
  author={Truong, T. C. and Ho, C. H. and Dang, Q. M. and Pham, X. T. and Tran, Q. H.},
  booktitle={Proceedings of the International Conference on Sustainable Civil Engineering (ICSCE)},
  pages={25},
  year={2024},
  publisher={Springer},
  doi={10.1007/978-981-95-1072-6_25}
}`
  },
  {
    id: "pub-conf-4",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2023,
    title: "Applications of Passive Infrared Thermal Imaging for Detecting Delaminated Areas of Ancient Rock-cut Tunnel",
    authors: ["Tran QH", "Dang QM", "Pham XT", "Truong TC"],
    venue: "IOP Conference Series: Materials Science and Engineering, Vol. 1289(1), 012025",
    doi: "https://doi.org/10.1088/1757-899X/1289/1/012025",
    pdf: "pdf/2023_passive_infrared_delaminated_rock_cut_tunnel.pdf",
    bibtex: `@inproceedings{tran2023applications,
  title={Applications of Passive Infrared Thermal Imaging for Detecting Delaminated Areas of Ancient Rock-cut Tunnel},
  author={Tran, Q. H. and Dang, Q. M. and Pham, X. T. and Truong, T. C.},
  booktitle={IOP Conference Series: Materials Science and Engineering},
  volume={1289},
  number={1},
  pages={012025},
  year={2023},
  publisher={IOP Publishing},
  doi={10.1088/1757-899X/1289/1/012025}
}`
  },
  {
    id: "pub-conf-5",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2023,
    title: "A novel automated crack identification method for concrete bridge structure using an unmanned aerial vehicle",
    authors: ["Truong TC", "Dang QM", "Pham XT", "Do VP", "Tran QH"],
    venue: "IOP Conference Series: Materials Science and Engineering, Vol. 1289(1), 012037",
    doi: "https://doi.org/10.1088/1757-899X/1289/1/012037",
    pdf: "pdf/2023_automated_crack_identification_concrete_bridge_uav.pdf",
    bibtex: `@inproceedings{truong2023novel,
  title={A novel automated crack identification method for concrete bridge structure using an unmanned aerial vehicle},
  author={Truong, T. C. and Dang, Q. M. and Pham, X. T. and Do, V. P. and Tran, Q. H.},
  booktitle={IOP Conference Series: Materials Science and Engineering},
  volume={1289},
  number={1},
  pages={012037},
  year={2023},
  publisher={IOP Publishing},
  doi={10.1088/1757-899X/1289/1/012037}
}`
  },
  {
    id: "pub-conf-6",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2023,
    title: "Crack detection using pre-trained deep convolutional neural network",
    authors: ["Truong TC", "Dang QM", "Tran QH", "Pham XT"],
    venue: "MSDI, Nha Trang, Vietnam, 21-23 July 2023",
    doi: null,
    pdf: null,
    bibtex: `@inproceedings{truong2023crack,
  title={Crack detection using pre-trained deep convolutional neural network},
  author={Truong, T. C. and Dang, Q. M. and Tran, Q. H. and Pham, X. T.},
  booktitle={MSDI},
  year={2023},
  address={Nha Trang, Vietnam}
}`
  },
  {
    id: "pub-conf-7",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2022,
    title: "Topology optimization of plate structure using predetermined-shape holes",
    authors: ["Truong TC", "Nguyen TX", "Le NVA", "Ho CH"],
    venue: "ICATSD, Ho Chi Minh City, Viet Nam, 24-26 November 2022",
    doi: null,
    pdf: null,
    bibtex: `@inproceedings{truong2022topology,
  title={Topology optimization of plate structure using predetermined-shape holes},
  author={Truong, T. C. and Nguyen, T. X. and Le, N. V. A. and Ho, C. H.},
  booktitle={ICATSD},
  year={2022},
  address={Ho Chi Minh City, Vietnam}
}`
  },
  {
    id: "pub-conf-8",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2022,
    title: "Optimization of aggregates in concrete brick with recycled materials from stone mining",
    authors: ["Nguyen TX", "Chau HM", "Tran DH", "Truong TC"],
    venue: "GTSD, Nha Trang, Viet Nam, 29-30 July 2022",
    doi: null,
    pdf: "pdf/2022_optimization_aggregates_concrete_brick_recycled.pdf",
    bibtex: `@inproceedings{nguyen2022optimization,
  title={Optimization of aggregates in concrete brick with recycled materials from stone mining},
  author={Nguyen, T. X. and Chau, H. M. and Tran, D. H. and Truong, T. C.},
  booktitle={GTSD},
  year={2022},
  address={Nha Trang, Vietnam}
}`
  },
  {
    id: "pub-conf-9",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2022,
    title: "SSD21, Educational Toolbox for Static, Stability, and Dynamic Analysis of Frame",
    authors: ["Truong TC", "Le NVA", "Le CL", "Nguyen TX"],
    venue: "GTSD, Nha Trang, Viet Nam, 29-30 July 2022",
    doi: null,
    pdf: "pdf/2021_ssd21_educational_toolbox_frame_analysis.pdf",
    bibtex: `@inproceedings{truong2022ssd21,
  title={SSD21, Educational Toolbox for Static, Stability, and Dynamic Analysis of Frame},
  author={Truong, T. C. and Le, N. V. A. and Le, C. L. and Nguyen, T. X.},
  booktitle={GTSD},
  year={2022},
  address={Nha Trang, Vietnam}
}`
  },
  {
    id: "pub-conf-10",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2021,
    title: "The effect of welding speed on the mechanical properties of the FSW Cu/Al",
    authors: ["Tran HT", "Quach HN", "Phi CT", "Duong DH", "Truong TC", "Pham TH", "Ho HH", "Vu LH", "Chu HDA"],
    venue: "Advances in Engineering Research and Application: Proceedings of ICERA, pp. 805-809, Springer",
    doi: "https://doi.org/10.1007/978-3-030-64719-3_88",
    pdf: "pdf/2018_welding_speed_mechanical_properties_fsw_cu_al.pdf",
    bibtex: `@inproceedings{tran2021effect,
  title={The effect of welding speed on the mechanical properties of the FSW Cu/Al},
  author={Tran, H. T. and Quach, H. N. and Phi, C. T. and Duong, D. H. and Truong, T. C. and Pham, T. H. and Ho, H. H. and Vu, L. H. and Chu, H. D. A.},
  booktitle={International Conference on Engineering Research and Applications},
  pages={805--809},
  year={2021},
  publisher={Springer},
  doi={10.1007/978-3-030-64719-3_88}
}`
  },
  {
    id: "pub-conf-11",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2021,
    title: "Damage Detection Using Local Dominant Frequency of Pulse-Echo Laser Ultrasonic Waves",
    authors: ["Truong TC", "Le NVA"],
    venue: "Proceedings of the 2nd Annual International Conference on Material, Machines and Methods for Sustainable Development, pp. 147-151, Springer",
    doi: "https://doi.org/10.1007/978-3-030-69610-8_19",
    pdf: "pdf/2018_damage_detection_local_dominant_frequency_laser_ultrasonic.pdf",
    bibtex: `@inproceedings{truong2021damage,
  title={Damage Detection Using Local Dominant Frequency of Pulse-Echo Laser Ultrasonic Waves},
  author={Truong, T. C. and Le, N. V. A.},
  booktitle={Proceedings of MMMS2},
  pages={147--151},
  year={2021},
  publisher={Springer},
  doi={10.1007/978-3-030-69610-8_19}
}`
  },
  {
    id: "pub-conf-12",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2017,
    title: "Cure monitoring using long pulse and high power laser",
    authors: ["Truong TC", "Admed H", "Lee JR"],
    venue: "KSAS, Jeju, Korea, 15-18 November 2017",
    doi: null,
    pdf: null,
    bibtex: `@inproceedings{truong2017cure,
  title={Cure monitoring using long pulse and high power laser},
  author={Truong, T. C. and Admed, H. and Lee, J. R.},
  booktitle={KSAS},
  year={2017},
  address={Jeju, Korea}
}`
  },
  {
    id: "pub-conf-13",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2016,
    title: "A versatile inspection system for pipe structure using ultrasonic waves propagation imager",
    authors: ["Truong TC", "Lee JR"],
    venue: "Journal of Physics: Conference Series, Vol. 628(1), 012015",
    doi: "https://doi.org/10.1088/1742-6596/628/1/012015",
    pdf: "pdf/2023_passive_infrared_thermography_concrete_health.pdf",
    bibtex: `@article{truong2015versatile,
  title={A versatile inspection system for pipe structure using ultrasonic waves propagation imager},
  author={Truong, T. C. and Lee, J. R.},
  journal={Journal of Physics: Conference Series},
  volume={628},
  number={1},
  pages={012015},
  year={2015},
  publisher={IOP Publishing},
  doi={10.1088/1742-6596/628/1/012015}
}`
  },
  {
    id: "pub-conf-14",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2015,
    title: "Live Demonstration: LDV_UPI system for structural health monitoring of composite material",
    authors: ["Truong TC", "Park JY", "Jang JK", "Lee JR"],
    venue: "IEEE Sensors 2015",
    doi: "https://doi.org/10.1109/ICSENS.2015.7370294",
    pdf: "pdf/2015_live_demo_ldv_upi_shm_composite_material.pdf",
    bibtex: `@inproceedings{truong2015live,
  title={Live Demonstration: LDV UPI system for structural health monitoring of composite material},
  author={Truong, T. C. and Park, J. Y. and Jang, J. K. and Lee, J. R.},
  booktitle={IEEE Sensors},
  year={2015},
  doi={10.1109/ICSENS.2015.7370294}
}`
  },
  {
    id: "pub-conf-15",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2012,
    title: "Laser ultrasonic imaging of a rotating blade",
    authors: ["Park B", "Truong TC", "Yeum CM", "Sohn H"],
    venue: "Health Monitoring of Structural and Biological Systems, SPIE 8348, pp. 350-356",
    doi: "https://doi.org/10.1117/12.918007",
    pdf: "pdf/2013_laser_ultrasonic_imaging_rotating_structure.pdf",
    bibtex: `@inproceedings{park2012laser,
  title={Laser ultrasonic imaging of a rotating blade},
  author={Park, B. and Truong, T. C. and Yeum, C. M. and Sohn, H.},
  booktitle={Health Monitoring of Structural and Biological Systems},
  volume={8348},
  pages={350--356},
  year={2012},
  publisher={SPIE},
  doi={10.1117/12.918007}
}`
  },
  {
    id: "pub-conf-16",
    category: "conf",
    type: "Conference",
    badgeClass: "badge-conf",
    year: 2010,
    title: "Modal identification of Guangzhou new TV tower (Student Best Paper Award)",
    authors: ["Truong TC", "Cho S", "Yun CB"],
    venue: "EESK, Jeju, Korea, 2010",
    doi: null,
    pdf: null,
    bibtex: `@inproceedings{truong2010modal,
  title={Modal identification of Guangzhou new TV tower},
  author={Truong, T. C. and Cho, S. and Yun, C. B.},
  booktitle={Earthquake Engineering Society of Korea (EESK)},
  year={2010},
  address={Jeju, Korea},
  note={Student Best Paper Award}
}`
  },

  // ================= PATENTS =================
  {
    id: "pub-pat-1",
    category: "patent",
    type: "Patent",
    badgeClass: "badge-patent",
    year: 2014,
    title: "Laser ultrasonic imaging of a rotating blade",
    authors: ["Sohn H", "Park B", "Truong TC"],
    venue: "Korean Patent (Application number 1020120084325)",
    doi: "http://goo.gl/VeETTq",
    pdf: null,
    bibtex: `@misc{sohn2014koreanpatent,
  title={Laser ultrasonic imaging of a rotating blade},
  author={Sohn, H. and Park, B. and Truong, T. C.},
  year={2014},
  month=mar,
  note={Korean Patent App. 1020120084325}
}`
  },
  {
    id: "pub-pat-2",
    category: "patent",
    type: "Patent",
    badgeClass: "badge-patent",
    year: 2014,
    title: "Laser ultrasonic imaging method and laser ultrasonic imaging device for rotational structure",
    authors: ["Sohn H", "Park B", "Truong TC"],
    venue: "US / World Patent (Publication number WO-2014021564-A1)",
    doi: "http://www.google.com/patents/WO2014021564A1?cl=en",
    pdf: "pdf/2014_us_patent_laser_ultrasonic_imaging_rotational_structure.pdf",
    bibtex: `@misc{sohn2014uspatent,
  title={Laser ultrasonic imaging method and laser ultrasonic imaging device for rotational structure},
  author={Sohn, H. and Park, B. and Truong, T. C.},
  year={2014},
  month=feb,
  note={US/WO Patent WO-2014021564-A1}
}`
  },

  // ================= BOOKS =================
  {
    id: "pub-book-1",
    category: "book",
    type: "Book & Textbook",
    badgeClass: "badge-book",
    year: 2024,
    title: "Cơ học kết cấu công trình xây dựng: Tập 1",
    authors: ["Truong TC", "Dung TD", "Han HC", "Tung PX", "Dieu NH"],
    venue: "Nhà xuất bản Khoa học Kỹ thuật, ISBN: 978-604-67-3110-8",
    doi: null,
    pdf: "pdf/2012_fem_updating_canton_tower_regularization.pdf",
    bibtex: `@book{truong2024cohk1,
  title={Cơ học kết cấu công trình xây dựng: Tập 1},
  author={Trương, Thành Chung and Dương, Thụy Dũng and Hàn, Cảnh Hảo and Phan, Xuân Tùng and Nguyễn, Hồng Diệu},
  year={2024},
  publisher={Nhà xuất bản Khoa học Kỹ thuật},
  isbn={978-604-67-3110-8}
}`
  },
  {
    id: "pub-book-2",
    category: "book",
    type: "Book & Textbook",
    badgeClass: "badge-book",
    year: 2024,
    title: "Cơ học kết cấu công trình xây dựng: Tập 2",
    authors: ["Truong TC", "Nguyen TX", "Dung TD", "Dang QM", "Tung PX"],
    venue: "Giáo trình đào tạo đại học, Trường Đại học Nha Trang",
    doi: null,
    pdf: "pdf/2022_giao_trinh_co_hoc_ket_cau_2_ntu.pdf",
    bibtex: `@book{truong2024cohk2,
  title={Cơ học kết cấu công trình xây dựng: Tập 2},
  author={Trương, Thành Chung and Nguyễn, Thắng Xiêm and Dương, Thụy Dũng and Đặng, Quốc Mỹ and Phan, Xuân Tùng},
  year={2024},
  publisher={Đại học Nha Trang}
}`
  },
  {
    id: "pub-book-3",
    category: "book",
    type: "Book & Textbook",
    badgeClass: "badge-book",
    year: 2024,
    title: "Phân tích độ tin cậy kết cấu công trình xây dựng",
    authors: ["Tran QH", "Nguyen TX", "Dang QM", "Tung PX", "Truong TC"],
    venue: "Tài liệu chuyên khảo kết cấu công trình",
    doi: null,
    pdf: "pdf/2023_sach_phan_tich_do_tin_cay_ket_cau_ntu.pdf",
    bibtex: `@book{tran2024phantich,
  title={Phân tích độ tin cậy kết cấu công trình xây dựng},
  author={Trần, Quang Huy and Nguyễn, Thắng Xiêm and Đặng, Quốc Mỹ and Phan, Xuân Tùng and Trương, Thành Chung},
  year={2024}
}`
  }
];

// ================= DOM ELEMENTS & STATE =================
let currentFilter = 'all';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPublications();
  initFilters();
  initSearch();
  initNavScroll();
  initModal();
  updateCounts();
});

// ================= THEME TOGGLE =================
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.innerHTML = theme === 'dark' 
      ? `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>`
      : `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>`;
  }
}

// ================= PUBLICATIONS RENDERER =================
function renderPublications() {
  const container = document.getElementById('publicationsList');
  if (!container) return;

  const filtered = publicationsData.filter(item => {
    const matchFilter = currentFilter === 'all' || item.category === currentFilter;
    const query = currentSearch.toLowerCase().trim();
    const matchSearch = !query || 
      item.title.toLowerCase().includes(query) ||
      item.authors.some(a => a.toLowerCase().includes(query)) ||
      item.venue.toLowerCase().includes(query) ||
      item.year.toString().includes(query);

    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-strong);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.6;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <p style="font-size: 1.05rem; font-weight: 600;">No publications or documents found.</p>
        <p style="font-size: 0.88rem; margin-top: 0.35rem;">Try adjusting your search query or select "All".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const formattedAuthors = item.authors.map(a => {
      if (a.toLowerCase().includes("truong tc") || a.toLowerCase().includes("trương, thành chung") || a.toLowerCase().includes("trương, t. c.")) {
        return `<span class="author-self">${a}</span>`;
      }
      return a;
    }).join(", ");

    const pdfBtn = item.pdf ? `
      <a href="${item.pdf}" target="_blank" rel="noopener noreferrer" class="btn-action btn-pdf">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
        PDF
      </a>
    ` : '';

    const doiBtn = item.doi ? `
      <a href="${item.doi}" target="_blank" rel="noopener noreferrer" class="btn-action">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        DOI
      </a>
    ` : '';

    const bibBtn = item.bibtex ? `
      <button class="btn-action" onclick="showBibtexModal('${item.id}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        BibTeX
      </button>
    ` : '';

    return `
      <article class="pub-card" data-id="${item.id}">
        <div class="pub-meta-top">
          <div class="pub-badges-row">
            <span class="badge-pub-type ${item.badgeClass}">${item.type}</span>
            <span class="pub-year">${item.year}</span>
          </div>
        </div>
        <h3 class="pub-title">${item.title}</h3>
        <p class="pub-authors">${formattedAuthors}</p>
        <p class="pub-venue">${item.venue}</p>
        <div class="pub-actions">
          ${pdfBtn}
          ${doiBtn}
          ${bibBtn}
        </div>
      </article>
    `;
  }).join('');
}

// ================= FILTER & SEARCH =================
function initFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter') || 'all';
      renderPublications();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('pubSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderPublications();
  });
}

function updateCounts() {
  const counts = {
    all: publicationsData.length,
    journal: publicationsData.filter(p => p.category === 'journal').length,
    national: publicationsData.filter(p => p.category === 'national').length,
    conf: publicationsData.filter(p => p.category === 'conf').length,
    patent: publicationsData.filter(p => p.category === 'patent').length,
    book: publicationsData.filter(p => p.category === 'book').length
  };

  Object.keys(counts).forEach(key => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = counts[key];
  });

  const totalPubsEl = document.getElementById('statTotalPubs');
  if (totalPubsEl) totalPubsEl.textContent = publicationsData.length + "+";
}

// ================= BIBTEX MODAL & COPY =================
let activeBibtex = "";

window.showBibtexModal = function(id) {
  const item = publicationsData.find(p => p.id === id);
  if (!item || !item.bibtex) return;

  activeBibtex = item.bibtex;
  const modal = document.getElementById('bibtexModal');
  const codeEl = document.getElementById('bibtexCode');
  if (codeEl) codeEl.textContent = item.bibtex;
  if (modal) modal.classList.add('active');
};

function initModal() {
  const modal = document.getElementById('bibtexModal');
  const closeBtn = document.getElementById('closeBibtexModal');
  const copyBtn = document.getElementById('copyBibtexBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!activeBibtex) return;
      navigator.clipboard.writeText(activeBibtex).then(() => {
        showToast("BibTeX citation copied to clipboard!");
        if (modal) modal.classList.remove('active');
      }).catch(() => {
        showToast("Failed to copy citation!");
      });
    });
  }
}

// ================= TOAST NOTIFICATION =================
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${msg}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ================= NAV SCROLL HIGHLIGHT & MOBILE MENU =================
function initNavScroll() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
