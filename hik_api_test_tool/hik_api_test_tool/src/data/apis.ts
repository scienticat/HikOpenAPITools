export const apisjson=
  [
    {
      "name": "1.1.1.1 获取所有树编码",
      "path": "/artemis/api/resource/v1/unit/getAllTreeCode"
    },
    {
      "name": "1.1.1.2 分页获取区域列表",
      "path": "/artemis/api/resource/v1/regions" 
    },
    {
      "name": "1.1.1.3 获取根区域信息",
      "path": "/artemis/api/resource/v1/regions/root"
    },
    {
      "name": "1.1.1.4 根据区域编号获取下一级区域列表",
      "path": "/artemis/api/resource/v1/regions/subRegions"
    },
    {
      "name": "1.1.1.5 根据组织编号获取下一层有监控点资源的子组织列表",
      "path": "/artemis/api/resource/v1/unit/getChildUnitsWithCameraByUnitIndexCode"
    },
    {
      "name": "1.1.2.1 分页获取编码设备",
      "path": "/artemis/api/resource/v1/device/getDeviceWithPage"
    },
    {
      "name": "1.1.2.2 根据区域编号获取下级编码设备列表",
      "path": "/artemis/api/api/resource/v1/device/getDeviceByUnitIndexCodeWithPage"
    },
    {
      "name": "1.1.2.3 根据设备编号获取编码设备详细信息",
      "path": "/artemis/api/resource/v1/device/getDeviceByIndexCode"
    },
    {
      "name": "1.1.3.1 分页获取卡口资源",
      "path": "/artemis/api/resource/v1/crossing/getCrossingsWithPage"
    },
    {
      "name": "1.1.3.2 根据空间条件分页查询卡口资源",
      "path": "/artemis/api/resource/v1/crossing/getCrossingsBySpatialIndexWithPage"
    },
    {
      "name": "1.1.3.3 根据组织编号分页获取卡口资源列表",
      "path": "/artemis/api/resource/v1/crossing/getCrossingsByUnitIndexCodeWithPagec"
    },
    {
      "name": "1.1.3.4 根据卡口编号分页获取车道资源",
      "path": "/artemis/api/resource/v1/crossing/getLanesByCrossingIndexCodes"
    },
    {
      "name": "1.1.3.5 根据编号获取卡口详细信息",
      "path": "/artemis/api/resource/v1/crossing/getCrossingByCrossingIndexCode"
    },
    {
      "name": "1.1.3.6 根据编号获取车道详细信息",
      "path": "/artemis/api/resource/v3/crossing/getLaneDetailsByLaneIndexCode"
    },
    {
      "name": "1.1.3.7 修改卡口经纬度",
      "path": "/artemis/api/resource/v1/crossing/modifyCrossOperationResource"
    },
    {
      "name": "1.1.4.1 分页获取监控点资源",
      "path": "/artemis/api/resource/v1/cameras"
    },
    {
      "name": "1.1.4.2 根据空间条件分页查询监控点资源",
      "path": "/artemis/api/resource/v1/camera/getCamerasBySpatialIndexWithPage"
    },
    {
      "name": "1.1.4.3 根据区域编号获取下级监控点列表c",
      "path": "/artemis/api/resource/v1/regions/regionIndexCode/cameras"
    },
    {
      "name": "1.1.4.4 根据编号获取监控点详细信息",
      "path": "/artemis/api/resource/v1/cameras/indexCode"
    },    
    {
      "name": "1.1.4.5 修改监控点经纬度",
      "path": "/artemis/api/resource/v1/camera/modifyCameraOperationResource"
    },
    {
      "name": "1.1.1.1 获取监控点预览取流URLc",
      "path": "/artemis/api/video/v1/cameras/previewURLs"
    },
    {
      "name": "1.1.1.2 获取监控点回放取流URL",
      "path": "/artemis/api/video/v1/cameras/playbackURLs"
    },
    {
      "name": "1.1.1.3 根据监控点编号进行云台操作",
      "path": "/artemis/api/video/v1/ptzs/controlling"
    },
    {
      "name": "1.1.1.4 根据监控点编号进行3D放大",
      "path": "/artemis/api/video/v1/ptzs/selZoom"
    },
    {
      "name": "1.1.1.5 根据监控点列表查询录像完整性结果",
      "path": "/artemis/api/nms/v1/record/list"
    },
    {
      "name": "1.1.1.6 根据监控点列表查询视频质量诊断结果",
      "path": "/artemis/api/nms/v1/vqd/listc"
    },
    {
      "name": "1.1.1.7 语音对讲",
      "path": "/artemis/api/video/v3/cameras/talkURLs"
    },
    {
      "name": "1.1.1.8 设置预置点信息",
      "path": "/artemis/api/video/v1/presets/addition"
    },
    {
      "name": "1.1.1.9 查询预置点信息",
      "path": "/artemis/api/video/v1/presets/searches"
    },
    {
      "name": "1.1.1.10 删除预置点信息",
      "path": "/artemis/api/video/v1/presets/deletion"
    },    
    {
      "name": "1.1.1.11 获取PTZ绝对位置",
      "path": "/artemis/api/daf/v1/transparentchannel"
    }
    ,    
    {
      "name": "1.1.2.1	获取电视墙大屏信息",
      "path": "/artemis/api/tvms/v1/tvwall/allResources"
    }
    ,    
    {
      "name": "1.1.2.2	获取电视墙场景列表信息",
      "path": "/artemis/api/tvms/v1/tvwall/scenes"
    }
  ]

