window.BENCHMARK_DATA = {
  "lastUpdate": 1618684456805,
  "repoUrl": "https://github.com/kvignesh1420/io",
  "entries": {
    "Tensorflow-IO Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb9e6284182cfccdaa207ff118308109124bf44b",
          "message": "Merge pull request #1 from kvignesh1420/benchmarks-deps\n\n[Benchmarks] Test gh-pages deployment",
          "timestamp": "2021-01-19T00:59:18+05:30",
          "tree_id": "08e90708e7a2b56ce5ee09ae6475345ecca503a5",
          "url": "https://github.com/kvignesh1420/io/commit/cb9e6284182cfccdaa207ff118308109124bf44b"
        },
        "date": 1610998665101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.491048191737148,
            "unit": "iter/sec",
            "range": "stddev: 0.05557261686771086",
            "extra": "mean: 286.44691939998665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.602087493657056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501719182594938",
            "extra": "mean: 36.22914390912642 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2308909700523352,
            "unit": "iter/sec",
            "range": "stddev: 0.06376505732577742",
            "extra": "mean: 812.4196409999513 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2405368222627748,
            "unit": "iter/sec",
            "range": "stddev: 0.061047363578351",
            "extra": "mean: 806.1026339999898 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.25618867411407,
            "unit": "iter/sec",
            "range": "stddev: 0.0618458229784269",
            "extra": "mean: 796.058761400036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4856326729513054,
            "unit": "iter/sec",
            "range": "stddev: 0.07242107018808783",
            "extra": "mean: 2.0591695240000263 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.37472102685618164,
            "unit": "iter/sec",
            "range": "stddev: 0.07001756043549444",
            "extra": "mean: 2.66865195259993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6847729941895213,
            "unit": "iter/sec",
            "range": "stddev: 0.02005692189843298",
            "extra": "mean: 1.460337963800066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.438880257780524,
            "unit": "iter/sec",
            "range": "stddev: 0.05761366558549882",
            "extra": "mean: 290.7923292000305 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.031613377479741,
            "unit": "iter/sec",
            "range": "stddev: 0.071097431137356",
            "extra": "mean: 492.2196373999668 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9788885833483763,
            "unit": "iter/sec",
            "range": "stddev: 0.0701332347482097",
            "extra": "mean: 505.3341600000294 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8367826313551407,
            "unit": "iter/sec",
            "range": "stddev: 0.070336847800259",
            "extra": "mean: 544.430235200025 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.19742858240145,
            "unit": "iter/sec",
            "range": "stddev: 0.001536505222163243",
            "extra": "mean: 45.05026319998251 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5233.051842334429,
            "unit": "iter/sec",
            "range": "stddev: 0.00003276976326204323",
            "extra": "mean: 191.09308107941595 usec\nrounds: 2257"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3742.191987402714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003024912337500994",
            "extra": "mean: 267.2230616083529 usec\nrounds: 2451"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 883.1035847310947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630992229625104",
            "extra": "mean: 1.1323699929318034 msec\nrounds: 849"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 484.1565689188921,
            "unit": "iter/sec",
            "range": "stddev: 0.00011696312303605069",
            "extra": "mean: 2.0654475518796978 msec\nrounds: 453"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1546.5830888398486,
            "unit": "iter/sec",
            "range": "stddev: 0.00007678446069803498",
            "extra": "mean: 646.5866639923876 usec\nrounds: 997"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 673.5160001020761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000868882723923423",
            "extra": "mean: 1.48474572222255 msec\nrounds: 396"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1106.3071156390843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005249421964816356",
            "extra": "mean: 903.9081335225133 usec\nrounds: 719"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb9e6284182cfccdaa207ff118308109124bf44b",
          "message": "Merge pull request #1 from kvignesh1420/benchmarks-deps\n\n[Benchmarks] Test gh-pages deployment",
          "timestamp": "2021-01-19T00:59:18+05:30",
          "tree_id": "08e90708e7a2b56ce5ee09ae6475345ecca503a5",
          "url": "https://github.com/kvignesh1420/io/commit/cb9e6284182cfccdaa207ff118308109124bf44b"
        },
        "date": 1610998732331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.684593713977604,
            "unit": "iter/sec",
            "range": "stddev: 0.04430136755121437",
            "extra": "mean: 271.4003436000212 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.04829316602385,
            "unit": "iter/sec",
            "range": "stddev: 0.001243284709017775",
            "extra": "mean: 36.97090954545439 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.376936956011252,
            "unit": "iter/sec",
            "range": "stddev: 0.05198720772097855",
            "extra": "mean: 726.2496627999781 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4193214926394746,
            "unit": "iter/sec",
            "range": "stddev: 0.07163650820136498",
            "extra": "mean: 704.5620073999771 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3329224207203711,
            "unit": "iter/sec",
            "range": "stddev: 0.06112127363498862",
            "extra": "mean: 750.2312095999969 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5366656100329126,
            "unit": "iter/sec",
            "range": "stddev: 0.0657948321710283",
            "extra": "mean: 1.8633577059999653 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.40312209984538244,
            "unit": "iter/sec",
            "range": "stddev: 0.06761739116906143",
            "extra": "mean: 2.480638001200009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7497430825389206,
            "unit": "iter/sec",
            "range": "stddev: 0.013822740132501985",
            "extra": "mean: 1.333790232000024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.8090329623002277,
            "unit": "iter/sec",
            "range": "stddev: 0.055076197804702035",
            "extra": "mean: 262.53382679999504 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.171611015890867,
            "unit": "iter/sec",
            "range": "stddev: 0.0716532594839811",
            "extra": "mean: 460.48762539996915 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.017028702697969,
            "unit": "iter/sec",
            "range": "stddev: 0.06807519691846384",
            "extra": "mean: 495.77876540001853 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9274638768229881,
            "unit": "iter/sec",
            "range": "stddev: 0.05694331389476755",
            "extra": "mean: 518.8164676000497 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.2652210261045,
            "unit": "iter/sec",
            "range": "stddev: 0.0015219432110033396",
            "extra": "mean: 39.58010099997864 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5778.368627730388,
            "unit": "iter/sec",
            "range": "stddev: 0.000019805833944215202",
            "extra": "mean: 173.05922560928366 usec\nrounds: 2296"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4173.016153867031,
            "unit": "iter/sec",
            "range": "stddev: 0.00002554383067816423",
            "extra": "mean: 239.63482601746574 usec\nrounds: 2437"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 987.5767493058692,
            "unit": "iter/sec",
            "range": "stddev: 0.00010050129915282569",
            "extra": "mean: 1.0125795293407451 msec\nrounds: 852"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 551.7421730710074,
            "unit": "iter/sec",
            "range": "stddev: 0.00020116511628692372",
            "extra": "mean: 1.812440753683883 msec\nrounds: 475"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1687.48303394588,
            "unit": "iter/sec",
            "range": "stddev: 0.00007261372475104122",
            "extra": "mean: 592.598550553529 usec\nrounds: 1266"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 771.1318232597779,
            "unit": "iter/sec",
            "range": "stddev: 0.00014337590318773576",
            "extra": "mean: 1.2967951390888472 msec\nrounds: 417"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1274.5074578967508,
            "unit": "iter/sec",
            "range": "stddev: 0.00007965626288517291",
            "extra": "mean: 784.6168288808956 usec\nrounds: 824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c652bee06fbe3d86120a49d7f823491a85234db",
          "message": "Disable s3 macOS for now as docker is not working on GitHub Actions for macOS (#1277)\n\n* Revert \"[s3] add support for testing on macOS (#1253)\"\r\n\r\nThis reverts commit 81789bde99e62523ca4d9f460bb345c666902acd.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-19T08:23:38-08:00",
          "tree_id": "1f4ebd0d670b0eac026c20b6f881707acc9b0a05",
          "url": "https://github.com/kvignesh1420/io/commit/5c652bee06fbe3d86120a49d7f823491a85234db"
        },
        "date": 1611078318678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.998816302388738,
            "unit": "iter/sec",
            "range": "stddev: 0.04535680364874089",
            "extra": "mean: 250.07400299999745 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 30.618461382920504,
            "unit": "iter/sec",
            "range": "stddev: 0.00024034626875577594",
            "extra": "mean: 32.66003433333253 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.358490874071668,
            "unit": "iter/sec",
            "range": "stddev: 0.05321545241406406",
            "extra": "mean: 736.1109442000156 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.34707914881111,
            "unit": "iter/sec",
            "range": "stddev: 0.062349689125015095",
            "extra": "mean: 742.346877600005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3561590039277855,
            "unit": "iter/sec",
            "range": "stddev: 0.054711399280395756",
            "extra": "mean: 737.3766624000154 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5385873472374139,
            "unit": "iter/sec",
            "range": "stddev: 0.03282146931728121",
            "extra": "mean: 1.8567090465999967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.41988431163200596,
            "unit": "iter/sec",
            "range": "stddev: 0.05744450047419427",
            "extra": "mean: 2.381608391400005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7638348071248686,
            "unit": "iter/sec",
            "range": "stddev: 0.016191064780096628",
            "extra": "mean: 1.3091835965999963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.6835522472237083,
            "unit": "iter/sec",
            "range": "stddev: 0.0501738065970658",
            "extra": "mean: 271.4770778000229 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.2332095018067446,
            "unit": "iter/sec",
            "range": "stddev: 0.05623308733662727",
            "extra": "mean: 447.7860224000324 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9948337556017444,
            "unit": "iter/sec",
            "range": "stddev: 0.05645358423871867",
            "extra": "mean: 501.29490599999826 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.078608890035942,
            "unit": "iter/sec",
            "range": "stddev: 0.06440487658928923",
            "extra": "mean: 481.0909857999832 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.858738560924035,
            "unit": "iter/sec",
            "range": "stddev: 0.001507618332086264",
            "extra": "mean: 35.89537974998791 msec\nrounds: 8"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5888.690187800606,
            "unit": "iter/sec",
            "range": "stddev: 0.00001574401101266079",
            "extra": "mean: 169.81705066971688 usec\nrounds: 2684"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4023.632728662761,
            "unit": "iter/sec",
            "range": "stddev: 0.000016615063857872653",
            "extra": "mean: 248.5316298568697 usec\nrounds: 2599"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 979.0693999132537,
            "unit": "iter/sec",
            "range": "stddev: 0.00006982638609723183",
            "extra": "mean: 1.0213780556195513 msec\nrounds: 881"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 514.8827524101036,
            "unit": "iter/sec",
            "range": "stddev: 0.00010886540254634128",
            "extra": "mean: 1.94218974187642 msec\nrounds: 523"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1591.0454061004525,
            "unit": "iter/sec",
            "range": "stddev: 0.00003972231907453313",
            "extra": "mean: 628.5175747755271 usec\nrounds: 1237"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 723.9463872649139,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287259800540408",
            "extra": "mean: 1.3813177572140707 msec\nrounds: 416"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1186.2238366129664,
            "unit": "iter/sec",
            "range": "stddev: 0.000047841000174074",
            "extra": "mean: 843.0112168840809 usec\nrounds: 853"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c652bee06fbe3d86120a49d7f823491a85234db",
          "message": "Disable s3 macOS for now as docker is not working on GitHub Actions for macOS (#1277)\n\n* Revert \"[s3] add support for testing on macOS (#1253)\"\r\n\r\nThis reverts commit 81789bde99e62523ca4d9f460bb345c666902acd.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-19T08:23:38-08:00",
          "tree_id": "1f4ebd0d670b0eac026c20b6f881707acc9b0a05",
          "url": "https://github.com/kvignesh1420/io/commit/5c652bee06fbe3d86120a49d7f823491a85234db"
        },
        "date": 1611078391997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7801408110013086,
            "unit": "iter/sec",
            "range": "stddev: 0.03394962914704293",
            "extra": "mean: 264.54040999999506 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 30.88254969253781,
            "unit": "iter/sec",
            "range": "stddev: 0.0003180052075030545",
            "extra": "mean: 32.380746083333634 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3484456510535145,
            "unit": "iter/sec",
            "range": "stddev: 0.052883169948141635",
            "extra": "mean: 741.5945901999976 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3508346943199505,
            "unit": "iter/sec",
            "range": "stddev: 0.04780938967538579",
            "extra": "mean: 740.2830296000275 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.326271845050379,
            "unit": "iter/sec",
            "range": "stddev: 0.04978268492244799",
            "extra": "mean: 753.9932358000215 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5236329411074914,
            "unit": "iter/sec",
            "range": "stddev: 0.04759780023971768",
            "extra": "mean: 1.9097347043999662 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.408429361135874,
            "unit": "iter/sec",
            "range": "stddev: 0.05167215723061913",
            "extra": "mean: 2.448403800399956 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7503733660145907,
            "unit": "iter/sec",
            "range": "stddev: 0.01185158565983973",
            "extra": "mean: 1.3326699018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.665741735754231,
            "unit": "iter/sec",
            "range": "stddev: 0.05464616862733885",
            "extra": "mean: 272.7960865999876 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.111098695129866,
            "unit": "iter/sec",
            "range": "stddev: 0.05779236811531943",
            "extra": "mean: 473.68699639998795 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0356825503395175,
            "unit": "iter/sec",
            "range": "stddev: 0.055611890650507756",
            "extra": "mean: 491.2357281999675 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.0918302143096366,
            "unit": "iter/sec",
            "range": "stddev: 0.05581930432469333",
            "extra": "mean: 478.05027060001066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 26.083015135131483,
            "unit": "iter/sec",
            "range": "stddev: 0.001167446889112617",
            "extra": "mean: 38.339125857159424 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5537.181827470642,
            "unit": "iter/sec",
            "range": "stddev: 0.000038157506538711604",
            "extra": "mean: 180.5972841706004 usec\nrounds: 2868"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3974.936825653404,
            "unit": "iter/sec",
            "range": "stddev: 0.000045476897244137064",
            "extra": "mean: 251.576325325779 usec\nrounds: 2456"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 919.5572653386528,
            "unit": "iter/sec",
            "range": "stddev: 0.00021034908887416595",
            "extra": "mean: 1.0874798532875731 msec\nrounds: 852"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 489.96176265248926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000927460707624628",
            "extra": "mean: 2.0409755948838417 msec\nrounds: 469"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1552.4282413272867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006518547498506211",
            "extra": "mean: 644.1521568462484 usec\nrounds: 1205"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 705.0322134390971,
            "unit": "iter/sec",
            "range": "stddev: 0.00019930965200678485",
            "extra": "mean: 1.4183749067607438 msec\nrounds: 429"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1172.5395508577114,
            "unit": "iter/sec",
            "range": "stddev: 0.000059349908171555086",
            "extra": "mean: 852.849696429004 usec\nrounds: 728"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "171b826db86c7ea3792beb4ebde34cd5f1040521",
          "message": "remove docker based mongodb tests in macos (#1279)",
          "timestamp": "2021-01-20T08:40:36-08:00",
          "tree_id": "9efab47cc944423e5f301267aaaa1484f2fbadbd",
          "url": "https://github.com/kvignesh1420/io/commit/171b826db86c7ea3792beb4ebde34cd5f1040521"
        },
        "date": 1611249333776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.9805845998957485,
            "unit": "iter/sec",
            "range": "stddev: 0.055024661734253105",
            "extra": "mean: 251.21938119998504 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.343515793464938,
            "unit": "iter/sec",
            "range": "stddev: 0.0015661971981878015",
            "extra": "mean: 36.57174181818267 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.395722146013028,
            "unit": "iter/sec",
            "range": "stddev: 0.07052076124531698",
            "extra": "mean: 716.4749824000182 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3976810227157364,
            "unit": "iter/sec",
            "range": "stddev: 0.06970277350252023",
            "extra": "mean: 715.470829000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4432662575763566,
            "unit": "iter/sec",
            "range": "stddev: 0.07825608914134645",
            "extra": "mean: 692.872846399996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5761479190699734,
            "unit": "iter/sec",
            "range": "stddev: 0.086390050375613",
            "extra": "mean: 1.7356653854000115 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4463785583379367,
            "unit": "iter/sec",
            "range": "stddev: 0.11781411826531185",
            "extra": "mean: 2.2402509737999936 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7673982135602484,
            "unit": "iter/sec",
            "range": "stddev: 0.0658000691885962",
            "extra": "mean: 1.3031044148000093 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 4.826572108146141,
            "unit": "iter/sec",
            "range": "stddev: 0.0008833214183139168",
            "extra": "mean: 207.18637940003646 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.441339957129914,
            "unit": "iter/sec",
            "range": "stddev: 0.08179772544759088",
            "extra": "mean: 409.61112240001967 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.5820161927405691,
            "unit": "iter/sec",
            "range": "stddev: 0.3550067143773905",
            "extra": "mean: 632.1047816000373 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.299036837920454,
            "unit": "iter/sec",
            "range": "stddev: 0.07769972696363608",
            "extra": "mean: 434.9647572000322 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.37588569927795,
            "unit": "iter/sec",
            "range": "stddev: 0.0029328589688453043",
            "extra": "mean: 39.40749150002887 msec\nrounds: 8"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6771.463517881874,
            "unit": "iter/sec",
            "range": "stddev: 0.000009925154508051075",
            "extra": "mean: 147.6785627448528 usec\nrounds: 2040"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4786.101578863052,
            "unit": "iter/sec",
            "range": "stddev: 0.000009966656252747496",
            "extra": "mean: 208.9383151449017 usec\nrounds: 2694"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1179.06277705313,
            "unit": "iter/sec",
            "range": "stddev: 0.00001232984203287119",
            "extra": "mean: 848.1312610846154 usec\nrounds: 1015"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 593.262218434704,
            "unit": "iter/sec",
            "range": "stddev: 0.000058898437485458786",
            "extra": "mean: 1.6855952880978256 msec\nrounds: 479"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1888.5060808742376,
            "unit": "iter/sec",
            "range": "stddev: 0.000025430340217802246",
            "extra": "mean: 529.5190786661775 usec\nrounds: 1411"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 863.0883025659824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003083825289138204",
            "extra": "mean: 1.1586299999976548 msec\nrounds: 443"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1441.5930235361566,
            "unit": "iter/sec",
            "range": "stddev: 0.000014830407270464881",
            "extra": "mean: 693.6770528668691 usec\nrounds: 889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "171b826db86c7ea3792beb4ebde34cd5f1040521",
          "message": "remove docker based mongodb tests in macos (#1279)",
          "timestamp": "2021-01-20T08:40:36-08:00",
          "tree_id": "9efab47cc944423e5f301267aaaa1484f2fbadbd",
          "url": "https://github.com/kvignesh1420/io/commit/171b826db86c7ea3792beb4ebde34cd5f1040521"
        },
        "date": 1611249569624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.8770192106324237,
            "unit": "iter/sec",
            "range": "stddev: 0.04190542388838907",
            "extra": "mean: 257.9301122000061 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.821187442143152,
            "unit": "iter/sec",
            "range": "stddev: 0.0014317608456028896",
            "extra": "mean: 34.69669672727542 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3795200577542772,
            "unit": "iter/sec",
            "range": "stddev: 0.054689310014675405",
            "extra": "mean: 724.88978639999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3725173366329497,
            "unit": "iter/sec",
            "range": "stddev: 0.05276674311222895",
            "extra": "mean: 728.5882467999954 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3629457644692449,
            "unit": "iter/sec",
            "range": "stddev: 0.05415947528126884",
            "extra": "mean: 733.7049104000243 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5552767609037971,
            "unit": "iter/sec",
            "range": "stddev: 0.04862839436694109",
            "extra": "mean: 1.8009037481999939 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.43313630670775083,
            "unit": "iter/sec",
            "range": "stddev: 0.07200544868461846",
            "extra": "mean: 2.3087420391999784 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7505183797801691,
            "unit": "iter/sec",
            "range": "stddev: 0.05091469171162082",
            "extra": "mean: 1.3324124057999824 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 4.186263749899343,
            "unit": "iter/sec",
            "range": "stddev: 0.005123997687476092",
            "extra": "mean: 238.8764922000064 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.1483020678489075,
            "unit": "iter/sec",
            "range": "stddev: 0.056656785770686446",
            "extra": "mean: 465.4838883999673 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.153781859812749,
            "unit": "iter/sec",
            "range": "stddev: 0.05787394073965231",
            "extra": "mean: 464.29957400000603 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.0889230110469907,
            "unit": "iter/sec",
            "range": "stddev: 0.06121314658544686",
            "extra": "mean: 478.71558440001536 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.71768771298159,
            "unit": "iter/sec",
            "range": "stddev: 0.0018023102047914318",
            "extra": "mean: 38.88374457145411 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5980.016773333726,
            "unit": "iter/sec",
            "range": "stddev: 0.000012789490559730796",
            "extra": "mean: 167.22361122116425 usec\nrounds: 2549"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4085.540954357201,
            "unit": "iter/sec",
            "range": "stddev: 0.000013900274737621724",
            "extra": "mean: 244.7656286332186 usec\nrounds: 2340"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 920.6136040579453,
            "unit": "iter/sec",
            "range": "stddev: 0.00004258034762749013",
            "extra": "mean: 1.0862320473998317 msec\nrounds: 865"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 488.20904937679364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000749927667360987",
            "extra": "mean: 2.0483028761480666 msec\nrounds: 436"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1499.3696720482417,
            "unit": "iter/sec",
            "range": "stddev: 0.000038625204652661974",
            "extra": "mean: 666.9469301949608 usec\nrounds: 1232"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 687.4575978713079,
            "unit": "iter/sec",
            "range": "stddev: 0.00003186855004381587",
            "extra": "mean: 1.4546351703675549 msec\nrounds: 405"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1141.1833001451366,
            "unit": "iter/sec",
            "range": "stddev: 0.000014526795115964835",
            "extra": "mean: 876.2834155326487 usec\nrounds: 734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e8fa4fe9b213e9eb1007710748b5e2cd03eb173",
          "message": "Bump Apache Arrow to 3.0.0 (#1285)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-27T11:18:15+05:30",
          "tree_id": "e1d68828e7bd83e2575db40840d0d83f39249fad",
          "url": "https://github.com/kvignesh1420/io/commit/4e8fa4fe9b213e9eb1007710748b5e2cd03eb173"
        },
        "date": 1611840362559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 4336.426128599235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005899407196975986",
            "extra": "mean: 230.60464316568974 usec\nrounds: 1390"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3420.123515336641,
            "unit": "iter/sec",
            "range": "stddev: 0.00012026333021074251",
            "extra": "mean: 292.3871010844386 usec\nrounds: 2582"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 988.4559071867418,
            "unit": "iter/sec",
            "range": "stddev: 0.00019009245706507846",
            "extra": "mean: 1.0116789152953864 msec\nrounds: 850"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 568.781598626456,
            "unit": "iter/sec",
            "range": "stddev: 0.0002773891659537759",
            "extra": "mean: 1.758144079229863 msec\nrounds: 467"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1560.368256278314,
            "unit": "iter/sec",
            "range": "stddev: 0.00017346067348146757",
            "extra": "mean: 640.8743551250736 usec\nrounds: 1346"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 563.7575072763021,
            "unit": "iter/sec",
            "range": "stddev: 0.0002505830558485752",
            "extra": "mean: 1.7738122988930627 msec\nrounds: 271"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 972.3847208242743,
            "unit": "iter/sec",
            "range": "stddev: 0.00021147930867717514",
            "extra": "mean: 1.0283995404126844 msec\nrounds: 631"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.504042949687956,
            "unit": "iter/sec",
            "range": "stddev: 0.036988175788883644",
            "extra": "mean: 285.38462980000077 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.136067476005866,
            "unit": "iter/sec",
            "range": "stddev: 0.002386658943304901",
            "extra": "mean: 35.54156958333957 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.9044177292410519,
            "unit": "iter/sec",
            "range": "stddev: 0.09235642253642298",
            "extra": "mean: 1.1056837650000033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8992234109692877,
            "unit": "iter/sec",
            "range": "stddev: 0.07691966872076153",
            "extra": "mean: 1.112070691000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8784128592050283,
            "unit": "iter/sec",
            "range": "stddev: 0.07794487717656477",
            "extra": "mean: 1.138416849800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.42866260601404477,
            "unit": "iter/sec",
            "range": "stddev: 0.15548640258654287",
            "extra": "mean: 2.3328370283999904 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3298228616603514,
            "unit": "iter/sec",
            "range": "stddev: 0.049678064591395",
            "extra": "mean: 3.031930518599984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6911097661046097,
            "unit": "iter/sec",
            "range": "stddev: 0.06150166008492747",
            "extra": "mean: 1.4469481536000104 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.4872942295062557,
            "unit": "iter/sec",
            "range": "stddev: 0.0682451385013836",
            "extra": "mean: 402.0433079999975 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.594085966569436,
            "unit": "iter/sec",
            "range": "stddev: 0.06604039085129546",
            "extra": "mean: 627.318739999987 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.4637897417637225,
            "unit": "iter/sec",
            "range": "stddev: 0.05013929671436861",
            "extra": "mean: 683.1582238000237 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.503826134908102,
            "unit": "iter/sec",
            "range": "stddev: 0.05583666179653704",
            "extra": "mean: 664.9704887999633 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 21.68934422906093,
            "unit": "iter/sec",
            "range": "stddev: 0.006740307379291827",
            "extra": "mean: 46.105589428569665 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e8fa4fe9b213e9eb1007710748b5e2cd03eb173",
          "message": "Bump Apache Arrow to 3.0.0 (#1285)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-27T11:18:15+05:30",
          "tree_id": "e1d68828e7bd83e2575db40840d0d83f39249fad",
          "url": "https://github.com/kvignesh1420/io/commit/4e8fa4fe9b213e9eb1007710748b5e2cd03eb173"
        },
        "date": 1611840363677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5358.103952993848,
            "unit": "iter/sec",
            "range": "stddev: 0.000010009097128700675",
            "extra": "mean: 186.6331838226559 usec\nrounds: 1360"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3786.7386726906357,
            "unit": "iter/sec",
            "range": "stddev: 0.000010546250192075396",
            "extra": "mean: 264.07948539249435 usec\nrounds: 2396"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 909.7182742221913,
            "unit": "iter/sec",
            "range": "stddev: 0.000015977341927212292",
            "extra": "mean: 1.0992414116941855 msec\nrounds: 838"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 477.5098986695944,
            "unit": "iter/sec",
            "range": "stddev: 0.000014681018300719517",
            "extra": "mean: 2.0941974245688555 msec\nrounds: 464"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1360.2515261563485,
            "unit": "iter/sec",
            "range": "stddev: 0.00005157193030038377",
            "extra": "mean: 735.1581533054344 usec\nrounds: 1135"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 667.9619469724203,
            "unit": "iter/sec",
            "range": "stddev: 0.000020099267834171022",
            "extra": "mean: 1.497091270741639 msec\nrounds: 229"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1106.6356569531208,
            "unit": "iter/sec",
            "range": "stddev: 0.00002276839678610569",
            "extra": "mean: 903.6397785638692 usec\nrounds: 709"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.3365107882034373,
            "unit": "iter/sec",
            "range": "stddev: 0.04921476978925725",
            "extra": "mean: 299.714301400013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.722058445529782,
            "unit": "iter/sec",
            "range": "stddev: 0.0009515304161467193",
            "extra": "mean: 37.42226677777833 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.258693589884933,
            "unit": "iter/sec",
            "range": "stddev: 0.06110872898255171",
            "extra": "mean: 794.4745313999874 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2729938505083362,
            "unit": "iter/sec",
            "range": "stddev: 0.055178032151419",
            "extra": "mean: 785.5497492000268 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2087515316682844,
            "unit": "iter/sec",
            "range": "stddev: 0.0597568256538891",
            "extra": "mean: 827.2998824000069 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.47267255791890267,
            "unit": "iter/sec",
            "range": "stddev: 0.09055699110998232",
            "extra": "mean: 2.1156294844000056 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3941454795250071,
            "unit": "iter/sec",
            "range": "stddev: 0.07172299758803252",
            "extra": "mean: 2.5371342612000034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7245824102231635,
            "unit": "iter/sec",
            "range": "stddev: 0.015016826485611335",
            "extra": "mean: 1.380105266000055 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.5342799242852263,
            "unit": "iter/sec",
            "range": "stddev: 0.056281803858079536",
            "extra": "mean: 282.943066599978 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.050735339122521,
            "unit": "iter/sec",
            "range": "stddev: 0.07834702742643337",
            "extra": "mean: 487.6299642000049 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9057611385240163,
            "unit": "iter/sec",
            "range": "stddev: 0.0613882770013601",
            "extra": "mean: 524.724730600019 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8831611702008146,
            "unit": "iter/sec",
            "range": "stddev: 0.06705235554468181",
            "extra": "mean: 531.0219941999776 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 21.93908259766351,
            "unit": "iter/sec",
            "range": "stddev: 0.0007134965440374391",
            "extra": "mean: 45.580757333330745 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10176247e2bf8d495eedd209fae92751c7cfef2a",
          "message": "Update azure lite v0.3.0 (#1288)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-29T20:05:10-08:00",
          "tree_id": "fe594a63db921cb0a7b9e706173bffc6d1549bf2",
          "url": "https://github.com/kvignesh1420/io/commit/10176247e2bf8d495eedd209fae92751c7cfef2a"
        },
        "date": 1612024230191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3696.1086490145995,
            "unit": "iter/sec",
            "range": "stddev: 0.000027747063744398652",
            "extra": "mean: 270.55481723098285 usec\nrounds: 1242"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2899.2049115170717,
            "unit": "iter/sec",
            "range": "stddev: 0.0001832050987692717",
            "extra": "mean: 344.92215297632356 usec\nrounds: 2301"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 829.4921819082955,
            "unit": "iter/sec",
            "range": "stddev: 0.00018396942884736937",
            "extra": "mean: 1.2055568717952727 msec\nrounds: 663"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 478.90744364421505,
            "unit": "iter/sec",
            "range": "stddev: 0.000087133983015624",
            "extra": "mean: 2.0880861495711263 msec\nrounds: 468"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1306.9422030199296,
            "unit": "iter/sec",
            "range": "stddev: 0.00006614170224323705",
            "extra": "mean: 765.1447766315271 usec\nrounds: 1164"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 501.58701553842906,
            "unit": "iter/sec",
            "range": "stddev: 0.00005844098047003569",
            "extra": "mean: 1.993672023041803 msec\nrounds: 217"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 845.3847374665812,
            "unit": "iter/sec",
            "range": "stddev: 0.00029086584103765777",
            "extra": "mean: 1.1828933687598433 msec\nrounds: 621"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 2.935551861701063,
            "unit": "iter/sec",
            "range": "stddev: 0.04366260608405744",
            "extra": "mean: 340.65145060000077 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.603814127108233,
            "unit": "iter/sec",
            "range": "stddev: 0.0009158824441725174",
            "extra": "mean: 37.58859520000328 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7759709488743204,
            "unit": "iter/sec",
            "range": "stddev: 0.06576887096739663",
            "extra": "mean: 1.2887080392000143 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.769341092269965,
            "unit": "iter/sec",
            "range": "stddev: 0.0731210108671552",
            "extra": "mean: 1.2998135807999915 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7851249843602979,
            "unit": "iter/sec",
            "range": "stddev: 0.05397462712387723",
            "extra": "mean: 1.2736825600000201 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3851612660040937,
            "unit": "iter/sec",
            "range": "stddev: 0.07508587435539682",
            "extra": "mean: 2.5963150718000065 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2928934718985116,
            "unit": "iter/sec",
            "range": "stddev: 0.06138562074553396",
            "extra": "mean: 3.414210612199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5914415658529754,
            "unit": "iter/sec",
            "range": "stddev: 0.012584236364938666",
            "extra": "mean: 1.6907841074000316 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.221216067614241,
            "unit": "iter/sec",
            "range": "stddev: 0.01447514425730772",
            "extra": "mean: 450.2038386000322 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.320462133266884,
            "unit": "iter/sec",
            "range": "stddev: 0.05706738182068219",
            "extra": "mean: 757.3106224000185 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.352310774911287,
            "unit": "iter/sec",
            "range": "stddev: 0.06472805223923508",
            "extra": "mean: 739.474992400028 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3069502366493593,
            "unit": "iter/sec",
            "range": "stddev: 0.06800034441628687",
            "extra": "mean: 765.1400733999708 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.879296919564684,
            "unit": "iter/sec",
            "range": "stddev: 0.0008396870657510748",
            "extra": "mean: 43.70763680001346 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10176247e2bf8d495eedd209fae92751c7cfef2a",
          "message": "Update azure lite v0.3.0 (#1288)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-29T20:05:10-08:00",
          "tree_id": "fe594a63db921cb0a7b9e706173bffc6d1549bf2",
          "url": "https://github.com/kvignesh1420/io/commit/10176247e2bf8d495eedd209fae92751c7cfef2a"
        },
        "date": 1612024288268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3937.0314321880546,
            "unit": "iter/sec",
            "range": "stddev: 0.00010130321622122078",
            "extra": "mean: 253.99848013005004 usec\nrounds: 1258"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3282.3587053130072,
            "unit": "iter/sec",
            "range": "stddev: 0.00011264630128196074",
            "extra": "mean: 304.6589631966015 usec\nrounds: 2228"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 904.1066183273074,
            "unit": "iter/sec",
            "range": "stddev: 0.0003011481764838814",
            "extra": "mean: 1.106064240354866 msec\nrounds: 778"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 497.65280115951276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003912395797323505",
            "extra": "mean: 2.009433077981349 msec\nrounds: 436"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1476.58167705257,
            "unit": "iter/sec",
            "range": "stddev: 0.0002017956118267182",
            "extra": "mean: 677.2398815053137 usec\nrounds: 1460"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 501.9683172401537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005580899361292027",
            "extra": "mean: 1.9921576036871185 msec\nrounds: 217"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 915.6933817684398,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775225291524783",
            "extra": "mean: 1.092068611513542 msec\nrounds: 677"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.368654568049988,
            "unit": "iter/sec",
            "range": "stddev: 0.03389621385357294",
            "extra": "mean: 296.8544205999933 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.76560269043715,
            "unit": "iter/sec",
            "range": "stddev: 0.003599203189354541",
            "extra": "mean: 38.811434454477094 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8478185372909496,
            "unit": "iter/sec",
            "range": "stddev: 0.05233100630583962",
            "extra": "mean: 1.1794976826000039 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8287245623418299,
            "unit": "iter/sec",
            "range": "stddev: 0.08252683755893636",
            "extra": "mean: 1.2066735383999911 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8430346198372444,
            "unit": "iter/sec",
            "range": "stddev: 0.04804608433204194",
            "extra": "mean: 1.1861909066000862 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.38238234738892635,
            "unit": "iter/sec",
            "range": "stddev: 0.10285525187131905",
            "extra": "mean: 2.6151834853999842 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2957972177649763,
            "unit": "iter/sec",
            "range": "stddev: 0.09031393580233549",
            "extra": "mean: 3.380694407999954 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6468152090808099,
            "unit": "iter/sec",
            "range": "stddev: 0.015298791430224088",
            "extra": "mean: 1.5460366206000344 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.384352502818935,
            "unit": "iter/sec",
            "range": "stddev: 0.04753212544124558",
            "extra": "mean: 419.4010738000088 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.520662233804347,
            "unit": "iter/sec",
            "range": "stddev: 0.06509625436988647",
            "extra": "mean: 657.6082300000508 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.4742314162398917,
            "unit": "iter/sec",
            "range": "stddev: 0.06380128636995838",
            "extra": "mean: 678.3195562000401 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.4889145931133279,
            "unit": "iter/sec",
            "range": "stddev: 0.059558279975552776",
            "extra": "mean: 671.6301960000237 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.684320334953405,
            "unit": "iter/sec",
            "range": "stddev: 0.002905427545617001",
            "extra": "mean: 44.083313285747344 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "39031ff25844e056470623a28778f562f010eb3a",
          "message": "add reference to github-pages benchmarks",
          "timestamp": "2021-01-30T21:55:23+05:30",
          "tree_id": "850fc60467b9d98d83b7fb922f160ee38630d2d4",
          "url": "https://github.com/kvignesh1420/io/commit/39031ff25844e056470623a28778f562f010eb3a"
        },
        "date": 1612024500632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3419.4972690118234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001170763873916384",
            "extra": "mean: 292.44064882349886 usec\nrounds: 1233"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2935.3725889465595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000612256224370349",
            "extra": "mean: 340.67225529242876 usec\nrounds: 2362"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 815.7122448457659,
            "unit": "iter/sec",
            "range": "stddev: 0.0002395108875658458",
            "extra": "mean: 1.225922506764722 msec\nrounds: 813"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 468.50896443066927,
            "unit": "iter/sec",
            "range": "stddev: 0.00022662838126466723",
            "extra": "mean: 2.1344308773583385 msec\nrounds: 318"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1298.132659389542,
            "unit": "iter/sec",
            "range": "stddev: 0.00023502731694249567",
            "extra": "mean: 770.3372939328548 usec\nrounds: 1269"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 478.516221750081,
            "unit": "iter/sec",
            "range": "stddev: 0.0002850666055211183",
            "extra": "mean: 2.089793312215608 msec\nrounds: 221"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 848.8478286040225,
            "unit": "iter/sec",
            "range": "stddev: 0.00018572952097268503",
            "extra": "mean: 1.1780674536737115 msec\nrounds: 626"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 2.8496561818004866,
            "unit": "iter/sec",
            "range": "stddev: 0.07210737028369754",
            "extra": "mean: 350.91952720000563 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 24.599282303638674,
            "unit": "iter/sec",
            "range": "stddev: 0.0014605596990345806",
            "extra": "mean: 40.65159250000079 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7593007689302261,
            "unit": "iter/sec",
            "range": "stddev: 0.06083956350859781",
            "extra": "mean: 1.317001168600018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7602409217347686,
            "unit": "iter/sec",
            "range": "stddev: 0.04816445568633629",
            "extra": "mean: 1.315372497600015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7346463391321499,
            "unit": "iter/sec",
            "range": "stddev: 0.07208781652961616",
            "extra": "mean: 1.3611991876000047 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.36884778755009295,
            "unit": "iter/sec",
            "range": "stddev: 0.04786982706907642",
            "extra": "mean: 2.7111454474000083 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2823102655306253,
            "unit": "iter/sec",
            "range": "stddev: 0.07144609451639186",
            "extra": "mean: 3.542202045400006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5644812053812719,
            "unit": "iter/sec",
            "range": "stddev: 0.026632641154774452",
            "extra": "mean: 1.7715381672000263 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.0943426021323455,
            "unit": "iter/sec",
            "range": "stddev: 0.011563760528965976",
            "extra": "mean: 477.47679819999576 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2669343028387254,
            "unit": "iter/sec",
            "range": "stddev: 0.07023858275730166",
            "extra": "mean: 789.3069101999799 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2975668124450992,
            "unit": "iter/sec",
            "range": "stddev: 0.06439536757126672",
            "extra": "mean: 770.6732249999732 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2690344549598487,
            "unit": "iter/sec",
            "range": "stddev: 0.06042786184176683",
            "extra": "mean: 788.0006693999803 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 18.2559898788095,
            "unit": "iter/sec",
            "range": "stddev: 0.013859501893784777",
            "extra": "mean: 54.77654220003387 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "39031ff25844e056470623a28778f562f010eb3a",
          "message": "add reference to github-pages benchmarks",
          "timestamp": "2021-01-30T21:55:23+05:30",
          "tree_id": "850fc60467b9d98d83b7fb922f160ee38630d2d4",
          "url": "https://github.com/kvignesh1420/io/commit/39031ff25844e056470623a28778f562f010eb3a"
        },
        "date": 1612024637061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5398.648926189447,
            "unit": "iter/sec",
            "range": "stddev: 0.00005507519836970144",
            "extra": "mean: 185.23152990165534 usec\nrounds: 1321"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3938.7130139739684,
            "unit": "iter/sec",
            "range": "stddev: 0.000051371852111252544",
            "extra": "mean: 253.89003881525477 usec\nrounds: 2834"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 897.8023557654601,
            "unit": "iter/sec",
            "range": "stddev: 0.0003131586970523872",
            "extra": "mean: 1.1138308933789853 msec\nrounds: 891"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 470.31256582136047,
            "unit": "iter/sec",
            "range": "stddev: 0.0002318334279262094",
            "extra": "mean: 2.126245549602924 msec\nrounds: 504"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1539.2732541965802,
            "unit": "iter/sec",
            "range": "stddev: 0.000172509332039541",
            "extra": "mean: 649.6572309521141 usec\nrounds: 1234"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 687.5898839343505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002026679726761732",
            "extra": "mean: 1.4543553117420174 msec\nrounds: 247"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1136.763882039435,
            "unit": "iter/sec",
            "range": "stddev: 0.00025611488133322043",
            "extra": "mean: 879.690158879722 usec\nrounds: 749"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.6335582783271967,
            "unit": "iter/sec",
            "range": "stddev: 0.0318931582373017",
            "extra": "mean: 275.2123189999793 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.0749200373978,
            "unit": "iter/sec",
            "range": "stddev: 0.001194048553343429",
            "extra": "mean: 35.61897945454265 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2885049131991693,
            "unit": "iter/sec",
            "range": "stddev: 0.04962624819416067",
            "extra": "mean: 776.0932766000451 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3125460397836364,
            "unit": "iter/sec",
            "range": "stddev: 0.05867083071908587",
            "extra": "mean: 761.8780368000216 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2442508608208287,
            "unit": "iter/sec",
            "range": "stddev: 0.07619837562936657",
            "extra": "mean: 803.6964502000046 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5070892999408066,
            "unit": "iter/sec",
            "range": "stddev: 0.10179832160667038",
            "extra": "mean: 1.9720392445999777 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4005036456378632,
            "unit": "iter/sec",
            "range": "stddev: 0.04855658562382261",
            "extra": "mean: 2.4968561731999896 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7467656381652226,
            "unit": "iter/sec",
            "range": "stddev: 0.022579060701091936",
            "extra": "mean: 1.3391082139999981 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.703324834370811,
            "unit": "iter/sec",
            "range": "stddev: 0.054118642647872695",
            "extra": "mean: 270.02762239999356 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.1290604291877826,
            "unit": "iter/sec",
            "range": "stddev: 0.05892933638014913",
            "extra": "mean: 469.6907547999899 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9955636910944294,
            "unit": "iter/sec",
            "range": "stddev: 0.06566315174123877",
            "extra": "mean: 501.1115428000039 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.045000624845839,
            "unit": "iter/sec",
            "range": "stddev: 0.056860965869020494",
            "extra": "mean: 488.9974056000028 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.443995114250104,
            "unit": "iter/sec",
            "range": "stddev: 0.004910786012768104",
            "extra": "mean: 44.55534742854589 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "50969c3cc3d4517e6aa2472b7051b6d64df02e61",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-02-08T17:28:53+05:30",
          "tree_id": "3f54c9043912511d8abae0636b2fc228579047e5",
          "url": "https://github.com/kvignesh1420/io/commit/50969c3cc3d4517e6aa2472b7051b6d64df02e61"
        },
        "date": 1612786063706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3884.0280268135502,
            "unit": "iter/sec",
            "range": "stddev: 0.00004884589276552421",
            "extra": "mean: 257.4646714947621 usec\nrounds: 1312"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2856.5818999402304,
            "unit": "iter/sec",
            "range": "stddev: 0.0002864939543951116",
            "extra": "mean: 350.06873075157534 usec\nrounds: 2065"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 823.4357042131101,
            "unit": "iter/sec",
            "range": "stddev: 0.0002516066583365241",
            "extra": "mean: 1.2144239008382784 msec\nrounds: 716"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 491.31483045552415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003949745862994213",
            "extra": "mean: 2.035354803096106 msec\nrounds: 452"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1355.8631154167563,
            "unit": "iter/sec",
            "range": "stddev: 0.00009086647104241371",
            "extra": "mean: 737.5375792951094 usec\nrounds: 1362"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 505.7320312513568,
            "unit": "iter/sec",
            "range": "stddev: 0.00016303570656327416",
            "extra": "mean: 1.9773317452834704 msec\nrounds: 212"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 858.899783338867,
            "unit": "iter/sec",
            "range": "stddev: 0.00012594753659594216",
            "extra": "mean: 1.1642801865808179 msec\nrounds: 611"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.024009112486133,
            "unit": "iter/sec",
            "range": "stddev: 0.04385138478908783",
            "extra": "mean: 330.686834200003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 24.756150126433027,
            "unit": "iter/sec",
            "range": "stddev: 0.0019315288005721139",
            "extra": "mean: 40.39400290000117 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8146210771649076,
            "unit": "iter/sec",
            "range": "stddev: 0.054867704495388955",
            "extra": "mean: 1.2275646040000083 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8096865306450536,
            "unit": "iter/sec",
            "range": "stddev: 0.04937366750828905",
            "extra": "mean: 1.2350458630000047 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7986217077341643,
            "unit": "iter/sec",
            "range": "stddev: 0.08902981868560339",
            "extra": "mean: 1.2521572983999931 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.36482726702883,
            "unit": "iter/sec",
            "range": "stddev: 0.09042435941931812",
            "extra": "mean: 2.741023192 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.28236583477915167,
            "unit": "iter/sec",
            "range": "stddev: 0.11923891133095975",
            "extra": "mean: 3.5415049444000033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5969814286204383,
            "unit": "iter/sec",
            "range": "stddev: 0.05036433716587703",
            "extra": "mean: 1.6750939845999824 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.2507198151955676,
            "unit": "iter/sec",
            "range": "stddev: 0.06301308386121249",
            "extra": "mean: 444.302304200005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.360016506857666,
            "unit": "iter/sec",
            "range": "stddev: 0.06573738697422736",
            "extra": "mean: 735.2851931999794 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3565940008962294,
            "unit": "iter/sec",
            "range": "stddev: 0.06138345314959045",
            "extra": "mean: 737.1402197999942 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3087371883626788,
            "unit": "iter/sec",
            "range": "stddev: 0.06985418581145428",
            "extra": "mean: 764.0953500000023 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 19.105266733585974,
            "unit": "iter/sec",
            "range": "stddev: 0.002521125175886088",
            "extra": "mean: 52.34158800002812 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "50969c3cc3d4517e6aa2472b7051b6d64df02e61",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-02-08T17:28:53+05:30",
          "tree_id": "3f54c9043912511d8abae0636b2fc228579047e5",
          "url": "https://github.com/kvignesh1420/io/commit/50969c3cc3d4517e6aa2472b7051b6d64df02e61"
        },
        "date": 1612786072691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5625.0721036215855,
            "unit": "iter/sec",
            "range": "stddev: 0.000014290831884430035",
            "extra": "mean: 177.77549897647907 usec\nrounds: 1465"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3922.5016156565835,
            "unit": "iter/sec",
            "range": "stddev: 0.00001548339987408985",
            "extra": "mean: 254.9393468720372 usec\nrounds: 2733"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 920.3747337347838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000549327354335602",
            "extra": "mean: 1.0865139636570695 msec\nrounds: 908"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 472.4190712785713,
            "unit": "iter/sec",
            "range": "stddev: 0.00008723501011943131",
            "extra": "mean: 2.1167646710230503 msec\nrounds: 459"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1543.9974651898428,
            "unit": "iter/sec",
            "range": "stddev: 0.00019017990510884902",
            "extra": "mean: 647.6694570719677 usec\nrounds: 1188"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 701.7832492021281,
            "unit": "iter/sec",
            "range": "stddev: 0.00006878527885390847",
            "extra": "mean: 1.4249413919994822 msec\nrounds: 250"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1158.836278117527,
            "unit": "iter/sec",
            "range": "stddev: 0.00004448340198448226",
            "extra": "mean: 862.9346689287732 usec\nrounds: 737"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.697059190090667,
            "unit": "iter/sec",
            "range": "stddev: 0.04097136297248488",
            "extra": "mean: 270.48525559999916 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.233514782513787,
            "unit": "iter/sec",
            "range": "stddev: 0.0010244719439370734",
            "extra": "mean: 34.20731333333057 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3661768305581359,
            "unit": "iter/sec",
            "range": "stddev: 0.050579764295120865",
            "extra": "mean: 731.9696672000077 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3523605493147246,
            "unit": "iter/sec",
            "range": "stddev: 0.05207706610758923",
            "extra": "mean: 739.4477756000242 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4011323770845188,
            "unit": "iter/sec",
            "range": "stddev: 0.050602750329627834",
            "extra": "mean: 713.7084378000054 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5445671551559788,
            "unit": "iter/sec",
            "range": "stddev: 0.06432029887624106",
            "extra": "mean: 1.8363208110000186 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4053760415426385,
            "unit": "iter/sec",
            "range": "stddev: 0.0663274557194746",
            "extra": "mean: 2.4668453423999837 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8106104876643687,
            "unit": "iter/sec",
            "range": "stddev: 0.05215521489151632",
            "extra": "mean: 1.233638122399975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.9512829445881623,
            "unit": "iter/sec",
            "range": "stddev: 0.04826727968753652",
            "extra": "mean: 253.08235679999598 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.176587296103567,
            "unit": "iter/sec",
            "range": "stddev: 0.062095144542406694",
            "extra": "mean: 459.4348233999881 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0628375263238046,
            "unit": "iter/sec",
            "range": "stddev: 0.05454222437921854",
            "extra": "mean: 484.7691527999814 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.151786513716504,
            "unit": "iter/sec",
            "range": "stddev: 0.05205992705729372",
            "extra": "mean: 464.73011780003617 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 25.67849263107502,
            "unit": "iter/sec",
            "range": "stddev: 0.0015528372873510542",
            "extra": "mean: 38.943095857186044 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "8417d6e4c5c0b100e6bead8dd720570f068fcd02",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-02-13T19:32:16+05:30",
          "tree_id": "9e99d6d7fd873cb344833e04c00e3277a056cee0",
          "url": "https://github.com/kvignesh1420/io/commit/8417d6e4c5c0b100e6bead8dd720570f068fcd02"
        },
        "date": 1613225494835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.468086848971147,
            "unit": "iter/sec",
            "range": "stddev: 0.009711137810572631",
            "extra": "mean: 288.34341340000265 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 24.197847780489244,
            "unit": "iter/sec",
            "range": "stddev: 0.0027069713514311935",
            "extra": "mean: 41.32598936366156 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2064656002980203,
            "unit": "iter/sec",
            "range": "stddev: 0.06335612663580092",
            "extra": "mean: 828.8673955999911 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2001630153579828,
            "unit": "iter/sec",
            "range": "stddev: 0.07264279494557352",
            "extra": "mean: 833.2201436000105 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.206800587482365,
            "unit": "iter/sec",
            "range": "stddev: 0.06786170298469761",
            "extra": "mean: 828.6373162000245 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4636244884834713,
            "unit": "iter/sec",
            "range": "stddev: 0.10363954051593725",
            "extra": "mean: 2.1569179904000064 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3577406321056602,
            "unit": "iter/sec",
            "range": "stddev: 0.11217704600548477",
            "extra": "mean: 2.7953212754000107 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7007360488010932,
            "unit": "iter/sec",
            "range": "stddev: 0.047213473423331216",
            "extra": "mean: 1.4270708660000082 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.3569867492498613,
            "unit": "iter/sec",
            "range": "stddev: 0.0690572334661696",
            "extra": "mean: 297.88619220003056 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9158113999239434,
            "unit": "iter/sec",
            "range": "stddev: 0.06396774426994264",
            "extra": "mean: 521.9720479999751 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9347545531310382,
            "unit": "iter/sec",
            "range": "stddev: 0.0725390369960594",
            "extra": "mean: 516.861427400022 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8984647312400738,
            "unit": "iter/sec",
            "range": "stddev: 0.06568024014022217",
            "extra": "mean: 526.7414155999631 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 24.383211937033288,
            "unit": "iter/sec",
            "range": "stddev: 0.00116465703451783",
            "extra": "mean: 41.011824142872555 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5221.8521639082965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005973928165747197",
            "extra": "mean: 191.5029320270051 usec\nrounds: 2398"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3528.0405924943225,
            "unit": "iter/sec",
            "range": "stddev: 0.00006476976317813071",
            "extra": "mean: 283.44345077192 usec\nrounds: 1808"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 819.3278576197188,
            "unit": "iter/sec",
            "range": "stddev: 0.0004121746309110051",
            "extra": "mean: 1.220512632031289 msec\nrounds: 818"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 449.34360701415574,
            "unit": "iter/sec",
            "range": "stddev: 0.0003810808035621301",
            "extra": "mean: 2.2254684041126165 msec\nrounds: 438"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1413.647987893064,
            "unit": "iter/sec",
            "range": "stddev: 0.00014265727955660527",
            "extra": "mean: 707.3896815645207 usec\nrounds: 1074"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 647.1635352636218,
            "unit": "iter/sec",
            "range": "stddev: 0.00023822719135972956",
            "extra": "mean: 1.5452044892990615 msec\nrounds: 327"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1040.4946380300644,
            "unit": "iter/sec",
            "range": "stddev: 0.00039542178101336495",
            "extra": "mean: 961.0813582790474 usec\nrounds: 815"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "c4741c1dffd279ed6a3915284417d0d03790bcd1",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-02-17T11:05:17+05:30",
          "tree_id": "1531710e9edff3bb2694fde1cf92be995173b0a0",
          "url": "https://github.com/kvignesh1420/io/commit/c4741c1dffd279ed6a3915284417d0d03790bcd1"
        },
        "date": 1613540687532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.751003305235784,
            "unit": "iter/sec",
            "range": "stddev: 0.016369792774458117",
            "extra": "mean: 266.595339599985 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.698372628698753,
            "unit": "iter/sec",
            "range": "stddev: 0.0014517289333308224",
            "extra": "mean: 36.103204090910495 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3370963907388893,
            "unit": "iter/sec",
            "range": "stddev: 0.05424796903993261",
            "extra": "mean: 747.8892373999997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3374894498330436,
            "unit": "iter/sec",
            "range": "stddev: 0.05954261931303099",
            "extra": "mean: 747.6694490000114 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.253698163544154,
            "unit": "iter/sec",
            "range": "stddev: 0.06570184161799908",
            "extra": "mean: 797.6401570000235 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4644761673535333,
            "unit": "iter/sec",
            "range": "stddev: 0.08053627824135796",
            "extra": "mean: 2.152962994199993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3689714481136318,
            "unit": "iter/sec",
            "range": "stddev: 0.11860629010106301",
            "extra": "mean: 2.710236808599973 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7073459518424517,
            "unit": "iter/sec",
            "range": "stddev: 0.07284945807283925",
            "extra": "mean: 1.4137353827999732 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.3129969235730394,
            "unit": "iter/sec",
            "range": "stddev: 0.07439127805128598",
            "extra": "mean: 301.84151179998935 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9410130444830238,
            "unit": "iter/sec",
            "range": "stddev: 0.07604551164583603",
            "extra": "mean: 515.1948890000085 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.912579856530072,
            "unit": "iter/sec",
            "range": "stddev: 0.06143757214797512",
            "extra": "mean: 522.853985200004 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8747776649610224,
            "unit": "iter/sec",
            "range": "stddev: 0.08032924626383278",
            "extra": "mean: 533.3965828000146 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.820914422632757,
            "unit": "iter/sec",
            "range": "stddev: 0.0012665277992710432",
            "extra": "mean: 43.819453571424155 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5145.055166631327,
            "unit": "iter/sec",
            "range": "stddev: 0.000044709168774760994",
            "extra": "mean: 194.36137565357535 usec\nrounds: 2489"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3691.066995034953,
            "unit": "iter/sec",
            "range": "stddev: 0.00012353522935486607",
            "extra": "mean: 270.92436993019965 usec\nrounds: 2787"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 875.3310843436306,
            "unit": "iter/sec",
            "range": "stddev: 0.00021797833503415395",
            "extra": "mean: 1.1424248697278387 msec\nrounds: 806"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 482.39800476454246,
            "unit": "iter/sec",
            "range": "stddev: 0.0001643401376212828",
            "extra": "mean: 2.0729770648369454 msec\nrounds: 401"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1367.6335711734507,
            "unit": "iter/sec",
            "range": "stddev: 0.00031948587873551653",
            "extra": "mean: 731.1900066492113 usec\nrounds: 301"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 637.1659763567634,
            "unit": "iter/sec",
            "range": "stddev: 0.00018841550879001453",
            "extra": "mean: 1.5694497777767056 msec\nrounds: 396"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1010.1351585495768,
            "unit": "iter/sec",
            "range": "stddev: 0.00036391992621514336",
            "extra": "mean: 989.9665322370033 usec\nrounds: 729"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "54a41144cee1cf2138011db2a9eacc19caff454d",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-02-27T20:38:24+05:30",
          "tree_id": "e12a39ee302cf996aa44b5172e13c81dd7397640",
          "url": "https://github.com/kvignesh1420/io/commit/54a41144cee1cf2138011db2a9eacc19caff454d"
        },
        "date": 1614439023563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.59127193415465,
            "unit": "iter/sec",
            "range": "stddev: 0.010039997271713183",
            "extra": "mean: 278.4528764000129 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.119749584125504,
            "unit": "iter/sec",
            "range": "stddev: 0.00026291528576952936",
            "extra": "mean: 36.87349681817667 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2716877685554187,
            "unit": "iter/sec",
            "range": "stddev: 0.0609262311317681",
            "extra": "mean: 786.356545000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.277605130695192,
            "unit": "iter/sec",
            "range": "stddev: 0.058483869928642775",
            "extra": "mean: 782.7144522000026 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2181704344632764,
            "unit": "iter/sec",
            "range": "stddev: 0.05617354258713817",
            "extra": "mean: 820.9031935999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.48002715720231925,
            "unit": "iter/sec",
            "range": "stddev: 0.09296459760866191",
            "extra": "mean: 2.0832154702000025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.37478637225503636,
            "unit": "iter/sec",
            "range": "stddev: 0.05842467086486726",
            "extra": "mean: 2.6681866632000037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7241734600482257,
            "unit": "iter/sec",
            "range": "stddev: 0.05553091088112705",
            "extra": "mean: 1.3808846293999864 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.4707712590665754,
            "unit": "iter/sec",
            "range": "stddev: 0.05634451046043378",
            "extra": "mean: 288.1203990000017 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0221304406244682,
            "unit": "iter/sec",
            "range": "stddev: 0.06446151094279834",
            "extra": "mean: 494.527939399984 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9219984557387744,
            "unit": "iter/sec",
            "range": "stddev: 0.06817610473438565",
            "extra": "mean: 520.2917812000123 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9028694152274421,
            "unit": "iter/sec",
            "range": "stddev: 0.06602757683810004",
            "extra": "mean: 525.5221362000157 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 23.31548431975032,
            "unit": "iter/sec",
            "range": "stddev: 0.001547874131032576",
            "extra": "mean: 42.88995185714027 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5291.466919805156,
            "unit": "iter/sec",
            "range": "stddev: 0.000008903862352625271",
            "extra": "mean: 188.98351159621765 usec\nrounds: 2371"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3802.2952032133576,
            "unit": "iter/sec",
            "range": "stddev: 0.000009226518824629883",
            "extra": "mean: 262.9990430924169 usec\nrounds: 2483"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 882.2429362737369,
            "unit": "iter/sec",
            "range": "stddev: 0.000014821317299759906",
            "extra": "mean: 1.1334746461372927 msec\nrounds: 828"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 472.9405365686816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003626308855233302",
            "extra": "mean: 2.114430721577146 msec\nrounds: 431"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1454.0203348233958,
            "unit": "iter/sec",
            "range": "stddev: 0.00004324296062175341",
            "extra": "mean: 687.7482907565109 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 668.352442329896,
            "unit": "iter/sec",
            "range": "stddev: 0.000017281293873103525",
            "extra": "mean: 1.496216571774573 msec\nrounds: 411"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1116.0642836018226,
            "unit": "iter/sec",
            "range": "stddev: 0.00001571818679008882",
            "extra": "mean: 896.0057361326412 usec\nrounds: 739"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "76d3373ce203df34e7d9f6c77e016547ca1284fc",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-02-27T20:38:42+05:30",
          "tree_id": "e12a39ee302cf996aa44b5172e13c81dd7397640",
          "url": "https://github.com/kvignesh1420/io/commit/76d3373ce203df34e7d9f6c77e016547ca1284fc"
        },
        "date": 1614439439506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.6422980789802044,
            "unit": "iter/sec",
            "range": "stddev: 0.016422127526587026",
            "extra": "mean: 274.5519390000027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.017333873079945,
            "unit": "iter/sec",
            "range": "stddev: 0.0030152314847778335",
            "extra": "mean: 43.445518299995456 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.292386204236669,
            "unit": "iter/sec",
            "range": "stddev: 0.05543720400070323",
            "extra": "mean: 773.7625152000419 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.294712127200985,
            "unit": "iter/sec",
            "range": "stddev: 0.056864358498698135",
            "extra": "mean: 772.3724672000117 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2634536029936745,
            "unit": "iter/sec",
            "range": "stddev: 0.0605430670433581",
            "extra": "mean: 791.481379000038 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4587871739901756,
            "unit": "iter/sec",
            "range": "stddev: 0.08217796460723598",
            "extra": "mean: 2.179659887400021 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3493671298116854,
            "unit": "iter/sec",
            "range": "stddev: 0.07181623618611073",
            "extra": "mean: 2.8623185030000284 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6952094132945084,
            "unit": "iter/sec",
            "range": "stddev: 0.017730993397092536",
            "extra": "mean: 1.4384155060000239 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.5040354451967586,
            "unit": "iter/sec",
            "range": "stddev: 0.05434359432594882",
            "extra": "mean: 285.3852409999945 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0207043869074446,
            "unit": "iter/sec",
            "range": "stddev: 0.06534695630014843",
            "extra": "mean: 494.8769381999682 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.908035345464965,
            "unit": "iter/sec",
            "range": "stddev: 0.07013848577647995",
            "extra": "mean: 524.0993057999731 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.7515103162234975,
            "unit": "iter/sec",
            "range": "stddev: 0.05710356802811914",
            "extra": "mean: 570.9358322000298 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 19.56083111792888,
            "unit": "iter/sec",
            "range": "stddev: 0.006730409713240138",
            "extra": "mean: 51.122572142828304 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5172.109672226429,
            "unit": "iter/sec",
            "range": "stddev: 0.00001048613102195071",
            "extra": "mean: 193.34470136429488 usec\nrounds: 2200"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3690.850515187992,
            "unit": "iter/sec",
            "range": "stddev: 0.000009905587892266502",
            "extra": "mean: 270.94026048602115 usec\nrounds: 2384"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 874.9508884353263,
            "unit": "iter/sec",
            "range": "stddev: 0.00001428492450542068",
            "extra": "mean: 1.1429212921748084 msec\nrounds: 818"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 471.2881677917128,
            "unit": "iter/sec",
            "range": "stddev: 0.000028329881676584374",
            "extra": "mean: 2.121844061321635 msec\nrounds: 424"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1349.6244758350426,
            "unit": "iter/sec",
            "range": "stddev: 0.00005074926811147417",
            "extra": "mean: 740.9468469970343 usec\nrounds: 1098"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 666.9303026878483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001850843565799775",
            "extra": "mean: 1.4994070534354509 msec\nrounds: 393"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1097.6571012311435,
            "unit": "iter/sec",
            "range": "stddev: 0.000031769249728707826",
            "extra": "mean: 911.0313219660218 usec\nrounds: 733"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "aa202febb0c78a680dbdc01c4f5dc2be2f0f0124",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-03-13T12:09:27+05:30",
          "tree_id": "554d2b75c8b287865f551a5fa2aab91f2e7056e1",
          "url": "https://github.com/kvignesh1420/io/commit/aa202febb0c78a680dbdc01c4f5dc2be2f0f0124"
        },
        "date": 1615618062493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.4686508246607697,
            "unit": "iter/sec",
            "range": "stddev: 0.04649473598994427",
            "extra": "mean: 288.29653100000314 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.409844400831542,
            "unit": "iter/sec",
            "range": "stddev: 0.0021778991165383546",
            "extra": "mean: 39.354825800006665 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.1974346293655127,
            "unit": "iter/sec",
            "range": "stddev: 0.0589518259041946",
            "extra": "mean: 835.1186574000053 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2009052248733205,
            "unit": "iter/sec",
            "range": "stddev: 0.05730297697648769",
            "extra": "mean: 832.7051788000063 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.1403487701885775,
            "unit": "iter/sec",
            "range": "stddev: 0.0762777564673222",
            "extra": "mean: 876.9246971999905 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.470171441210778,
            "unit": "iter/sec",
            "range": "stddev: 0.07445544661185925",
            "extra": "mean: 2.1268837541999916 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.35762790081435414,
            "unit": "iter/sec",
            "range": "stddev: 0.11262043891770476",
            "extra": "mean: 2.7962024151999914 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6600239368927505,
            "unit": "iter/sec",
            "range": "stddev: 0.04852822231260671",
            "extra": "mean: 1.515096565600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.280440109671154,
            "unit": "iter/sec",
            "range": "stddev: 0.05523302364132594",
            "extra": "mean: 304.83714580000196 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.8716581200349303,
            "unit": "iter/sec",
            "range": "stddev: 0.06984273699264112",
            "extra": "mean: 534.2856098000084 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.758103194671529,
            "unit": "iter/sec",
            "range": "stddev: 0.07205326965291159",
            "extra": "mean: 568.7948256000027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.68405447239764,
            "unit": "iter/sec",
            "range": "stddev: 0.07639031671654449",
            "extra": "mean: 593.8050202000113 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 21.563335033402875,
            "unit": "iter/sec",
            "range": "stddev: 0.0011038794118665917",
            "extra": "mean: 46.37501566668334 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5007.369512768305,
            "unit": "iter/sec",
            "range": "stddev: 0.000009648993879299213",
            "extra": "mean: 199.70565332757994 usec\nrounds: 2224"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3573.245922004313,
            "unit": "iter/sec",
            "range": "stddev: 0.000022739947303310397",
            "extra": "mean: 279.85759218024316 usec\nrounds: 2327"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 846.4038401754789,
            "unit": "iter/sec",
            "range": "stddev: 0.000011475290684903114",
            "extra": "mean: 1.181469119743924 msec\nrounds: 785"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 454.1800142422095,
            "unit": "iter/sec",
            "range": "stddev: 0.000053249332652722166",
            "extra": "mean: 2.201770154216232 msec\nrounds: 415"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1432.4086489536098,
            "unit": "iter/sec",
            "range": "stddev: 0.00004232015536950695",
            "extra": "mean: 698.1247989046359 usec\nrounds: 1278"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 636.3292253084976,
            "unit": "iter/sec",
            "range": "stddev: 0.00002819508766518518",
            "extra": "mean: 1.5715135502619604 msec\nrounds: 378"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1075.2072472511488,
            "unit": "iter/sec",
            "range": "stddev: 0.00001782835607187477",
            "extra": "mean: 930.0532549018601 usec\nrounds: 714"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "52b4691600fa71cff0c333680f80999662024e73",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-03-14T21:23:36+05:30",
          "tree_id": "52fdc5340ed447099b1b51da0750cf391fb2466b",
          "url": "https://github.com/kvignesh1420/io/commit/52b4691600fa71cff0c333680f80999662024e73"
        },
        "date": 1615737755058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.9595136257175567,
            "unit": "iter/sec",
            "range": "stddev: 0.06989895473971969",
            "extra": "mean: 337.8933590000088 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 21.717565102466544,
            "unit": "iter/sec",
            "range": "stddev: 0.004080623414518538",
            "extra": "mean: 46.045677555557376 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2361842949176973,
            "unit": "iter/sec",
            "range": "stddev: 0.060190298463571934",
            "extra": "mean: 808.9408707999951 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2050048687643489,
            "unit": "iter/sec",
            "range": "stddev: 0.050875251969612366",
            "extra": "mean: 829.8721655999884 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.1932994198465612,
            "unit": "iter/sec",
            "range": "stddev: 0.06386672323830005",
            "extra": "mean: 838.0126423999968 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4018323534421706,
            "unit": "iter/sec",
            "range": "stddev: 0.23870941313648344",
            "extra": "mean: 2.488600012999984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3206791080064735,
            "unit": "iter/sec",
            "range": "stddev: 0.29189635723919594",
            "extra": "mean: 3.118382130400005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6814854756527052,
            "unit": "iter/sec",
            "range": "stddev: 0.09516941069767364",
            "extra": "mean: 1.4673827040000105 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.3700194095595193,
            "unit": "iter/sec",
            "range": "stddev: 0.05767112370318167",
            "extra": "mean: 296.7341959999885 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9696480155877127,
            "unit": "iter/sec",
            "range": "stddev: 0.06757454804142989",
            "extra": "mean: 507.7049259999967 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8280785782525195,
            "unit": "iter/sec",
            "range": "stddev: 0.07253291450281579",
            "extra": "mean: 547.0224375999805 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.6369248749859115,
            "unit": "iter/sec",
            "range": "stddev: 0.05490788595925672",
            "extra": "mean: 610.9015845999693 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 17.69587810796511,
            "unit": "iter/sec",
            "range": "stddev: 0.005073650707982183",
            "extra": "mean: 56.51033499998448 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 4800.387398668162,
            "unit": "iter/sec",
            "range": "stddev: 0.00015924690521766985",
            "extra": "mean: 208.3165205119578 usec\nrounds: 1877"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3674.5894145321768,
            "unit": "iter/sec",
            "range": "stddev: 0.000009411749925396252",
            "extra": "mean: 272.13924800556606 usec\nrounds: 2383"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 874.3670911071588,
            "unit": "iter/sec",
            "range": "stddev: 0.000012424911526765177",
            "extra": "mean: 1.1436843977439268 msec\nrounds: 797"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 468.25408583372393,
            "unit": "iter/sec",
            "range": "stddev: 0.00002539051591408396",
            "extra": "mean: 2.135592684086259 msec\nrounds: 421"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1277.5649635105872,
            "unit": "iter/sec",
            "range": "stddev: 0.00002714294261439518",
            "extra": "mean: 782.7390610745352 usec\nrounds: 1228"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 656.0175552186984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000204229853384786",
            "extra": "mean: 1.5243494507805166 msec\nrounds: 386"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1106.413384950152,
            "unit": "iter/sec",
            "range": "stddev: 0.00001748739498434562",
            "extra": "mean: 903.821314530693 usec\nrounds: 709"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "distinct": true,
          "id": "3bd97c729b11bfe9de63bbc6098520652a5f37b7",
          "message": "Merge branch 'master' of https://github.com/tensorflow/io",
          "timestamp": "2021-03-23T21:50:27+05:30",
          "tree_id": "c90a7cf6e15ad65c9b9ce2cb30a196459c2f8155",
          "url": "https://github.com/kvignesh1420/io/commit/3bd97c729b11bfe9de63bbc6098520652a5f37b7"
        },
        "date": 1616516983267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7014628107001277,
            "unit": "iter/sec",
            "range": "stddev: 0.005569187816989744",
            "extra": "mean: 270.16345999998066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.94354552950288,
            "unit": "iter/sec",
            "range": "stddev: 0.0009766984161977356",
            "extra": "mean: 37.11464027275146 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2421178977353602,
            "unit": "iter/sec",
            "range": "stddev: 0.058377421033481",
            "extra": "mean: 805.0765565999882 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.251550130881182,
            "unit": "iter/sec",
            "range": "stddev: 0.05578126784648851",
            "extra": "mean: 799.0091449999909 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2222601432776743,
            "unit": "iter/sec",
            "range": "stddev: 0.05668543593445013",
            "extra": "mean: 818.1564338000499 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.42889524246981187,
            "unit": "iter/sec",
            "range": "stddev: 0.08224747319235194",
            "extra": "mean: 2.3315716776000044 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3611438757287278,
            "unit": "iter/sec",
            "range": "stddev: 0.09766166480139458",
            "extra": "mean: 2.768979532000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7058018345696675,
            "unit": "iter/sec",
            "range": "stddev: 0.06707074292282324",
            "extra": "mean: 1.4168282810000163 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.4363084226849314,
            "unit": "iter/sec",
            "range": "stddev: 0.05962665996328281",
            "extra": "mean: 291.00996679997024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.997979610251335,
            "unit": "iter/sec",
            "range": "stddev: 0.06700726495691299",
            "extra": "mean: 500.50560819997827 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8099524737032362,
            "unit": "iter/sec",
            "range": "stddev: 0.07799946189381281",
            "extra": "mean: 552.5006952000012 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.7771685378639437,
            "unit": "iter/sec",
            "range": "stddev: 0.08579557153773201",
            "extra": "mean: 562.6928334000013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 21.68049193095226,
            "unit": "iter/sec",
            "range": "stddev: 0.006667640285433873",
            "extra": "mean: 46.12441466664071 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 4568.749919541588,
            "unit": "iter/sec",
            "range": "stddev: 0.00012682280841082834",
            "extra": "mean: 218.8782528285848 usec\nrounds: 2033"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3245.5739545506813,
            "unit": "iter/sec",
            "range": "stddev: 0.0001406696261727359",
            "extra": "mean: 308.1119130247767 usec\nrounds: 2403"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 753.3314964753314,
            "unit": "iter/sec",
            "range": "stddev: 0.00035758078995589895",
            "extra": "mean: 1.3274368650172932 msec\nrounds: 726"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 421.9870244892273,
            "unit": "iter/sec",
            "range": "stddev: 0.00040009280935672574",
            "extra": "mean: 2.3697411104296373 msec\nrounds: 163"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1286.6954355382848,
            "unit": "iter/sec",
            "range": "stddev: 0.0003483995984345257",
            "extra": "mean: 777.1846952901122 usec\nrounds: 1316"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 600.8971959622445,
            "unit": "iter/sec",
            "range": "stddev: 0.0004447306091110262",
            "extra": "mean: 1.664178176765584 msec\nrounds: 396"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 982.706293595223,
            "unit": "iter/sec",
            "range": "stddev: 0.00046454737210813505",
            "extra": "mean: 1.0175980417724895 msec\nrounds: 383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d32874b628a4967bd6075543d0dcb727987e6b2",
          "message": "Bump abseil-cpp to 6f9d96a1f41439ac172ee2ef7ccd8edf0e5d068c (#1336)\n\n* Bump abseil-cpp to 6f9d96a1f41439ac172ee2ef7ccd8edf0e5d068c\r\n\r\nThis PR bumps abseil-cpp to 6f9d96a1f41439ac172ee2ef7ccd8edf0e5d068c\r\nto fix the build issue.\r\n\r\nSee related changes in tensorflow/tensorflow/commit/1c9eeb9eaa1b712d71fc29bcc9054c25c7236fa2\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Remove flaky CentOS 7 build\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-03-23T08:32:22+05:30",
          "tree_id": "c90a7cf6e15ad65c9b9ce2cb30a196459c2f8155",
          "url": "https://github.com/kvignesh1420/io/commit/9d32874b628a4967bd6075543d0dcb727987e6b2"
        },
        "date": 1616520158388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.486943519024189,
            "unit": "iter/sec",
            "range": "stddev: 0.019232200787728252",
            "extra": "mean: 286.784111799966 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.002459399989046,
            "unit": "iter/sec",
            "range": "stddev: 0.001274855121706635",
            "extra": "mean: 35.711149000019304 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8451298027359211,
            "unit": "iter/sec",
            "range": "stddev: 0.055228138342260764",
            "extra": "mean: 1.1832501904000083 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8497204313310952,
            "unit": "iter/sec",
            "range": "stddev: 0.04369234561625356",
            "extra": "mean: 1.1768576617999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8642687703408903,
            "unit": "iter/sec",
            "range": "stddev: 0.048427743428738235",
            "extra": "mean: 1.1570474768000394 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.41036687596875454,
            "unit": "iter/sec",
            "range": "stddev: 0.12792028792197735",
            "extra": "mean: 2.436843854999984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3260883795430725,
            "unit": "iter/sec",
            "range": "stddev: 0.12620313065815716",
            "extra": "mean: 3.0666532839999947 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6646118398956558,
            "unit": "iter/sec",
            "range": "stddev: 0.07573035211287493",
            "extra": "mean: 1.5046376546000146 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.2659350263988167,
            "unit": "iter/sec",
            "range": "stddev: 0.07083873923359502",
            "extra": "mean: 441.31892059997426 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.4235172111906294,
            "unit": "iter/sec",
            "range": "stddev: 0.06982662568689459",
            "extra": "mean: 702.485359599973 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3910482679843827,
            "unit": "iter/sec",
            "range": "stddev: 0.0826517102225402",
            "extra": "mean: 718.8823156000126 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.4873030053448784,
            "unit": "iter/sec",
            "range": "stddev: 0.08173847185872797",
            "extra": "mean: 672.357950200012 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 25.199434716219898,
            "unit": "iter/sec",
            "range": "stddev: 0.0023463842008570497",
            "extra": "mean: 39.68342985711258 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 4283.034101641772,
            "unit": "iter/sec",
            "range": "stddev: 0.000023064335093030097",
            "extra": "mean: 233.47934577889075 usec\nrounds: 2464"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3376.1635250776044,
            "unit": "iter/sec",
            "range": "stddev: 0.00004223909049516066",
            "extra": "mean: 296.19418389309624 usec\nrounds: 2496"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 944.7182917560273,
            "unit": "iter/sec",
            "range": "stddev: 0.00009542515195911456",
            "extra": "mean: 1.0585166061950764 msec\nrounds: 904"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 535.98909086871,
            "unit": "iter/sec",
            "range": "stddev: 0.00012785315472019825",
            "extra": "mean: 1.8657096143118124 msec\nrounds: 503"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1454.4197358296592,
            "unit": "iter/sec",
            "range": "stddev: 0.00015356448338203635",
            "extra": "mean: 687.5594268731234 usec\nrounds: 1347"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 573.1096335318053,
            "unit": "iter/sec",
            "range": "stddev: 0.00014116986096343888",
            "extra": "mean: 1.7448668483156877 msec\nrounds: 356"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 989.8465624237562,
            "unit": "iter/sec",
            "range": "stddev: 0.00008521724499645888",
            "extra": "mean: 1.0102575873490756 msec\nrounds: 727"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1711688db441247a4a147e5828469890fee3e2c0",
          "message": "remove unused/stale azure_ops (#1338)",
          "timestamp": "2021-03-23T11:19:10-07:00",
          "tree_id": "566ea648aa13a28c327f6d5dde71cc91c5314478",
          "url": "https://github.com/kvignesh1420/io/commit/1711688db441247a4a147e5828469890fee3e2c0"
        },
        "date": 1616525078945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.99687192332989,
            "unit": "iter/sec",
            "range": "stddev: 0.00996802067311173",
            "extra": "mean: 250.19565780003177 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.698802476513336,
            "unit": "iter/sec",
            "range": "stddev: 0.00393879496489085",
            "extra": "mean: 36.10264381819144 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3242961811621488,
            "unit": "iter/sec",
            "range": "stddev: 0.10657264381180918",
            "extra": "mean: 755.1180877999968 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3304815111417034,
            "unit": "iter/sec",
            "range": "stddev: 0.1046956206320396",
            "extra": "mean: 751.6075883999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4434592732899791,
            "unit": "iter/sec",
            "range": "stddev: 0.06564727304768919",
            "extra": "mean: 692.7801971999997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5812189920590393,
            "unit": "iter/sec",
            "range": "stddev: 0.09269920202803279",
            "extra": "mean: 1.7205218922000085 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.34972139391297086,
            "unit": "iter/sec",
            "range": "stddev: 0.36556102914775646",
            "extra": "mean: 2.859419004399979 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.837280045401738,
            "unit": "iter/sec",
            "range": "stddev: 0.08579592614031537",
            "extra": "mean: 1.19434352400001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.5547060484283017,
            "unit": "iter/sec",
            "range": "stddev: 0.05793994370671577",
            "extra": "mean: 281.31721340000695 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.020348411790849,
            "unit": "iter/sec",
            "range": "stddev: 0.06411893024010029",
            "extra": "mean: 494.9641330000077 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.00654587031771,
            "unit": "iter/sec",
            "range": "stddev: 0.054267092483519526",
            "extra": "mean: 498.36887100002514 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9809577826205642,
            "unit": "iter/sec",
            "range": "stddev: 0.06225340925342184",
            "extra": "mean: 504.8063157999877 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 23.28700655059584,
            "unit": "iter/sec",
            "range": "stddev: 0.003902583832133173",
            "extra": "mean: 42.94240214289857 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5592.360040962566,
            "unit": "iter/sec",
            "range": "stddev: 0.000014826406760453148",
            "extra": "mean: 178.8153825353273 usec\nrounds: 2256"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4378.546602632613,
            "unit": "iter/sec",
            "range": "stddev: 0.000026870706503258317",
            "extra": "mean: 228.38628676436775 usec\nrounds: 2856"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1067.039277653647,
            "unit": "iter/sec",
            "range": "stddev: 0.00011378787807360768",
            "extra": "mean: 937.1726242345434 usec\nrounds: 1147"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 574.6334192238303,
            "unit": "iter/sec",
            "range": "stddev: 0.00020573281562873838",
            "extra": "mean: 1.7402398930273173 msec\nrounds: 430"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1825.0216306107047,
            "unit": "iter/sec",
            "range": "stddev: 0.00007742768843901312",
            "extra": "mean: 547.9387110964659 usec\nrounds: 1343"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 671.5445513932668,
            "unit": "iter/sec",
            "range": "stddev: 0.000035090339279603196",
            "extra": "mean: 1.4891044800010365 msec\nrounds: 475"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1126.860436027608,
            "unit": "iter/sec",
            "range": "stddev: 0.000023272574340983444",
            "extra": "mean: 887.4213416571669 usec\nrounds: 761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vovannghia2409@gmail.com",
            "name": "Vo Van Nghia",
            "username": "vnvo2409"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b7437adf12dac459f8e6b6730fb9d3ce0121b39",
          "message": "improvements for `s3` environements variables (#1343)\n\n* lazy loading for `s3` environements variables\r\n\r\n* `S3_ENDPOINT` supports http/https\r\n\r\n* remove `S3_USE_HTTPS` and `S3_VERIFY_SSL`",
          "timestamp": "2021-03-29T12:44:14-07:00",
          "tree_id": "d4d2c5b56c99f71e85708ecba2e4ee76490c346c",
          "url": "https://github.com/kvignesh1420/io/commit/8b7437adf12dac459f8e6b6730fb9d3ce0121b39"
        },
        "date": 1617181289929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5439.347072792713,
            "unit": "iter/sec",
            "range": "stddev: 0.000011168318014505426",
            "extra": "mean: 183.84559518217543 usec\nrounds: 1287"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3857.035518331778,
            "unit": "iter/sec",
            "range": "stddev: 0.000010821665341004644",
            "extra": "mean: 259.26647427724856 usec\nrounds: 2663"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 898.5418241144971,
            "unit": "iter/sec",
            "range": "stddev: 0.000029209059776524938",
            "extra": "mean: 1.1129142496905904 msec\nrounds: 805"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 461.21140724720885,
            "unit": "iter/sec",
            "range": "stddev: 0.00004332933694553011",
            "extra": "mean: 2.1682030936064876 msec\nrounds: 438"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1514.7804574226006,
            "unit": "iter/sec",
            "range": "stddev: 0.000036550842364909895",
            "extra": "mean: 660.1616723399642 usec\nrounds: 1175"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 692.8808389043919,
            "unit": "iter/sec",
            "range": "stddev: 0.00004501827399894533",
            "extra": "mean: 1.4432496092419527 msec\nrounds: 238"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1117.7369333871295,
            "unit": "iter/sec",
            "range": "stddev: 0.00002476364493612991",
            "extra": "mean: 894.6648984476643 usec\nrounds: 709"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.5188216820792904,
            "unit": "iter/sec",
            "range": "stddev: 0.05134766800372165",
            "extra": "mean: 284.1860401999952 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.31513635783357,
            "unit": "iter/sec",
            "range": "stddev: 0.001048871613625684",
            "extra": "mean: 35.31679972727178 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2994303179238096,
            "unit": "iter/sec",
            "range": "stddev: 0.050868924326384006",
            "extra": "mean: 769.568006999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3078355667528212,
            "unit": "iter/sec",
            "range": "stddev: 0.04836011306186061",
            "extra": "mean: 764.6221171999969 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2732771001706737,
            "unit": "iter/sec",
            "range": "stddev: 0.062176336482356716",
            "extra": "mean: 785.3749980000089 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5115005155465423,
            "unit": "iter/sec",
            "range": "stddev: 0.08237932256583667",
            "extra": "mean: 1.9550322425999753 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3776727399103841,
            "unit": "iter/sec",
            "range": "stddev: 0.07426244120426082",
            "extra": "mean: 2.6477950201999874 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7278451086891856,
            "unit": "iter/sec",
            "range": "stddev: 0.05442524189712187",
            "extra": "mean: 1.373918692400025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.527238316971606,
            "unit": "iter/sec",
            "range": "stddev: 0.05267760122827805",
            "extra": "mean: 283.50792040005217 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0561478037997736,
            "unit": "iter/sec",
            "range": "stddev: 0.06246149678441623",
            "extra": "mean: 486.3463599999932 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8186665047093729,
            "unit": "iter/sec",
            "range": "stddev: 0.06556816205154183",
            "extra": "mean: 549.8534213999847 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8789112362796543,
            "unit": "iter/sec",
            "range": "stddev: 0.07652932437150435",
            "extra": "mean: 532.2231197999827 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.714479313037813,
            "unit": "iter/sec",
            "range": "stddev: 0.0038676953626471246",
            "extra": "mean: 44.02478200000002 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a473ed107ef747aef8cca76c88212e6d89a9bae",
          "message": "Add 16 bit tiff support (#1349)",
          "timestamp": "2021-03-31T18:55:26-07:00",
          "tree_id": "95b69cb92d5889cdb415a7bcb08a5295809a72b2",
          "url": "https://github.com/kvignesh1420/io/commit/1a473ed107ef747aef8cca76c88212e6d89a9bae"
        },
        "date": 1617290368568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.9646065320403143,
            "unit": "iter/sec",
            "range": "stddev: 0.03504457218246523",
            "extra": "mean: 337.3128909999991 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.69242955259195,
            "unit": "iter/sec",
            "range": "stddev: 0.001344112414083137",
            "extra": "mean: 37.463805909076406 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7529236605112373,
            "unit": "iter/sec",
            "range": "stddev: 0.04409097353450947",
            "extra": "mean: 1.3281558974000063 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7604506368299517,
            "unit": "iter/sec",
            "range": "stddev: 0.06566767998959623",
            "extra": "mean: 1.3150097475999813 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7812938216717673,
            "unit": "iter/sec",
            "range": "stddev: 0.04563566295903968",
            "extra": "mean: 1.2799282065999933 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3734264232867953,
            "unit": "iter/sec",
            "range": "stddev: 0.10436113101347434",
            "extra": "mean: 2.6779036984000184 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.28301272525614246,
            "unit": "iter/sec",
            "range": "stddev: 0.08504441488837712",
            "extra": "mean: 3.5334100228000125 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5842483887490981,
            "unit": "iter/sec",
            "range": "stddev: 0.017838621768570324",
            "extra": "mean: 1.7116007836000109 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.269776097464654,
            "unit": "iter/sec",
            "range": "stddev: 0.016865759393877678",
            "extra": "mean: 440.5720904000191 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3597750049919788,
            "unit": "iter/sec",
            "range": "stddev: 0.07130801209979223",
            "extra": "mean: 735.4157829999963 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.328947504277964,
            "unit": "iter/sec",
            "range": "stddev: 0.07532680941908453",
            "extra": "mean: 752.4751705999961 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3382559604974618,
            "unit": "iter/sec",
            "range": "stddev: 0.0806826453664396",
            "extra": "mean: 747.2412075999841 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 19.9473119017482,
            "unit": "iter/sec",
            "range": "stddev: 0.002499792204269199",
            "extra": "mean: 50.13206816665653 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3622.5540802736937,
            "unit": "iter/sec",
            "range": "stddev: 0.0001304849776795424",
            "extra": "mean: 276.0483288421873 usec\nrounds: 1633"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3036.8458328272254,
            "unit": "iter/sec",
            "range": "stddev: 0.0001365876193895139",
            "extra": "mean: 329.2890238912871 usec\nrounds: 2051"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 909.3584650538503,
            "unit": "iter/sec",
            "range": "stddev: 0.00023570816343507212",
            "extra": "mean: 1.0996763525380304 msec\nrounds: 729"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 518.2246892662693,
            "unit": "iter/sec",
            "range": "stddev: 0.00025429719665416854",
            "extra": "mean: 1.9296649131400019 msec\nrounds: 449"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1476.0728098635486,
            "unit": "iter/sec",
            "range": "stddev: 0.00013528992831292994",
            "extra": "mean: 677.4733558654483 usec\nrounds: 1287"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 493.52757159093517,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520450974833551",
            "extra": "mean: 2.0262292474894577 msec\nrounds: 299"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 868.9334983439614,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071343124332566",
            "extra": "mean: 1.1508360558153516 msec\nrounds: 645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15e93e7401eb4e475b9bdc9be2a3d85df6ba8133",
          "message": "modify env var for loading modular file systems (#1348)\n\n* modify env var for loading modular file systems\r\n\r\n* condition block fix for loading plugins\r\n\r\n* bump to redeploy\r\n\r\n* set the TF_USE_MODULAR_FILESYSTEM env var\r\n\r\n* lint fixes\r\n\r\n* set env variable before importing tf\r\n\r\n* lint fixes",
          "timestamp": "2021-04-02T06:30:56-07:00",
          "tree_id": "608e3a60b02104789cf4b49c656cdde329e4f53f",
          "url": "https://github.com/kvignesh1420/io/commit/15e93e7401eb4e475b9bdc9be2a3d85df6ba8133"
        },
        "date": 1617372828155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.0178813866191363,
            "unit": "iter/sec",
            "range": "stddev: 0.05260896170654875",
            "extra": "mean: 331.35828480001237 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 21.43207872700363,
            "unit": "iter/sec",
            "range": "stddev: 0.005120794005184846",
            "extra": "mean: 46.65902980003693 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7457544362147972,
            "unit": "iter/sec",
            "range": "stddev: 0.068542214665615",
            "extra": "mean: 1.3409239709999838 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.764250697343952,
            "unit": "iter/sec",
            "range": "stddev: 0.04764325328743705",
            "extra": "mean: 1.308471164599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7429643884674837,
            "unit": "iter/sec",
            "range": "stddev: 0.061298326427402794",
            "extra": "mean: 1.3459595312000148 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.34960704573253726,
            "unit": "iter/sec",
            "range": "stddev: 0.1087955273599109",
            "extra": "mean: 2.860354252600041 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.27540904256101145,
            "unit": "iter/sec",
            "range": "stddev: 0.09762020098417402",
            "extra": "mean: 3.6309628424000264 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5811528163323696,
            "unit": "iter/sec",
            "range": "stddev: 0.053849899700499415",
            "extra": "mean: 1.7207178075999991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.145801806444438,
            "unit": "iter/sec",
            "range": "stddev: 0.054906599553042536",
            "extra": "mean: 466.02626439996584 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.34035245640663,
            "unit": "iter/sec",
            "range": "stddev: 0.06372894971608752",
            "extra": "mean: 746.0724193999795 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2955965325168628,
            "unit": "iter/sec",
            "range": "stddev: 0.06219464637100267",
            "extra": "mean: 771.8452271999922 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3138210906762702,
            "unit": "iter/sec",
            "range": "stddev: 0.08628130358686888",
            "extra": "mean: 761.138641399998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.245773431590674,
            "unit": "iter/sec",
            "range": "stddev: 0.002799661739220244",
            "extra": "mean: 49.393025333358764 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3620.4325825825617,
            "unit": "iter/sec",
            "range": "stddev: 0.00007542805905469467",
            "extra": "mean: 276.21008738316857 usec\nrounds: 2037"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2792.723288700961,
            "unit": "iter/sec",
            "range": "stddev: 0.0002794996494777354",
            "extra": "mean: 358.0734274841642 usec\nrounds: 1841"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 805.5023067945211,
            "unit": "iter/sec",
            "range": "stddev: 0.00014342002288151255",
            "extra": "mean: 1.2414613733131048 msec\nrounds: 742"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 459.2890548935455,
            "unit": "iter/sec",
            "range": "stddev: 0.00035181257321098336",
            "extra": "mean: 2.177278098281225 msec\nrounds: 407"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1222.7357508996904,
            "unit": "iter/sec",
            "range": "stddev: 0.00025937640736222524",
            "extra": "mean: 817.8381954270976 usec\nrounds: 962"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 477.0932663937372,
            "unit": "iter/sec",
            "range": "stddev: 0.0002222224494999114",
            "extra": "mean: 2.0960262289149907 msec\nrounds: 332"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 841.3424626869748,
            "unit": "iter/sec",
            "range": "stddev: 0.00017107328873482204",
            "extra": "mean: 1.188576643102411 msec\nrounds: 594"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b04ec18b078eacccbdf6dbe1d020495d958fe10",
          "message": "Move tfio.experimental.audio to tfio.audio (#1350)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-04-02T22:26:53+05:30",
          "tree_id": "9a3a77f4ae7987c4a4363096bb9298f22d6cc22a",
          "url": "https://github.com/kvignesh1420/io/commit/6b04ec18b078eacccbdf6dbe1d020495d958fe10"
        },
        "date": 1617383247742,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.2699744073159818,
            "unit": "iter/sec",
            "range": "stddev: 0.03656151177523205",
            "extra": "mean: 305.8127910000394 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.668418334752197,
            "unit": "iter/sec",
            "range": "stddev: 0.0015076801854038168",
            "extra": "mean: 42.250393999995595 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.6783982171668882,
            "unit": "iter/sec",
            "range": "stddev: 0.13437633791989734",
            "extra": "mean: 1.4740604775999828 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.6937664152531006,
            "unit": "iter/sec",
            "range": "stddev: 0.09890151922375287",
            "extra": "mean: 1.4414073354000265 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7128014594152594,
            "unit": "iter/sec",
            "range": "stddev: 0.1168619920424024",
            "extra": "mean: 1.402915197199991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.38299796520572676,
            "unit": "iter/sec",
            "range": "stddev: 0.0036843331108958235",
            "extra": "mean: 2.610979929000018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.24430722965916693,
            "unit": "iter/sec",
            "range": "stddev: 1.0034341994922324",
            "extra": "mean: 4.09320674380001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6054604180652531,
            "unit": "iter/sec",
            "range": "stddev: 0.09194534726672679",
            "extra": "mean: 1.651635631599993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.244506771793711,
            "unit": "iter/sec",
            "range": "stddev: 0.055082441996921826",
            "extra": "mean: 445.53218220003146 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3643977592319647,
            "unit": "iter/sec",
            "range": "stddev: 0.06503838865056966",
            "extra": "mean: 732.9241002000117 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3686747332949896,
            "unit": "iter/sec",
            "range": "stddev: 0.11080956149397346",
            "extra": "mean: 730.6337844000154 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3717593718125853,
            "unit": "iter/sec",
            "range": "stddev: 0.0625231630786481",
            "extra": "mean: 728.990827799953 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.930995802375996,
            "unit": "iter/sec",
            "range": "stddev: 0.0022451410047217325",
            "extra": "mean: 47.776035571441106 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3082.8510447277067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008221841694504613",
            "extra": "mean: 324.37506239887927 usec\nrounds: 1875"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2538.3629088244174,
            "unit": "iter/sec",
            "range": "stddev: 0.00011367218232214522",
            "extra": "mean: 393.95470069452216 usec\nrounds: 1724"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 938.8663598592286,
            "unit": "iter/sec",
            "range": "stddev: 0.0001638638277588083",
            "extra": "mean: 1.0651143152577516 msec\nrounds: 793"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 505.4981561065637,
            "unit": "iter/sec",
            "range": "stddev: 0.0002378955794055868",
            "extra": "mean: 1.9782465829394453 msec\nrounds: 422"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1363.2944950927601,
            "unit": "iter/sec",
            "range": "stddev: 0.00015397332213339874",
            "extra": "mean: 733.5172287422454 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 489.1070339873512,
            "unit": "iter/sec",
            "range": "stddev: 0.0003085600141698962",
            "extra": "mean: 2.0445422586702384 msec\nrounds: 375"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 826.209393219846,
            "unit": "iter/sec",
            "range": "stddev: 0.00013689716455535334",
            "extra": "mean: 1.2103469268279186 msec\nrounds: 615"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1aa9ebfe9f3bc008b3fb9f76a2b6be0b2380034",
          "message": "Expose environment variable from the command line, before python process start (#1358)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-04-11T05:31:00-07:00",
          "tree_id": "17fcfb4457b2a8be64c72431afb47539c5a99eb3",
          "url": "https://github.com/kvignesh1420/io/commit/d1aa9ebfe9f3bc008b3fb9f76a2b6be0b2380034"
        },
        "date": 1618339732271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.6925876554414474,
            "unit": "iter/sec",
            "range": "stddev: 0.04280326805745391",
            "extra": "mean: 270.81279940000513 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.428888311485117,
            "unit": "iter/sec",
            "range": "stddev: 0.001097708562749908",
            "extra": "mean: 39.32535263636923 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.1941338292187214,
            "unit": "iter/sec",
            "range": "stddev: 0.06039898290866412",
            "extra": "mean: 837.4270751999916 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.196190521043304,
            "unit": "iter/sec",
            "range": "stddev: 0.05667595120888418",
            "extra": "mean: 835.9872297999914 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.105638807850678,
            "unit": "iter/sec",
            "range": "stddev: 0.0558739233086201",
            "extra": "mean: 904.4545044000074 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4726151464783136,
            "unit": "iter/sec",
            "range": "stddev: 0.455649398875634",
            "extra": "mean: 2.1158864827999877 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3942403292880911,
            "unit": "iter/sec",
            "range": "stddev: 0.12550351276898375",
            "extra": "mean: 2.5365238554000142 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.635295323874074,
            "unit": "iter/sec",
            "range": "stddev: 0.07011182169905078",
            "extra": "mean: 1.574071085399987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.1765208533517764,
            "unit": "iter/sec",
            "range": "stddev: 0.05769126850843208",
            "extra": "mean: 314.8098332000018 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.764367857493768,
            "unit": "iter/sec",
            "range": "stddev: 0.07068138775966717",
            "extra": "mean: 566.7752309999969 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.7229754507862616,
            "unit": "iter/sec",
            "range": "stddev: 0.060726380487073406",
            "extra": "mean: 580.3913222000119 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.7336120840100653,
            "unit": "iter/sec",
            "range": "stddev: 0.06360885047492622",
            "extra": "mean: 576.830312400034 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.873742724896314,
            "unit": "iter/sec",
            "range": "stddev: 0.0011222554980995897",
            "extra": "mean: 47.9070770000097 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 4752.36490558006,
            "unit": "iter/sec",
            "range": "stddev: 0.00001060553399143141",
            "extra": "mean: 210.42155218885551 usec\nrounds: 2146"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3410.073478017201,
            "unit": "iter/sec",
            "range": "stddev: 0.000012694142571857888",
            "extra": "mean: 293.24881309638334 usec\nrounds: 2306"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 955.8369928880315,
            "unit": "iter/sec",
            "range": "stddev: 0.00005240984567876555",
            "extra": "mean: 1.0462034922696717 msec\nrounds: 841"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 479.6915151518237,
            "unit": "iter/sec",
            "range": "stddev: 0.00004560967932003744",
            "extra": "mean: 2.0846731043043305 msec\nrounds: 441"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1352.1698237955866,
            "unit": "iter/sec",
            "range": "stddev: 0.000047860944422067195",
            "extra": "mean: 739.5520757836216 usec\nrounds: 1148"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 587.7910974016661,
            "unit": "iter/sec",
            "range": "stddev: 0.00007807638936348197",
            "extra": "mean: 1.7012846986293357 msec\nrounds: 365"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 980.3172483905159,
            "unit": "iter/sec",
            "range": "stddev: 0.00003690855313407908",
            "extra": "mean: 1.0200779407296967 msec\nrounds: 658"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "752f5e7f19b7d739a5478c5d696acf9a27e2eced",
          "message": "Update README.md/RELEASE.md in master branch as well. (#1368)\n\n* Update R0.17 README.md/RELEASE.md, in preparation for release\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Adjust the time\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update for review comment\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-04-17T13:43:48+05:30",
          "tree_id": "776ab030e4d1ab73db02837ace29c59f6b418400",
          "url": "https://github.com/kvignesh1420/io/commit/752f5e7f19b7d739a5478c5d696acf9a27e2eced"
        },
        "date": 1618684456438,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 4.220667932180198,
            "unit": "iter/sec",
            "range": "stddev: 0.05228691400809218",
            "extra": "mean: 236.9293240000161 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.65358024661183,
            "unit": "iter/sec",
            "range": "stddev: 0.001141381862242784",
            "extra": "mean: 34.8996527272799 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3005392921052141,
            "unit": "iter/sec",
            "range": "stddev: 0.06530311815686672",
            "extra": "mean: 768.9117937999981 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2996450634761136,
            "unit": "iter/sec",
            "range": "stddev: 0.05174816201600384",
            "extra": "mean: 769.4408481999972 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3033356787189188,
            "unit": "iter/sec",
            "range": "stddev: 0.053164398025986756",
            "extra": "mean: 767.262046399992 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4548533728290251,
            "unit": "iter/sec",
            "range": "stddev: 0.5520460933573011",
            "extra": "mean: 2.1985106844000257 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4027472433388913,
            "unit": "iter/sec",
            "range": "stddev: 0.26819917812001404",
            "extra": "mean: 2.4829468520000546 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7430760693129334,
            "unit": "iter/sec",
            "range": "stddev: 0.05038420759175736",
            "extra": "mean: 1.345757239799991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.5765385457661205,
            "unit": "iter/sec",
            "range": "stddev: 0.048535817625118056",
            "extra": "mean: 279.59995040002923 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.035226781359609,
            "unit": "iter/sec",
            "range": "stddev: 0.06433271431070783",
            "extra": "mean: 491.3457356000208 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0216510383797104,
            "unit": "iter/sec",
            "range": "stddev: 0.05714673068752434",
            "extra": "mean: 494.645208799966 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9780424689768554,
            "unit": "iter/sec",
            "range": "stddev: 0.06849080812793022",
            "extra": "mean: 505.55031840001453 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 24.656783821461094,
            "unit": "iter/sec",
            "range": "stddev: 0.0012835627608724638",
            "extra": "mean: 40.55678985714297 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5235.18809276245,
            "unit": "iter/sec",
            "range": "stddev: 0.000012835881053184367",
            "extra": "mean: 191.01510438230127 usec\nrounds: 2213"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3804.9059281541117,
            "unit": "iter/sec",
            "range": "stddev: 0.000015509080315463095",
            "extra": "mean: 262.8185870774297 usec\nrounds: 2538"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1029.682134978292,
            "unit": "iter/sec",
            "range": "stddev: 0.00005648919660725391",
            "extra": "mean: 971.1734971696699 usec\nrounds: 883"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 531.8470291666237,
            "unit": "iter/sec",
            "range": "stddev: 0.00009383733928842826",
            "extra": "mean: 1.880239890719983 msec\nrounds: 485"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1579.2371209874284,
            "unit": "iter/sec",
            "range": "stddev: 0.00005952368099670525",
            "extra": "mean: 633.217131683647 usec\nrounds: 1253"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 676.2369672081963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007387359285362825",
            "extra": "mean: 1.4787715675001323 msec\nrounds: 400"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1099.2818013769233,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926771586120052",
            "extra": "mean: 909.6848494602873 usec\nrounds: 744"
          }
        ]
      }
    ]
  }
}